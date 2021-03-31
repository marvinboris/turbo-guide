<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function index()
    {
        $restaurant = UtilController::get(request());

        return response()->json([
            'restaurant' => $restaurant->toArray() + [
                'banners' => []
            ],
        ]);
    }

    public function restaurant(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $input = $request->validate([
            'name' => 'required|string',
            'owner' => 'required|string',
            'phone' => 'required|string',
            'whatsapp' => 'nullable|string',
            'location' => 'nullable',
            'address' => 'nullable|string',
        ]);

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['restaurant'], 'success'),
        ]);
    }

    public function account(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

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
            if ($restaurant->photo) unlink(public_path($restaurant->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/restaurants', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['account'], 'success'),
        ]);
    }

    public function cms(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $input = $request->validate([
            'banners.*' => 'nullable|file|image',
        ]);

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ]);
    }

    public function calendar(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $input = $request->validate([
            'days' => 'required|string',
            'hours' => 'required|string',
        ]);

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ]);
    }
}
