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
            $table->string('name')->nullable();
            $table->string('owner');
            $table->string('token', 64)->unique();
            $table->string('email', 50)->unique();
            $table->string('password');
            $table->string('phone');
            $table->string('country');
            $table->string('whatsapp')->nullable();
            $table->string('address')->nullable();
            $table->string('days')->nullable();
            $table->string('hours')->nullable();
            $table->string('location')->nullable();
            $table->text('must_read')->nullable();
            $table->text('position')->nullable();
            $table->text('photo')->nullable();
            $table->text('qr')->nullable();
            $table->text('logo')->nullable();
            $table->text('banner1')->nullable();
            $table->text('banner2')->nullable();
            $table->text('banner3')->nullable();
            $table->string('currency')->default('XAF');
            $table->float('balance')->default(0);
            $table->tinyInteger('is_active')->default(1);
            $table->tinyInteger('auto_renew')->default(0);
            $table->string('slug')->nullable();
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
