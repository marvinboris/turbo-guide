<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguageRestaurantTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('language_restaurant', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('language_id')->unsigned()->index();
            $table->bigInteger('restaurant_id')->unsigned()->index();
            $table->tinyInteger('main')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('language_restaurant');
    }
}
