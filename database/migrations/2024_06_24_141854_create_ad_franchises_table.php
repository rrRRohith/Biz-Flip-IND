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
        Schema::create('ad_franchises', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('ad_id')->unsigned()->nullable();
            $table->foreign('ad_id')->references('id')->on('ads')->onDelete("cascade");
            $table->string('canadian_units')->nullable();
            $table->string('us_units')->nullable();
            $table->string('international_units')->nullable();
            $table->string('corporate_units')->nullable();
            $table->string('franchise_fee')->nullable();
            $table->string('liquid_capital')->nullable();
            $table->string('total_investment')->nullable();
            $table->string('in_business_since')->nullable();
            $table->string('franchising_since')->nullable();
            $table->string('territories')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ad_franchises');
    }
};
