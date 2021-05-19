<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Method;
use App\Models\Plan;
use App\Models\PlanRestaurant;
use App\Models\Restaurant;
use App\Notifications\PlanImminentExpiration;
use App\Notifications\PlanPurchase;
use App\Notifications\RestaurantRecharge;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    private $rules = [
        'token' => 'required|string|exists:restaurants',
        'plan_id' => 'required|exists:plans,id',
    ];

    private function data($bought = false)
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $plans = [];
        if ($bought) {
            $filteredData = PlanRestaurant::latest();

            $filteredData = $filteredData
                ->join('plans', 'plans.id', '=', 'plan_restaurant.plan_id')
                ->join('restaurants', 'restaurants.id', '=', 'plan_restaurant.restaurant_id')
                ->select('plan_restaurant.*')
                ->when($search, function ($query, $search) {
                    if ($search !== "")
                        $query
                            ->where('plans.name', 'LIKE', "%$search%")
                            ->orWhere('restaurants.name', 'LIKE', "%$search%")
                            ->orWhere('plans.price', 'LIKE', "%$search%");
                });

            $total = $filteredData->count();

            if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

            $filteredData = $filteredData->get();

            foreach ($filteredData as $plan_restaurant) {
                $plans[] = array_merge($plan_restaurant->toArray(), [
                    'plan' => $plan_restaurant->plan->name,
                    'type' => $plan_restaurant->plan->type,
                    'restaurant' => $plan_restaurant->restaurant->name,
                ]);
            }
        } else {
            $filteredData = Plan::latest();

            $filteredData = $filteredData
                ->select('plans.*')
                ->when($search, function ($query, $search) {
                    if ($search !== "")
                        $query
                            ->where('name', 'LIKE', "%$search%")
                            ->orWhere('amount', 'LIKE', "%$search%");
                });

            $total = $filteredData->count();

            if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

            $filteredData = $filteredData->get();

            foreach ($filteredData as $plan) {
                $plans[] = array_merge($plan->toArray(), []);
            }
        }

        return [
            'plans' => $plans,
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



    public function index()
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

    public function bought()
    {
        $data = $this->data(true);

        $plans = $data['plans'];
        $total = $data['total'];

        return response()->json([
            'plans' => $plans,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $plan = Plan::find($id);
        if (!$plan) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['plans']['not_found'], 'danger'),
        ]);

        return response()->json([
            'plan' => $plan,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $restaurant = Restaurant::whereToken($request->token)->first();
        $plan = Plan::find($request->plan_id);

        $old_plan = $restaurant->plan;
        if ($old_plan) $old_plan->pivot->update([
            'expiry_date' => now(),
        ]);

        $restaurant->plans()->attach($plan, [
            'expiry_date' => now()->addMonths($plan->months),
        ]);

        $restaurant->notify(new PlanPurchase($restaurant->plan));

        $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 3));
        $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 2));
        $restaurant->notify(new PlanImminentExpiration($restaurant->plan, 1));

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['plans']['bought'], 'success'),
        ]);
    }
}
