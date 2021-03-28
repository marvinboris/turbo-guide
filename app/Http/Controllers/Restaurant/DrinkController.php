<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class DrinkController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'reference' => 'required|string',
        'description' => 'required|string',
        'price' => 'required|numeric',
        'photo' => 'required|file|image',
        'is_active' => 'required|integer',
    ];

    private function data()
    {
        $restaurant = UtilController::get(request());

        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = $restaurant->drinks()->latest();

        $filteredData = $filteredData
            ->select('drinks.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        $filteredData = $filteredData->get();

        foreach ($filteredData as $drink) {
            $data[] = array_merge($drink->toArray(), []);
        }

        return [
            'drinks' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $drinks = $data['drinks'];
        $total = $data['total'];

        return response()->json([
            'drinks' => $drinks,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $drink = $restaurant->drinks()->find($id);
        if (!$drink) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['drinks']['not_found'], 'danger'),
        ]);

        $drink = $drink->toArray();

        return response()->json([
            'drink' => $drink,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/drinks', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $restaurant->drinks()->create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['drinks']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $drink = $restaurant->drinks()->find($id);
        if (!$drink) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['drinks']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $drink);
        $request->validate($rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            if ($drink->photo) unlink(public_path($drink->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/drinks', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $drink->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$restaurant->language->abbr]['messages']['drinks']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $drink = $restaurant->drinks()->find($id);
        if (!$drink) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['drinks']['not_found'], 'danger'),
        ]);

        $drink->delete();

        $data = $this->data();

        $drinks = $data['drinks'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['drinks']['deleted'], 'success'),
            'drinks' => $drinks,
            'total' => $total,
        ]);
    }
}
