<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    private function information($slug)
    {
        $restaurant = Restaurant::whereSlug($slug)->first();

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

        $languages = [];
        foreach ($restaurant->languages as $language) {
            $languages[] = $language;
        }
        if (count($languages) === 0) $languages[] = Language::first()->toArray() + [
            'pivot' => [
                'main' => 1
            ]
        ];

        return [
            'restaurant' => [
                'name' => $restaurant->name,
                'logo' => $restaurant->logo,
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
                'caution' => $restaurant->caution,
                'must_read' => $restaurant->must_read,
                'disclaimer' => $restaurant->disclaimer,
            ],
            'categories' => $categories,
            'currency' => $restaurant->currency,
            'position' => $restaurant->position,
            'languages' => $languages,
        ];
    }

    public function show($slug)
    {
        $restaurant = Restaurant::whereSlug($slug)->first();
        if (!$restaurant) return response()->json([
            'message' => UtilController::message('Restaurant not found.', 'danger'),
        ]);

        $information = $this->information($slug);

        return response()->json($information);
    }

    public function meal($slug, $id)
    {
        $restaurant = Restaurant::whereSlug($slug)->first();
        if (!$restaurant) return response()->json([
            'message' => UtilController::message('Restaurant not found.', 'danger'),
        ]);

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message('Meal not found.', 'danger'),
        ]);

        $meal->update(['views' => $meal->views + 1]);

        $addons = [];
        foreach ($meal->addons()->whereIsActive(1)->get() as $addon) {
            $addons[] = $addon->toArray() + [
                'formattedPrice' => number_format($addon->price, 2),
            ];
        }

        $data = [
            'meal' => $meal->toArray(),
            'addons' => $addons,
            'comments' => $meal->comments,
            'currency' => $restaurant->currency,
            'position' => $restaurant->position,
        ];

        if (request()->restaurant == 1) $data += $this->information($slug);

        return response()->json($data);
    }

    public function comment(Request $request, $slug, $id)
    {
        $restaurant = Restaurant::whereSlug($slug)->first();
        if (!$restaurant) return response()->json([
            'message' => UtilController::message('Restaurant not found.', 'danger'),
        ]);

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message('Meal not found.', 'danger'),
        ]);

        $input = $request->validate([
            'name' => 'required|string',
            'mark' => 'required|integer',
            'body' => 'required|string',
            'country' => 'required|string',
        ]);

        $meal->comments()->create($input);

        return response()->json([
            'message' => UtilController::message('Comment successfully posted.', 'success'),
            'comments' => $meal->comments,
        ]);
    }
}
