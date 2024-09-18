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
        Schema::create('app_settings', function (Blueprint $table) {
            $table->id();
            $table->string('splash_screen')->nullable();
            $table->string('app_background')->nullable();
            $table->string('apiKey')->nullable();
            $table->string('authDomain')->nullable();
            $table->string('databaseURL')->nullable();
            $table->string('projectId')->nullable();
            $table->string('storageBucket')->nullable();
            $table->string('messagingSenderId')->nullable();
            $table->string('appId')->nullable();
            $table->string('measurementId')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('app_settings');
    }
};
