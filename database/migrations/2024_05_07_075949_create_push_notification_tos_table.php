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
        Schema::create('push_notification_tos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('notification_id')->unsigned()->nullable();
            $table->foreign('notification_id')->references('id')->on('push_notifications')->onDelete("cascade");
            $table->integer('send_user_id')->nullable();
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
        Schema::dropIfExists('push_notification_tos');
    }
};
