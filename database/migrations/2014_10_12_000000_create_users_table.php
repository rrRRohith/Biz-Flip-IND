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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->string('email','191')->unique();
            $table->string('phone','191')->unique()->nullable();
            $table->mediumText('address')->nullable();
            $table->string('postalcode')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->string('type')->nullable();
            $table->integer('role_id')->default(0)->nullable();
            $table->bigInteger('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')->references('id')->on('users')->onDelete("cascade");
            $table->string('picture')->nullable();
            $table->string('designation')->nullable();
            $table->string('unique_code','191')->unique();
            $table->mediumText('device_token_mobile')->nullable();
            $table->mediumText('device_token_desktop')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('status')->default(0)->nullable()->comment('null and 0 is pending,1 = approved,-1 = suspended');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
