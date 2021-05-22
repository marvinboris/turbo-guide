<?php

namespace App\Http\Controllers\User\Restaurants;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Language;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function information($restaurantId)
    {
        $restaurant = Restaurant::find($restaurantId);

        $restaurant_languages = [];
        foreach ($restaurant->languages as $language) {
            $restaurant_languages[] = [
                'id' => $language->id,
                'name' => $language->name,
            ];
        }

        $restaurant = array_merge($restaurant->toArray(), [
            'notifications' => $restaurant->notifications()->latest()->limit(5)->get(),
            'language' => $restaurant->language->abbr,
        ]);

        return [
            'data' => $restaurant,
            'restaurant' => $restaurant + [
                'languages' => $restaurant_languages,
            ],
            'allLanguages' => Language::all(),
        ];
    }

    public function index($restaurantId)
    {
        $information = $this->information($restaurantId);

        return response()->json($information);
    }

    public function restaurant(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $input = $request->validate([
            'name' => 'required|string',
            'owner' => 'required|string',
            'phone' => 'nullable|string',
            'whatsapp' => 'nullable|string',
            'location' => 'nullable',
            'currency' => 'nullable|string',
            'position' => 'nullable|integer',
            'photo' => 'nullable|file|image',
        ]);

        $restaurant_slug = $restaurant->slug;

        if ($file = $request->file('logo')) {
            if ($restaurant->logo && is_file(public_path($restaurant->logo))) unlink(public_path($restaurant->logo));
            $fileName = UtilController::resize($file, 'restaurants');
            $input['logo'] = htmlspecialchars($fileName);
        }

        $restaurant->update($input);

        if ($restaurant->slug !== $restaurant_slug || !$restaurant->qr) $restaurant->qrCode();

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['restaurant'], 'success'),
        ] + $this->information($restaurantId));
    }

    public function account(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $request->validate([
            'email' => 'required|string|email',
            'country' => 'required|string',
            'photo' => 'nullable|file|image',
            'password' => 'nullable',
            'new_password' => 'nullable|confirmed',
        ]);

        $input = $request->except(['password', 'new_password', 'new_password_confirmation']);
        if ($request->password) {
            if (Hash::check($request->password, $restaurant->password)) $input['password'] = Hash::make($request->new_password);
            else return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['password'], 'success'),
            ]);
        }

        if ($file = $request->file('photo')) {
            if ($restaurant->photo && is_file(public_path($restaurant->photo))) unlink(public_path($restaurant->photo));
            $fileName = UtilController::resize($file, 'restaurants');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['account'], 'success'),
        ] + $this->information($restaurantId));
    }

    public function cms(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $input = $request->validate([
            'banner1' => 'required|file|image',
            'banner2' => 'nullable|file|image',
            'banner3' => 'nullable|file|image',
        ]);

        if ($file = $request->file('banner1')) {
            if ($restaurant->banner1 && is_file(public_path($restaurant->banner1))) unlink(public_path($restaurant->banner1));
            $fileName = UtilController::resize($file, 'restaurants');
            $input['banner1'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('banner2')) {
            if ($restaurant->banner2 && is_file(public_path($restaurant->banner2))) unlink(public_path($restaurant->banner2));
            $fileName = UtilController::resize($file, 'restaurants');
            $input['banner2'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('banner3')) {
            if ($restaurant->banner3 && is_file(public_path($restaurant->banner3))) unlink(public_path($restaurant->banner3));
            $fileName = UtilController::resize($file, 'restaurants');
            $input['banner3'] = htmlspecialchars($fileName);
        }

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ] + $this->information($restaurantId));
    }

    public function translatable(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $request->validate([
            'address' => 'array|nullable',
            'caution' => 'array|nullable',
            'must_read' => 'array|nullable',
            'disclaimer' => 'array|nullable',
            'days' => 'array|required',
            'hours' => 'array|required',
        ]);

        $restaurant->update([
            'address' => json_encode($request->address),
            'caution' => json_encode($request->caution),
            'must_read' => json_encode($request->must_read),
            'disclaimer' => json_encode($request->disclaimer),
            'days' => json_encode($request->days),
            'hours' => json_encode($request->hours),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ] + $this->information($restaurantId));
    }

    public function language(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $request->validate([
            'languages' => 'array|exists:languages,id',
            'language' => 'required|exists:languages,id',
        ]);

        $languages = [];
        foreach ($request->languages as $language) {
            $languages[$language] = [
                'main' => +$language === +$request->language ? 1 : 0,
            ];
        }

        $restaurant->languages()->sync($languages);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ] + $this->information($restaurantId));
    }
}
