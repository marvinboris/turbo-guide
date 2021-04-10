<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plans = [
            [
                'name' => 'Basic',
                'price' => 4500,
                'meals' => 3,
                'actions' => 1,
                'months' => 1,
                'banners' => 1,
            ],
            [
                'name' => 'Standard',
                'price' => 8500,
                'meals' => 10,
                'actions' => 2,
                'months' => 1,
                'banners' => 2,
            ],
            [
                'name' => 'Premium',
                'price' => 15000,
                'meals' => 0,
                'actions' => 3,
                'months' => 1,
                'banners' => 3,
            ],
            [
                'name' => 'Basic',
                'price' => 45000,
                'meals' => 3,
                'actions' => 1,
                'months' => 12,
                'banners' => 1,
            ],
            [
                'name' => 'Standard',
                'price' => 85000,
                'meals' => 10,
                'actions' => 2,
                'months' => 12,
                'banners' => 2,
            ],
            [
                'name' => 'Premium',
                'price' => 150000,
                'meals' => 0,
                'actions' => 3,
                'months' => 12,
                'banners' => 3,
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
