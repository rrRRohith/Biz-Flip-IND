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
        Schema::create('categories_items', function (Blueprint $table) {
            $table->id();
            
            $table->bigInteger('ad_category_id')->unsigned()->nullable();
            $table->foreign('ad_category_id')->references('id')->on('categories')->onDelete("cascade");
            
            $table->bigInteger('business_category_id')->unsigned()->nullable();
            $table->foreign('business_category_id')->references('id')->on('business_categories')->onDelete("cascade");

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories_items');
    }
};



