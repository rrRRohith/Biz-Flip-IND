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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->mediumText('title')->nullable();
            $table->mediumText('slug')->nullable();
            $table->longText('description')->nullable();
            $table->mediumText('address')->nullable();
            $table->string('city')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->mediumText('map_code')->nullable();
            $table->string('lan')->nullable();
            $table->string('long')->nullable();
            $table->string('property_purpose')->nullable();
            $table->string('price')->nullable();
            $table->boolean('negotiation')->default(0)->nullable();
            $table->boolean('broker_commision')->default(0)->nullable();
            $table->string('broker_commision_perc')->comment('commosion in percentage')->nullable();
            $table->mediumText('seo_tile')->nullable();
            $table->mediumText('seo_description')->nullable();
            $table->mediumText('seo_keywords')->nullable();
            $table->bigInteger('vendor_id')->unsigned()->nullable();
            $table->foreign('vendor_id')->references('id')->on('users')->onDelete("cascade");
            $table->string('type_property')->nullable();
            $table->string('space')->comment('property length')->nullable();
            $table->mediumText('unique_code')->unique();
            $table->mediumText('tags')->comment('use comma multiple allowed')->nullable();
            $table->timestamp('post_date')->nullable();
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
