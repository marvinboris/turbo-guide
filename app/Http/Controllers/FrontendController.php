<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function show($md5)
    {
        $restaurant = Restaurant::whereMd5($md5)->first();
        if (!$restaurant) return response()->json([
            'message' => 'Restaurant not found.'
        ]);

        $mark = number_format($restaurant->mark ?? 0, 1);

        $categories = [];
        foreach ($restaurant->categories as $category) {
            if ($category->meals()->count() > 0 && $category->is_active) {
                $meals = [];
                foreach ($category->meals as $meal) {
                    if ($meal->is_active) $meals[] = array_merge($meal->toArray(), [
                        'price' => number_format($meal->price, 2,),
                    ]);
                }
                $categories[] = array_merge($category->toArray(), [
                    'meals' => $meals,
                ]);
            }
        }

        return response()->json([
            'restaurant' => [
                'name' => $restaurant->name,
                'mark' => $mark,
                'banner1' => $restaurant->banner1,
                'banner2' => $restaurant->banner2,
                'banner3' => $restaurant->banner3,
                'days' => $restaurant->days,
                'hours' => $restaurant->hours,
                'address' => $restaurant->address,
                'phone' => $restaurant->phone,
                'whatsapp' => $restaurant->whatsapp,
                'location' => $restaurant->location,
                'meals' => $restaurant->meals,
                'plan' => $restaurant->plan,
            ],
            'categories' => $categories,
            'currency' => $restaurant->currency,
            'position' => $restaurant->position,
        ]);
    }

    public function meal($md5, $id)
    {
        $restaurant = Restaurant::whereMd5($md5)->first();
        if (!$restaurant) return response()->json([
            'message' => 'Restaurant not found.'
        ]);

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => 'Meal not found.'
        ]);

        $meal->update(['views' => $meal->views + 1]);

        $addons = [];
        foreach ($meal->addons as $addon) {
            $addons[] = $addon->toArray() + [
                'formattedPrice' => number_format($addon->price, 2),
            ];
        }

        return response()->json([
            'meal' => $meal->toArray(),
            'addons' => $addons,
            'comments' => $meal->comments,
            'currency' => $restaurant->currency,
            'position' => $restaurant->position,
        ]);
    }

    public function comment(Request $request, $md5, $id)
    {
        $restaurant = Restaurant::whereMd5($md5)->first();
        if (!$restaurant) return response()->json([
            'message' => UtilController::message('Restaurant not found.'),
        ]);

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message('Meal not found.'),
        ]);

        $input = $request->validate([
            'name' => 'required|string',
            'mark' => 'required|integer',
            'body' => 'required|string',
            'country' => 'required|string',
        ]);

        $meal->comments()->create($input);

        return response()->json([
            'message' => UtilController::message('Comment successfully posted.'),
            'comments' => $meal->comments,
        ]);
    }
}
