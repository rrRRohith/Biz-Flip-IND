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
        Schema::create('seller_availabilities', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete("cascade");
            $table->boolean('mon')->default(0)->nullable();
            $table->boolean('tue')->default(0)->nullable();
            $table->boolean('wed')->default(0)->nullable();
            $table->boolean('thu')->default(0)->nullable();
            $table->boolean('fri')->default(0)->nullable();
            $table->boolean('sat')->default(0)->nullable();
            $table->boolean('sun')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seller_availabilities');
    }
};
