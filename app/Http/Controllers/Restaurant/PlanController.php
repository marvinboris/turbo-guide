<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Plan;
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

        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = $restaurant->plans()->latest();

        $filteredData = $filteredData
            ->select('plans.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        $filteredData = $filteredData->get();

        foreach ($filteredData as $plan) {
            $data[] = array_merge($plan->toArray(), [
                'created_at' => $plan->pivot->created_at
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
            if ($old_plan) $old_plan->update([
                'expiry_date' => Carbon::now(),
            ]);

            $restaurant->plans()->attach($plan, [
                'expiry_date' => Carbon::now()->addMonths($plan->months),
            ]);
            $restaurant->update([
                'balance' => $restaurant->balance - $plan->price,
            ]);

            return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['purchased'], 'success'),
            ]);
        }

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['balance'], 'danger'),
            'amount' => $plan->price - $restaurant->balance,
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $plan = $restaurant->plans()->find($id);
        if (!$plan) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $plan);
        $request->validate($rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            if ($plan->photo) unlink(public_path($plan->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/plans', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $plan->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$restaurant->language->abbr]['messages']['plans']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $plan = $restaurant->plans()->find($id);
        if (!$plan) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['not_found'], 'danger'),
        ]);

        $plan->delete();

        $data = $this->data();

        $plans = $data['plans'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['plans']['deleted'], 'success'),
            'plans' => $plans,
            'total' => $total,
        ]);
    }
}
