<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $restaurant = UtilController::get(request());

        $totalMealsNumber = $restaurant->meals()->count();
        $totalAddonsNumber = $restaurant->addons()->count();
        $totalDrinksNumber = $restaurant->drinks()->count();
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
                'price' => number_format($meal->price, 2),
            ]);
        }

        return response()->json([
            'blocksData' => [
                'customerReview' => number_format((float)$customerReview, 1),
                'totalMeals' => $totalMealsNumber,
                'totalAddons' => $totalAddonsNumber,
                'totalDrinks' => $totalDrinksNumber,
                'creditBalance' => $creditBalance,
            ],

            'mostViewed' => $mostViewed,
            'comments' => $count,
            'marks' => $marks,
        ]);
    }
}
