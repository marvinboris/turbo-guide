<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $meals = [
            [
                'name' => 'Honig Spicy Chicken wings',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 15000,
                'photo' => 'examples/BFV8354_Honey_BBQ_Chicken_Wings-FB1080.jpg',
            ],
            [
                'name' => 'Water Fufu& Eru',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 7500,
                'photo' => 'examples/discover-eru.jpg',
            ],
            [
                'name' => 'Mbongo Tchobi Noir',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 9000,
                'photo' => 'examples/Nguwa+Mbongo+Tchobi+.jpg',
            ],
            [
                'name' => 'Spicy Chicken Burger',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 6500,
                'photo' => 'examples/csm_kfc_crosslinker_burger_zinger_f8ddc29470.jpg',
            ],
            [
                'name' => 'Mbongo Tchobi Epicé',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 18500,
                'photo' => 'examples/InShot_20210126_151203462.jpg',
            ],
            [
                'name' => 'Fried Chicken Bucket',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 13500,
                'photo' => 'examples/Chicken-on-the-KFC-menu-in-India.jpg',
            ],
            [
                'name' => 'KFC Meal Combo',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 7000,
                'photo' => 'examples/Double_tendercbo_web_thumb.jpg',
            ],
            [
                'name' => 'Chinese Mixed Veg Soup',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 16500,
                'photo' => 'examples/0f791f70d675c3fdf46ca08b11d17334.jpg',
            ],
            [
                'name' => 'Mushrooms with veg',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 8800,
                'photo' => 'examples/20165645_web1_ChineseFood.jpg',
            ],
            [
                'name' => 'Chicken Kabab with nan',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 11500,
                'photo' => 'examples/ti8wzfbbvdspxo8dg1ci.jpeg',
            ],
        ];

        foreach ($meals as $meal) {
            Category::first()->meals()->create($meal);
        }
    }
}
