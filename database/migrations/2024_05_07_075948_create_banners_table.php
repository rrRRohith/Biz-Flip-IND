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
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('redirection')->nullable();
            $table->string('type')->nullable();
            $table->string('file_type')->nullable();
            $table->string('description')->nullable();
            $table->boolean('new_window')->default(0)->nullable();
            $table->string('picture_desktop')->nullable();
            $table->string('picture_mobile')->nullable();
            $table->string('picture_app')->nullable();
            $table->integer('clicks')->default(0)->nullable();
            $table->integer('position')->default(0)->nullable();
            $table->integer('status')->comment('0=hidden,1=active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
