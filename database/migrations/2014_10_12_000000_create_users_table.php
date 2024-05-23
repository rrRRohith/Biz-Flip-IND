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
            $table->text('slug')->nullable();
            $table->string('email')->unique();
            $table->text('alt_emails')->nullable()->comment('use comma for multiple allowed');
            $table->string('phone')->unique()->nullable();
            $table->text('alt_phone')->nullable()->comment('use comma for multiple allowed');
            $table->mediumText('address')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->string('acc_type')->nullable();
            $table->string('dob')->nullable();
            $table->string('login_at')->nullable();
            $table->string('last_login')->nullable();
            $table->string('last_logout_ip')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->bigInteger('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')->references('id')->on('users')->onDelete("cascade");
            $table->string('avatar')->nullable();
            $table->integer('approved_by')->nullable();
            $table->string('unique_code')->unique();
            $table->timestamp('approved_at')->nullable();
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
