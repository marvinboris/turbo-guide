<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Method;
use App\Models\Recharge;
use App\Models\Restaurant;
use App\Notifications\RestaurantRecharge;
use Illuminate\Http\Request;

class RechargeController extends Controller
{
    private $rules = [
        'token' => 'required|string|exists:restaurants',
        'amount' => 'required|numeric',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $recharges = [];
        $filteredData = Recharge::latest();

        $filteredData = $filteredData
            ->join('methods', 'methods.id', '=', 'recharges.method_id')
            ->join('restaurants', 'restaurants.id', '=', 'recharges.restaurant_id')
            ->select('recharges.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('methods.name', 'LIKE', "%$search%")
                        ->orWhere('restaurants.name', 'LIKE', "%$search%")
                        ->orWhere('amount', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $recharge) {
            $recharges[] = array_merge($recharge->toArray(), [
                'method' => $recharge->method->name,
                'restaurant' => $recharge->restaurant->name,
            ]);
        }

        return [
            'recharges' => $recharges,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $recharges = $data['recharges'];
        $total = $data['total'];

        return response()->json([
            'recharges' => $recharges,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $recharge = Recharge::find($id);
        if (!$recharge) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['recharges']['not_found'], 'danger'),
        ]);

        return response()->json([
            'recharge' => $recharge,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        if ($request->amount <= 0) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['recharges']['amount'], 'danger'),
        ]);

        $restaurant = Restaurant::whereToken($request->token)->first();

        $input = $request->except('token') + [
            'restaurant_id' => $restaurant->id,
            'method_id' => Method::whereSlug('admin')->first()->id,
            'status' => 2,
        ];

        $recharge = Recharge::create($input);

        $restaurant->update(['balance' => $restaurant->balance + $request->amount]);

        $restaurant->notify(new RestaurantRecharge($recharge));

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['recharges']['created'], 'success'),
        ]);
    }
}
