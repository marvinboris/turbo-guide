<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->integer('language_id')->unsigned()->index();
            $table->integer('plan_id')->unsigned()->index()->nullable();
            $table->string('name')->nullable();
            $table->string('owner');
            $table->string('token', 64)->unique();
            $table->string('md5', 64)->unique();
            $table->string('email', 50)->unique();
            $table->string('phone');
            $table->string('country');
            $table->string('whatsapp')->nullable();
            $table->string('address')->nullable();
            $table->string('days')->nullable();
            $table->string('hours')->nullable();
            $table->string('location')->nullable();
            $table->string('photo')->nullable();
            $table->float('balance')->default(0);
            $table->string('password');
            $table->tinyInteger('is_active')->default(1);
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
        Schema::dropIfExists('restaurants');
    }
}
