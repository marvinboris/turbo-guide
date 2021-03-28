<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Fried Chicken',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/Chicken-on-the-KFC-menu-in-India.jpg',
            ],
            [
                'name' => 'Salads',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/tomato-avacdo-salad.jpg',
            ],
            [
                'name' => 'Burgers',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/Zinger_Stacker_Burger_web_thumb.jpg',
            ],
            [
                'name' => 'Chinese',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/image.png',
            ],
            [
                'name' => 'African',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/discover-eru.jpg',
            ],
            [
                'name' => 'Pizza',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/pizza-recipe-1-500x500.jpg',
            ],
            [
                'name' => 'Vegetables',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/Vietnamese-Noodle-Salad-foodiecrush.com-011.jpg',
            ],
            [
                'name' => 'Indian',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/ti8wzfbbvdspxo8dg1ci.jpeg',
            ],
            [
                'name' => 'Cakes',
                'description' => 'Chinese Dishes',
                'photo' => 'examples/maxresdefault.jpg',
            ],
        ];

        foreach ($categories as $category) {
            Restaurant::first()->categories()->create($category);
        }
    }
}
