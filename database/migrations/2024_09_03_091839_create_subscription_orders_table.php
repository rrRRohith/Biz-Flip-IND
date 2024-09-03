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
        Schema::create('subscription_orders', function (Blueprint $table) {
            $table->id();
            $table->mediumText('invoice_no')->nullable();
            $table->bigInteger('seller_id')->unsigned()->nullable();
            $table->foreign('seller_id')->references('id')->on('users')->onDelete("set null");
            $table->bigInteger('subscription_plan_id')->unsigned()->nullable();
            $table->foreign('subscription_plan_id')->references('id')->on('subscription_plans')->onDelete("set null");
            $table->mediumText('name')->nullable();
            $table->longText('description')->nullable();
            $table->longText('features')->nullable();
            $table->float('price')->nullable();
            $table->bigInteger('ads')->nullable();
            $table->bigInteger('duration')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->mediumText('payment_ref')->nullable();
            $table->mediumText('payment_id')->nullable();
            $table->mediumText('payment_method')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_orders');
    }
};
