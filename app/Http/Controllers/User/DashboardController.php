<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Models\Subject;
use App\Models\PlanRestaurant;
use App\Models\Recharge;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalRestaurantsNumber = Restaurant::count();
        $totalPlansNumber = PlanRestaurant::count();
        $totalPlansAmount = 0;
        $totalRechargesAmount = 0;

        foreach (PlanRestaurant::all() as $plan_restaurant) {
            $totalPlansAmount += $plan_restaurant->plan->price;
        }

        foreach (Recharge::all() as $recharge) {
            if ($recharge->status === 2) $totalRechargesAmount += $recharge->amount;
        }

        $totalRestaurants = [];
        $totalPlans = [];
        $totalRecharges = [];

        foreach (Restaurant::latest()->limit(5)->get() as $restaurant) {
            $totalRestaurants[] = $restaurant->toArray() + [];
        }
        foreach (PlanRestaurant::latest()->limit(5)->get() as $plan_restaurant) {
            $totalPlans[] = $plan_restaurant->toArray() + [
                'plan' => $plan_restaurant->plan->name,
                'amount' => $plan_restaurant->plan->amount,
                'type' => $plan_restaurant->plan->type,
                'restaurant' => $plan_restaurant->restaurant->name,
            ];
        }
        foreach (Recharge::whereStatus(2)->latest()->limit(5)->get() as $recharge) {
            $totalRecharges[] = $recharge->toArray() + [
                'method' => $recharge->method->name,
                'restaurant' => $recharge->restaurant->name,
            ];
        }

        $financeTrackerData = [];
        $days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        $dayOfWeek = Carbon::today()->dayOfWeek;
        if ($dayOfWeek > 0) {
            for ($i = 1; $i <= $dayOfWeek; $i++) {
                $subDays = $dayOfWeek - $i;
                $amount = 0;
                foreach (Recharge::whereStatus(2)->whereDate('created_at', Carbon::today()->subDays($subDays))->get() as $recharge) {
                    $amount += $recharge->amount;
                }
                $financeTrackerData[] = [
                    'name' => $days[$i],
                    'amount' => $amount,
                ];
            }

            for ($i = $dayOfWeek + 1; $i <= 7; $i++) {
                $day = $i;
                if ($i === 7) $day = 0;
                $financeTrackerData[] = ['name' => $days[$day], 'amount' => 0];
            }
        } else {
            for ($i = 0; $i < 7; $i++) {
                $subDays = 6 - $i;
                $amount = 0;
                foreach (Recharge::whereStatus(2)->whereDate('created_at', Carbon::today()->subDays($subDays))->get() as $recharge) {
                    $amount += $recharge->amount;
                }
                $day = $i;
                if ($subDays === 0) $day = 0;
                $financeTrackerData[] = [
                    'name' => $days[$day],
                    'amount' => $amount,
                ];
            }
        }

        return response()->json([
            'blocksData' => [
                'totalRestaurants' => $totalRestaurantsNumber,
                'totalPlans' => $totalPlansNumber,
                'totalPlansAmount' => number_format($totalPlansAmount, 2),
                'totalRecharges' => $totalRechargesAmount,
            ],

            'totalRestaurants' => $totalRestaurants,
            'totalPlans' => $totalPlans,
            'totalRecharges' => $totalRecharges,
            'financeTrackerData' => $financeTrackerData,
        ]);
    }
}
