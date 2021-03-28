<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $restaurants = [
            [
                'name' => 'KFC Restaurant',
                'owner' => 'Boris Marvin NDOUMA',
                'token' => 'BORIS',
                'md5' => md5('BORIS'),
                'email' => 'jaris.ultio.21@gmail.com',
                'phone' => '237671191585',
                'country' => 'CM',
                'whatsapp' => '237671191585',
                'days' => 'Monday - Friday',
                'hours' => 'From 2PM - 9PM',
                'address' => 'Carrefour Akwa, Derrière la station Total',
                'password' => Hash::make('12345'),
                'photo' => 'examples/99ab5f2205ea31485b0126edbc8e1682.jpg',
                'language_id' => 1,
            ],
        ];

        foreach ($restaurants as $restaurant) {
            Restaurant::create($restaurant);
        }
    }
}
