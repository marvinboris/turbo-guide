<?php

use App\Models\Restaurant;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('test', function () {
    Restaurant::first()->plan->pivot->update([
        'expiry_date' => now()->addMinutes(2),
    ]);

    return true;
});

Route::view('{any}', 'app')->where('any', '^(?!api).*$');
