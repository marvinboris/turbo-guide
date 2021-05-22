<?php

namespace App\Http\Controllers\User\Restaurants;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class AddonController extends Controller
{
    private $rules = [
        'name' => 'array|required',
        'reference' => 'nullable|string',
        'description' => 'array|nullable',
        'price' => 'required|numeric',
        'photo' => 'required|file|image',
        'is_active' => 'required|integer',
    ];

    private function data($restaurantId)
    {
        $restaurant = Restaurant::find($restaurantId);

        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = $restaurant->addons()->latest();

        $filteredData = $filteredData
            ->select('addons.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        $filteredData = $filteredData->get();

        foreach ($filteredData as $addon) {
            $data[] = array_merge($addon->toArray(), [
                'price' => number_format($addon->price, 2),
            ]);
        }

        return [
            'addons' => $data,
            'total' => $total,
        ];
    }



    public function index($restaurantId)
    {
        $data = $this->data($restaurantId);

        $addons = $data['addons'];
        $total = $data['total'];

        return response()->json([
            'addons' => $addons,
            'total' => $total,
        ]);
    }

    public function show($restaurantId, $id)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $addon = $restaurant->addons()->find($id);
        if (!$addon) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['not_found'], 'danger'),
        ]);

        $addon = $addon->toArray();

        return response()->json([
            'addon' => $addon,
        ]);
    }

    public function store(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $request->validate($this->rules);

        $input = $request->except(['photo', 'name', 'description']);

        $addonWithReference = $restaurant->addons()->whereReference($request->reference)->first();
        if ($addonWithReference) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['reference'], 'danger'),
        ]);

        if ($file = $request->file('photo')) {
            $fileName = UtilController::resize($file, 'addons');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $restaurant->addons()->create($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $restaurantId, $id)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $addon = $restaurant->addons()->find($id);
        if (!$addon) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $addon);
        $request->validate($rules);

        $input = $request->except(['photo', 'name', 'description']);

        $addonWithReference = $restaurant->addons()->whereReference($request->reference)->first();
        if ($addonWithReference && $addonWithReference->id !== +$id) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['reference'], 'danger'),
        ]);

        if ($file = $request->file('photo')) {
            if ($addon->photo && is_file(public_path($addon->photo))) unlink(public_path($addon->photo));
            $fileName = UtilController::resize($file, 'addons');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $addon->update($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
        ]);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$restaurant->language->abbr]['messages']['addons']['updated']
            ],
        ]);
    }

    public function destroy($restaurantId, $id)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $addon = $restaurant->addons()->find($id);
        if (!$addon) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['not_found'], 'danger'),
        ]);

        if ($addon->photo && is_file(public_path($addon->photo))) unlink(public_path($addon->photo));
        $addon->delete();

        $data = $this->data($restaurantId);

        $addons = $data['addons'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['addons']['deleted'], 'success'),
            'addons' => $addons,
            'total' => $total,
        ]);
    }
}
