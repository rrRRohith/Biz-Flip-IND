<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->mediumText('name')->nullable();
            $table->longText('description')->nullable();
            $table->longText('features')->nullable();
            $table->float('price')->nullable();
            $table->bigInteger('ads')->nullable();
            $table->bigInteger('duration')->nullable();
            $table->integer('default')->default('0')->nullable();
            $table->integer('visibility')->default('1')->nullable();
            $table->integer('status')->default('0')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_plans');
    }
};
