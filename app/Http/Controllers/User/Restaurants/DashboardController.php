<?php

namespace App\Http\Controllers\User\Restaurants;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Plan;
use App\Models\Restaurant;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index($restaurantId)
    {
        $restaurant = Restaurant::find($restaurantId);

        $totalMealsNumber = $restaurant->meals()->count();
        $totalAddonsNumber = $restaurant->addons()->count();
        $totalCategoriesNumber = $restaurant->categories()->count();
        $creditBalance = $restaurant->balance ? number_format($restaurant->balance, 2) : number_format(0, 2);
        $customerReview = 0;
        $count = 0;
        $marks = [1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0];

        foreach ($restaurant->meals as $meal) {
            foreach ($meal->comments as $comment) {
                $count++;
                $customerReview += $comment->mark;
                $marks[$comment->mark]++;
            }
        }

        $customerReview = $customerReview > 0 ? $customerReview / $count : $customerReview;

        $mostViewed = [];
        foreach ($restaurant->meals()->orderBy('views', 'DESC')->limit(4)->get() as $meal) {
            $mostViewed[] = array_merge($meal->toArray(), [
                'comments' => $meal->comments()->count(),
                'price' => number_format($meal->price, 2),
            ]);
        }

        $plans = [
            'monthly' => Plan::whereMonths(1)->get(),
            'yearly' => Plan::whereMonths(12)->get(),
        ];

        return response()->json([
            'blocksData' => [
                'customerReview' => number_format((float)$customerReview, 1),
                'totalMeals' => $totalMealsNumber,
                'totalAddons' => $totalAddonsNumber,
                'totalCategories' => $totalCategoriesNumber,
                'creditBalance' => $creditBalance,
            ],

            'mostViewed' => $mostViewed,
            'comments' => $count,
            'marks' => $marks,
            'plans' => $plans,
        ]);
    }
}
