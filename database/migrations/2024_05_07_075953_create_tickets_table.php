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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('ticket_no')->nullable();
            $table->string('subject')->nullable();
            $table->string('body')->nullable();
            $table->string('recepecient_id')->nullable();
            $table->string('vendor_id')->nullable();
            $table->string('user_id')->nullable();
            $table->string('to')->nullable();
            $table->string('read_at')->nullable();
            $table->string('priority')->nullable();
            $table->string('category')->nullable();
            $table->string('ipaddess')->nullable();
            $table->integer('status')->comment('0=pending,1=replywaiting,2=closed'); 
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
