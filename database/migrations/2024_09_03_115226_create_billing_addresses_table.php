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
        Schema::create('billing_addresses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscription_order_id')->unsigned()->nullable();
            $table->foreign('subscription_order_id')->references('id')->on('subscription_orders')->onDelete("cascade");
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->string('email','191')->nullable();
            $table->string('phone','191')->nullable();
            $table->mediumText('address')->nullable();
            $table->string('postalcode')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->default('Canada')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('billing_addresses');
    }
};
