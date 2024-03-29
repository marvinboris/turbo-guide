<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Order;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
                        // 'price' => number_format($meal->price, 2,),
                    ]);
                }
                $categories[] = array_merge($category->toArray(), [
                    'meals' => $meals,
                ]);
            }
        }

        $meal_addon = DB::table('meal_addon')->get();

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
                'drinks' => [],
                'delivery_fee' => 0,
                'service_charge' => 0,
            ],
            'categories' => $categories,
            'currency' => $restaurant->currency,
            'position' => $restaurant->position,
            'languages' => $languages,
            'meal_addon' => $meal_addon,
            'addons' => $restaurant->addons,
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

    public function payment(Request $request, $slug)
    {
        $restaurant = Restaurant::whereSlug($slug)->first();
        if (!$restaurant) return response()->json([
            'message' => UtilController::message('Restaurant not found.', 'danger'),
        ]);

        $input = $request->validate([
            'location' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'method_id' => 'required|exists:methods,id',
            'option' => 'required|in:delivery,dine_in,pick_up',
            'note' => 'nullable|string',
            'due_amount' => 'required|numeric',
            'items' => 'required',
        ]);

        $order_no = $restaurant->generateOrderNo();
        $restaurant->orders()->create(array_merge($input, [
            'order_no' => $order_no,
            'items' => json_encode($request->items),
        ]));
        $tracking_code = Order::encryptIt($order_no);

        return response()->json([
            'order_no' => $order_no,
            'tracking_code' => $tracking_code,
        ] + $this->information($slug));
    }

    public function tracking($slug, $md5)
    {
        $restaurant = Restaurant::whereSlug($slug)->first();
        if (!$restaurant) return response()->json([
            'message' => UtilController::message('Restaurant not found.', 'danger'),
        ]);

        $order_no = Order::decryptIt($md5);
        $order = $restaurant->orders()->whereOrderNo($order_no)->first();
        if (!$order) return response()->json([
            'message' => UtilController::message('Order not found.', 'danger'),
        ]);
        $order = array_merge($order->toArray(), [
            'delivery_man' => $order->delivery_man,
        ]);

        return response()->json([
            'order' => $order,
        ] + $this->information($slug));
    }
}
