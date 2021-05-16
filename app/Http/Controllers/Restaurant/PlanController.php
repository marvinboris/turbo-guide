<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Plan;
use App\Notifications\PlanExpired;
use App\Notifications\PlanImminentExpiration;
use App\Notifications\PlanPurchase;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    private $rules = [
        'plan_id' => 'required|exists:plans,id',
        'terms' => 'accepted',
    ];

    private function data()
    {
        $restaurant = UtilController::get(request());

        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = $restaurant->plans()->orderBy('plan_restaurant.created_at', 'DESC');

        $filteredData = $filteredData
            ->select('plans.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('price', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $plan) {
            $data[] = array_merge($plan->toArray(), [
                'created_at' => $plan->pivot->created_at,
                'expiry_date' => $plan->pivot->expiry_date,
            ]);
        }

        return [
            'plans' => $data,
            'total' => $total,
        ];
    }

    private function information()
    {
        $types = [
            [
                'months' => 1,
                'name' => 'Monthly',
                'plans' => Plan::whereMonths(1)->get(),
            ],
            [
                'months' => 12,
                'name' => 'Yearly',
                'plans' => Plan::whereMonths(12)->get(),
            ],
        ];

        return [
            'types' => $types,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $plans = $data['plans'];
        $total = $data['total'];

        return response()->json([
            'plans' => $plans,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $request->validate($this->rules);

        $plan = Plan::find($request->plan_id);
        if ($restaurant->balance >= $plan->price) {
            $old_plan = $restaurant->plan;
            if ($old_plan) $old_plan->pivot->update([
                'expiry_date' => Carbon::now(),
            ]);

            $restaurant->plans()->attach($plan, [
                'expiry_date' => Carbon::now()->addMonths($plan->months),
            ]);

            $restaurant->update([
                'balance' => $restaurant->balance - $plan->price,
            ]);

            $restaurant->notify(new PlanPurchase($restaurant->plan));

            $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 3));
            $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 2));
            $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 1));

            if (!$restaurant->qr && $restaurant->name) $restaurant->qrCode();

            return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['purchased'], 'success'),
                'data' => array_merge($restaurant->toArray(), [
                    'notifications' => $restaurant->notifications()->latest()->limit(5)->get(),
                    'language' => $restaurant->language->abbr
                ]),
            ]);
        }

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['balance'], 'danger'),
            'amount' => $plan->price - $restaurant->balance,
        ]);
    }
}
