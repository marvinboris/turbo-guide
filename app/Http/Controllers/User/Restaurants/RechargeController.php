<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Method\MonetbilController;
use App\Http\Controllers\UtilController;
use App\Models\Method;
use Illuminate\Http\Request;

class RechargeController extends Controller
{

    private $rules = [
        'method_id' => 'required|exists:methods,id',
        'amount' => 'required|numeric',
    ];

    private function data()
    {
        $restaurant = UtilController::get(request());

        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = $restaurant->recharges()->latest();

        $filteredData = $filteredData
            ->select('recharges.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        $filteredData = $filteredData->get();

        foreach ($filteredData as $recharge) {
            $data[] = array_merge($recharge->toArray(), [
                'method' => $recharge->method->name,
            ]);
        }

        return [
            'recharges' => $data,
            'total' => $total,
        ];
    }

    private function information()
    {
        $methods = [];
        foreach (Method::where('name', '!=', 'Admin')->whereIsActive(1)->get() as $method) {
            $methods[] = $method->toArray() + [];
        }

        return [
            'methods' => $methods,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $recharges = $data['recharges'];
        $total = $data['total'];

        return response()->json([
            'recharges' => $recharges,
            'total' => $total,
        ] + $this->information());
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $recharge = $restaurant->recharges()->find($id);
        if (!$recharge) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['recharges']['not_found'], 'danger'),
        ]);

        $recharge = $recharge->toArray();

        return response()->json([
            'recharge' => $recharge,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $request->validate($this->rules);

        if ($request->amount <= 0) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['recharges']['amount'], 'danger'),
        ]);

        $method = Method::find($request->method_id);
        $link = null;
        switch ($method->name) {
            case 'Mobile payment':
                new MonetbilController();
                $monetbil = MonetbilController::generateWidgetData([
                    'amount' => $request->amount,
                ]);
                $link = $monetbil['link'];
                break;
        }

        return response()->json([
            'link' => $link,
        ]);
    }
}
