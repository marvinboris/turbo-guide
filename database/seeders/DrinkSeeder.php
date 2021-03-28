<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class DrinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $drinks = [
            [
                'name' => 'Heineken 23 mL',
                'reference' => 'D867',
                'description' => 'Heineken 23 mL',
                'price' => 1000,
                'photo' => 'examples/heineken-435820.jpg',
            ],
        ];

        foreach ($drinks as $drink) {
            Restaurant::first()->drinks()->create($drink);
        }
    }
}
