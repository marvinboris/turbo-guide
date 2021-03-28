<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class AddonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $addons = [
            [
                'name' => 'VG Fried Rice',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/Vegetable-Fried-Rice_sqltiv.jpg',
            ],
            [
                'name' => 'Crepes',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/i113699-photo-de-crepe-facile.jpeg',
            ],
            [
                'name' => 'Noodles',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/76094d-splendid-table-noodlewok.jpg',
            ],
            [
                'name' => 'Water Fufu',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/fufu-featured.jpg',
            ],
            [
                'name' => 'Garlic Naan',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/Homemade-Naan-Bread-1.jpg',
            ],
            [
                'name' => 'Fries',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/10350997.jpg',
            ],
            [
                'name' => 'Yams',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/yam.png',
            ],
            [
                'name' => 'Miondo',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/0.jpg',
            ],
            [
                'name' => 'Plantains',
                'reference' => 'D867',
                'description' => 'Spicy french fries made with delicious content. Note that the below price is for a portion.',
                'price' => 1000,
                'photo' => 'examples/c8c31f_e480e31c80b34ad9a0e47c301cda1e09_mv2.jpg',
            ],
        ];

        foreach ($addons as $addon) {
            Restaurant::first()->addons()->create($addon);
        }
    }
}
