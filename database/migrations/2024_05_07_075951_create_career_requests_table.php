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
        Schema::create('career_requests', function (Blueprint $table) {
            $table->id();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->string('dob')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('file')->nullable();
            $table->bigInteger('carrer_id')->unsigned()->nullable();
            $table->foreign('carrer_id')->references('id')->on('careers')->onDelete("cascade");
            $table->mediumText('message')->nullable();
            $table->string('ipaddress')->nullable();
            $table->integer('status')->default(0)->comment('0=not view,1=viewed');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('career_requests');
    }
};
