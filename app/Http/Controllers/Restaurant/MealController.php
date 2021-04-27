<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Category;
use App\Models\Meal;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MealController extends Controller
{
    private $rules = [
        'category_id' => 'required|exists:categories,id',
        'name' => 'required|string',
        'reference' => 'required|string',
        'description' => 'required|string',
        'price' => 'required|numeric',
        'time' => 'required|numeric',
        'photo' => 'required|file|image',
        'is_active' => 'required|integer',
        'addons' => 'array|exists:addons,id',
    ];

    private function data()
    {
        $restaurant = UtilController::get(request());

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

    private function information()
    {
        $restaurant = UtilController::get(request());

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

    private function validation($request, $id = null)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

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



    public function  index()
    {
        $data = $this->data();

        $meals = $data['meals'];
        $mostLiked = $data['mostLiked'];
        $countedMeals = $data['countedMeals'];
        $total = $data['total'];

        $information = $this->information();

        return response()->json([
            'meals' => $meals,
            'mostLiked' => $mostLiked,
            'countedMeals' => $countedMeals,
            'total' => $total,
        ] + $information);
    }

    public function info()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

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

        $information = $this->information();

        return response()->json([
            'meal' => $meal,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $category = $this->validation($request);
        if ($category instanceof JsonResponse) return $category;

        if ($restaurant->plan && ($restaurant->plan->meals === 0 || $restaurant->meals()->count() < $restaurant->plan->meals)) {
            $input = $request->except('photo');

            $mealWithReference = $restaurant->meals()->find($request->reference);
            if ($mealWithReference) return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['reference'], 'danger'),
            ]);

            if ($file = $request->file('photo')) {
                $fileName = time() . $file->getClientOriginalName();
                $file->move('images/meals', $fileName);
                $input['photo'] = htmlspecialchars($fileName);
            }

            $category = $restaurant->categories()->find($input['category_id']);
            $meal = $category->meals()->create($input);

            $meal->addons()->sync($request->addons);

            return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['created'], 'success'),
            ]);
        }

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['reached'], 'danger'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $category = $this->validation($request, $id);
        if ($category instanceof JsonResponse) return $category;

        $meal = $category->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['not_found'], 'danger'),
        ]);

        $input = $request->except('photo');

        $mealWithReference = $restaurant->meals()->find($request->reference);
        if ($mealWithReference && $mealWithReference->id !== +$id) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['reference'], 'danger'),
        ]);

        if ($file = $request->file('photo')) {
            if ($meal->photo && is_file(public_path($meal->photo))) unlink(public_path($meal->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/meals', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $meal->update($input);

        $meal->addons()->sync($request->addons);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$restaurant->language->abbr]['messages']['meals']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $meal = $restaurant->meals()->find($id);
        if (!$meal) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['not_found'], 'danger'),
        ]);

        if ($meal->photo && is_file(public_path($meal->photo))) unlink(public_path($meal->photo));
        $meal->delete();

        $data = $this->data();

        $meals = $data['meals'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['meals']['deleted'], 'success'),
            'meals' => $meals,
            'total' => $total,
        ]);
    }
}
