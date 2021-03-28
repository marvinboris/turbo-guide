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
            if ($category->meals()->count() > 0) $categories[] = $category->toArray() + [
                'meals' => $category->meals,
            ];
        }

        return response()->json([
            'restaurant' => [
                'name' => $restaurant->name,
                'mark' => $mark,
                'photo' => $restaurant->photo,
                'days' => $restaurant->days,
                'hours' => $restaurant->hours,
                'address' => $restaurant->address,
                'phone' => $restaurant->phone,
                'whatsapp' => $restaurant->whatsapp,
                'location' => $restaurant->location,
                'meals' => $restaurant->meals,
            ],
            'categories' => $categories,
            'addons' => $restaurant->addons,
            'comments' => $restaurant->comments,
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

        return response()->json([
            'meal' => $meal->toArray(),
            'addons' => $restaurant->addons,
        ]);
    }
}
