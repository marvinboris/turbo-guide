<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanRestaurantTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_restaurant', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('plan_id')->unsigned()->index();
            $table->bigInteger('restaurant_id')->unsigned()->index();
            $table->datetime('expiry_date');
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
        Schema::dropIfExists('plan_restaurant');
    }
}
