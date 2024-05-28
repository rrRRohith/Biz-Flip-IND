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
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('seller_id')->unsigned()->nullable();
            $table->foreign('seller_id')->references('id')->on('users')->onDelete("cascade");
            $table->mediumText('title')->nullable();
            $table->mediumText('slug')->nullable();
            $table->longText('description')->nullable();
            $table->mediumText('address')->nullable();
            $table->string('city')->nullable();
            $table->string('postalcode')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->mediumText('map_code')->nullable();
            $table->string('lan')->nullable();
            $table->string('long')->nullable();
            $table->string('ad_purpose')->nullable();
            $table->string('price')->nullable();
            $table->boolean('has_negotiable')->default(0)->nullable();
            $table->boolean('has_commision')->default(0)->nullable();
            $table->string('commision')->comment('commosion in percentage')->nullable();
            $table->mediumText('seo_tile')->nullable();
            $table->mediumText('seo_description')->nullable();
            $table->mediumText('seo_keywords')->nullable();
            $table->string('property_type')->nullable();
            $table->string('space')->comment('property length')->nullable();
            $table->mediumText('unique_code')->unique();
            $table->mediumText('tags')->comment('use comma multiple allowed')->nullable();
            $table->timestamp('publish_at')->nullable();
            $table->integer('position')->nullable();
            $table->integer('status')->comment('0=pending,1=approved,-1=suspended')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
