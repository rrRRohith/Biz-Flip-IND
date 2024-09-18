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
        Schema::create('ad_facilities', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('ad_id')->unsigned()->nullable();
            $table->foreign('ad_id')->references('id')->on('ads')->onDelete("cascade");
            $table->bigInteger('facility_id')->unsigned()->nullable();
            $table->foreign('facility_id')->references('id')->on('facilities')->onDelete("cascade");
            $table->string('distance')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ad_facilities');
    }
};
