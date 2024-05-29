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
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('name','191')->unique();
            $table->string('company_name')->nullable();
            $table->string('designation')->nullable();
            $table->string('message')->nullable();
            $table->mediumText('image')->nullable();
            $table->integer('position')->nullable();
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
        Schema::dropIfExists('testimonials');
    }
};
