<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    private $rules = [
        'name' => 'array|required',
        'description' => 'array|nullable',
        'photo' => 'nullable|file|image',
        'is_active' => 'required|integer',
    ];

    private function data()
    {
        $restaurant = UtilController::get(request());

        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = $restaurant->categories()->latest();

        $filteredData = $filteredData
            ->select('categories.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        $filteredData = $filteredData->get();

        foreach ($filteredData as $category) {
            $data[] = array_merge($category->toArray(), []);
        }

        return [
            'categories' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $categories = $data['categories'];
        $total = $data['total'];

        return response()->json([
            'categories' => $categories,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $category = $restaurant->categories()->find($id);
        if (!$category) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['categories']['not_found'], 'danger'),
        ]);

        $category = $category->toArray();

        return response()->json([
            'category' => $category,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['photo', 'name', 'description']);

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $fileName = UtilController::resize($file, 'categories');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $restaurant->categories()->create($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['categories']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $category = $restaurant->categories()->find($id);
        if (!$category) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['categories']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $category);
        $request->validate($rules);

        $input = $request->except(['photo', 'name', 'description']);

        if ($file = $request->file('photo')) {
            if ($category->photo && is_file(public_path($category->photo))) unlink(public_path($category->photo));
            $fileName = UtilController::resize($file, 'categories');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $category->update($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
        ]);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$restaurant->language->abbr]['messages']['categories']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $category = $restaurant->categories()->find($id);
        if (!$category) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['categories']['not_found'], 'danger'),
        ]);

        if ($category->photo && is_file(public_path($category->photo))) unlink(public_path($category->photo));
        $category->delete();

        $data = $this->data();

        $categories = $data['categories'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['categories']['deleted'], 'success'),
            'categories' => $categories,
            'total' => $total,
        ]);
    }
}
