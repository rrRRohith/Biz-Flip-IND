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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->mediumText('title')->nullable();
            $table->mediumText('slug')->nullable();
            $table->longText('content')->nullable();
            $table->string('image')->nullable();
            $table->string('thumbmail')->nullable();
            $table->mediumText('seo_title')->nullable();
            $table->mediumText('seo_description')->nullable();
            $table->mediumText('keywords')->nullable();
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
        Schema::dropIfExists('blogs');
    }
};
