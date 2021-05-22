<?php

namespace App\Http\Controllers\User\Restaurants;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Category;
use App\Models\Meal;
use App\Models\Restaurant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MealController extends Controller
{
    private $rules = [
        'category_id' => 'required|exists:categories,id',
        'name' => 'array|required',
        'reference' => 'nullable|string',
        'description' => 'array|nullable',
        'price' => 'required|numeric',
        'time' => 'required|numeric',
        'photo' => 'required|file|image',
        'is_active' => 'required|integer',
        'addons' => 'array|exists:addons,id',
    ];

    private function data($restaurantId)
    {
        $restaurant = Restaurant::find($restaurantId);

        $category_id = request()->category_id;

        $total = 0;

        $data = [];
        if ($category_id > 0) $filteredData = $restaurant->categories()->find($category_id)->meals()->latest();
        else $filteredData = $restaurant->meals()->latest();

        $countedMeals = $restaurant->meals()->count();

        $total = $filteredData->count();

        $filteredData = $filteredData->get();

        foreach ($filteredData as $meal) {
            $data[] = array_merge($meal->toArray(), [
                'comments' => $meal->comments()->count(),
                'price' => number_format($meal->price, 2),
            ]);
        }

        $mostLiked = [];
        $sort = [];
        foreach ($restaurant->meals as $meal) {
            $sort[$meal->id] = $meal->mark;
        }
        arsort($sort);
        $keys = array_keys($sort);
        $filteredKeys = [];
        for ($i = 0; $i < 5; $i++) {
            if (array_key_exists($i, $keys)) $filteredKeys[] = $keys[$i];
        }
        foreach ($filteredKeys as $id) {
            $meal = $restaurant->meals()->find($id);
            $mostLiked[] = array_merge($meal->toArray(), [
                'comments' => $meal->comments()->count(),
                'price' => number_format($meal->price, 2),
            ]);
        }

        return [
            'meals' => $data,
            'mostLiked' => $mostLiked,
            'countedMeals' => $countedMeals,
            'total' => $total,
        ];
    }

    private function information($restaurantId)
    {
        $restaurant = Restaurant::find($restaurantId);

        $categories = [];
        foreach ($restaurant->categories as $category) {
            $categories[] = $category->toArray() + [];
        }

        $addons = [];
        foreach ($restaurant->addons as $addon) {
            $addons[] = $addon->toArray() + [];
        }

        return [
            'categories' => $categories,
            'allAddons' => $addons,
        ];
    }

    private function validation($restaurantId, $request, $id = null)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $category = null;
        if ($id) {
            $meal = Meal::find($id);
            $rules = UtilController::rules($this->rules, $meal);
            $request->validate($rules);
            $category = Category::find($meal->category_id);

            if (!$category) return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['categories']['not_found'], 'danger'),
            ]);
        } else $request->validate($this->rules);

        return $category;
    }



    public function  index($restaurantId)
    {
        $data = $this->data($restaurantId);

        $meals = $data['meals'];
        $mostLiked = $data['mostLiked'];
        $countedMeals = $data['countedMeals'];
        $total = $data['total'];

        $information = $this->information($restaurantId);

        return response()->json([
            'meals' => $meals,
            'mostLiked' => $mostLiked,
            'countedMeals' => $countedMeals,
            'total' => $total,
        ] + $information);
    }

    public function info($restaurantId)
    {
        $information = $this->information($restaurantId);

        return response()->json($information);
    }

    public function show($restaurantId, $id)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['not_found'], 'danger'),
        ]);

        $meal_addons = [];
        $addons = $meal->addons;
        foreach ($addons as $addon) {
            $meal_addons[] = [
                'id' => $addon->id,
                'name' => $addon->name,
            ];
        }
        $meal = $meal->toArray() + [
            'addons' => $meal_addons,
        ];

        $information = $this->information($restaurantId);

        return response()->json([
            'meal' => $meal,
        ] + $information);
    }

    public function store(Request $request, $restaurantId)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $category = $this->validation($restaurantId, $request);
        if ($category instanceof JsonResponse) return $category;

        if ($restaurant->plan && ($restaurant->plan->meals === 0 || $restaurant->meals()->count() < $restaurant->plan->meals)) {
            $input = $request->except(['photo', 'name', 'description']);

            $mealWithReference = $restaurant->meals()->find($request->reference);
            if ($mealWithReference) return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['reference'], 'danger'),
            ]);

            if ($file = $request->file('photo')) {
                $fileName = UtilController::resize($file, 'meals');
                $input['photo'] = htmlspecialchars($fileName);
            }

            $category = $restaurant->categories()->find($input['category_id']);
            $meal = $category->meals()->create($input + [
                'name' => json_encode($request->name),
                'description' => json_encode($request->description),
            ]);

            $meal->addons()->sync($request->addons);

            return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['created'], 'success'),
            ]);
        }

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['reached'], 'danger'),
        ]);
    }

    public function update(Request $request, $restaurantId, $id)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $category = $this->validation($restaurantId, $request, $id);
        if ($category instanceof JsonResponse) return $category;

        $meal = $category->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['not_found'], 'danger'),
        ]);

        $input = $request->except(['photo', 'name', 'description']);

        $mealWithReference = $restaurant->meals()->find($request->reference);
        if ($mealWithReference && $mealWithReference->id !== +$id) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['reference'], 'danger'),
        ]);

        if ($file = $request->file('photo')) {
            if ($meal->photo && is_file(public_path($meal->photo))) unlink(public_path($meal->photo));
            $fileName = UtilController::resize($file, 'meals');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $meal->update($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
        ]);

        $meal->addons()->sync($request->addons);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$restaurant->language->abbr]['messages']['meals']['updated']
            ],
        ]);
    }

    public function destroy($restaurantId, $id)
    {
        $cms = UtilController::cms();
        $restaurant = Restaurant::find($restaurantId);

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['not_found'], 'danger'),
        ]);

        if ($meal->photo && is_file(public_path($meal->photo))) unlink(public_path($meal->photo));
        $meal->delete();

        $data = $this->data($restaurantId);

        $meals = $data['meals'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['deleted'], 'success'),
            'meals' => $meals,
            'total' => $total,
        ]);
    }
}
