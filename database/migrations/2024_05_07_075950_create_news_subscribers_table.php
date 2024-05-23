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
        Schema::create('news_subscribers', function (Blueprint $table) {
            $table->id();
            $table->string('email_id')->unique();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->mediumText('type_of_needed')->comment('use comma multiple type allowed')->nullable();
            $table->integer('status')->comment('0=inactive,1=active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_subscribers');
    }
};
