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
        Schema::create('content_pages', function (Blueprint $table) {
            $table->id();
            $table->mediumText('title')->nullable();
            $table->mediumText('slug')->nullable();
            $table->string('breadcumb_image')->nullable();
            $table->longText('content')->nullable();
            $table->mediumText('seo_title')->nullable();
            $table->mediumText('seo_keywords')->nullable();
            $table->mediumText('seo_desscription')->nullable();
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
        Schema::dropIfExists('content_pages');
    }
};
