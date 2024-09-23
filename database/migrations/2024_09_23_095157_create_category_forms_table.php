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
        Schema::create('category_forms', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id')->unsigned()->nullable();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete("cascade");
            $table->string('name')->nullable();
            $table->string('label')->nullable();
            $table->string('placeholder')->nullable();
            $table->json('values')->nullable();
            $table->enum('type', array("text", "number", "email", "textarea", "radio", "checkbox"))->default('text');
            $table->enum('required', array("0", "1"))->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_forms');
    }
};
