<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Mail\VerificationLink;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class RestaurantController extends Controller
{
    private $rules = [
        'owner' => 'required|string',
        'email' => 'required|string|email',
        'country' => 'required',
        'phone' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $restaurants = [];
        $filteredData = Restaurant::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('owner', 'LIKE', "%$search%")
                        ->orWhere('token', 'LIKE', "%$search%")
                        ->orWhere('phone', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $restaurant) {
            $restaurants[] = $restaurant->toArray();
        }

        return [
            'restaurants' => $restaurants,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $restaurants = $data['restaurants'];
        $total = $data['total'];

        return response()->json([
            'restaurants' => $restaurants,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $restaurant = Restaurant::find($id);
        if (!$restaurant) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['restaurants']['not_found'], 'danger'),
        ]);

        return response()->json([
            'data' => $restaurant->toArray() + [
                'notifications' => $restaurant->notifications()->latest()->limit(5)->get(),
                'language' => $restaurant->language->abbr,
                'languages' => $restaurant->languages,
            ]
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'email' => 'required|string|email|unique:restaurants',
        ]));

        $token = Restaurant::ref();
        $password = Restaurant::generatePassword();
        $restaurant = Restaurant::create([
            'owner' => $request->owner,
            'email' => $request->email,
            'phone' => $request->code . $request->phone,
            'country' => $request->country,
            'token' => $token,
            'password' => Hash::make($password),
            'language_id' => 1,
            'slug' => 'temp'
        ]);
        Mail::to($restaurant->email)->send(new VerificationLink([
            'token' => $token,
            'password' => $password,
        ]));

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['restaurants']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $restaurant = Restaurant::find($id);
        if (!$restaurant) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['restaurants']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $restaurant);
        $request->validate($rules);

        $input = $request->all();

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['restaurants']['updated'], 'success'),
            'restaurant' => $restaurant,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $restaurant = Restaurant::find($id);
        if (!$restaurant) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['restaurants']['not_found'], 'danger'),
        ]);

        $restaurant->delete();

        $data = $this->data();

        $restaurants = $data['restaurants'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['restaurants']['deleted'], 'success'),
            'restaurants' => $restaurants,
            'total' => $total,
        ]);
    }
}
