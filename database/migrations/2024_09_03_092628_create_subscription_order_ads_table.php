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
        Schema::create('subscription_order_ads', function (Blueprint $table) {
            $table->bigInteger('ad_id')->unsigned()->nullable();
            $table->foreign('ad_id')->references('id')->on('ads')->onDelete("cascade");
            $table->bigInteger('subscription_order_id')->unsigned()->nullable();
            $table->foreign('subscription_order_id')->references('id')->on('subscription_orders')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_order_ads');
    }
};
