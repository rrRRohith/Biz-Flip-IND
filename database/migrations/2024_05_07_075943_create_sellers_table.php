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
        Schema::create('sellers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete("cascade");
            $table->mediumText('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->string('logo')->nullable();
            $table->string('company_name')->nullable();
            $table->text('address')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('alt_email')->nullable()->comment('use comma for multiple allowed');
            $table->string('alt_phone')->nullable()->comment('use comma for multiple allowed');
            $table->string('map_code')->nullable();
            $table->string('lat')->nullable();
            $table->string('long')->nullable();
            $table->string('employee')->nullable();
            $table->string('locations')->nullable();
            $table->string('website')->nullable();
            $table->bigInteger('feature_label_id')->unsigned()->nullable();
            $table->foreign('feature_label_id')->references('id')->on('feature_labels')->onUpdate("SET NULL");
            $table->string('business_type')->nullable();
            $table->boolean('has_public_view')->default(0)->nullable();
            $table->integer('position')->default(0)->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendors');
    }
};