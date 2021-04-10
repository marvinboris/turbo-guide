<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->string('name');
            $table->string('slug');
            $table->float('price');
            $table->integer('meals');
            $table->integer('actions');
            $table->tinyInteger('support')->default(0);
            $table->integer('banners');
            $table->tinyInteger('reviews')->default(0);
            $table->integer('months')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('slug');
            $table->dropColumn('price');
            $table->dropColumn('meals');
            $table->dropColumn('actions');
            $table->dropColumn('support');
            $table->dropColumn('banners');
            $table->dropColumn('reviews');
            $table->dropColumn('months');
        });
    }
}
