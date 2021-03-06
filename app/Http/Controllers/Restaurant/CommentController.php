<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    private function data()
    {
        $restaurant = UtilController::get(request());

        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        // $data = [];
        // $filteredData = $restaurant->meals()->latest();
        $meals = $restaurant->meals;
        $comments = [];
        foreach ($meals as $meal) {
            $meal_comments = [];
            foreach ($meal->comments as $comment) {
                $meal_comments[] = $comment->toArray() + [
                    'meal' => $comment->meal->name,
                ];
            }
            $comments = array_merge($comments, $meal_comments);
            $total += $meal->comments()->count();
        }

        // $filteredData = $filteredData
        //     ->join('meals', 'meals.id', '=', 'comments.meal_id')
        //     ->select('comments.*')
        //     ->when($search, function ($query, $search) {
        //         if ($search !== "")
        //             $query
        //                 ->where('name', 'LIKE', "%$search%")
        //                 ->orWhere('meals.name', 'LIKE', "%$search%")
        //                 ->orWhere('body', 'LIKE', "%$search%");
        //     });

        // $total = $filteredData->count();

        // $filteredData = $filteredData->get();

        // foreach ($filteredData as $comment) {
        //     $data[] = array_merge($comment->toArray(), [
        //         'meal' => $comment->meal->name,
        //     ]);
        // }

        return [
            'comments' => $comments,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $comments = $data['comments'];
        $total = $data['total'];

        return response()->json([
            'comments' => $comments,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $comment = $restaurant->comments()->find($id);
        if (!$comment) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['comments']['not_found'], 'danger'),
        ]);

        $comment = $comment->toArray();

        return response()->json([
            'comment' => $comment,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $comment = $restaurant->comments()->find($id);
        if (!$comment) return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['comments']['not_found'], 'danger'),
        ]);

        $comment->delete();

        $data = $this->data();

        $comments = $data['comments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['comments']['deleted'], 'success'),
            'comments' => $comments,
            'total' => $total,
        ]);
    }
}
