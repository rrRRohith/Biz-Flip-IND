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
        Schema::create('lead_enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('message')->nullable();
            $table->string('ipaddess')->nullable();
            $table->bigInteger('ad_id')->unsigned()->nullable();
            $table->bigInteger('seller_id')->unsigned()->nullable();
            $table->bigInteger('attender_id')->unsigned()->nullable();
            $table->foreign('ad_id')->references('id')->on('ads')->onUpdate("SET NULL");
            $table->boolean('available_any_day')->default(0)->nullable();
            $table->date('available_day')->nullable();
            $table->string('available_any_time')->default(0)->nullable();
            $table->string('available_time')->nullable();
            $table->foreign('attender_id')->references('id')->on('users')->onUpdate("SET NULL");
            $table->foreign('seller_id')->references('id')->on('users')->onUpdate("SET NULL");
            $table->integer('status')->default(0)->comment('0=inactive,1=active');    
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lead_enquiries');
    }
};
