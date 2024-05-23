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
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete("cascade");
            $table->mediumText('short_bio')->nullable();
            $table->longText('description')->nullable();
            $table->string('logo')->nullable();
            $table->string('company_name')->nullable();
            $table->text('address')->nullable();
            $table->string('map_code')->nullable();
            $table->string('lat')->nullable();
            $table->string('long')->nullable();
            $table->string('no_employee')->nullable();
            $table->string('no_locations')->nullable();
            $table->string('website')->nullable();
            $table->string('type_person')->nullable();
            $table->bigInteger('feature_label')->unsigned()->nullable();
            $table->foreign('feature_label')->references('id')->on('feature_labels')->onUpdate("SET NULL");
            $table->string('business_type')->nullable();
            $table->boolean('public_profile_on')->default(0)->nullable();
            $table->text('facebook_link')->nullable();
            $table->text('instagram_link')->nullable();
            $table->text('linkedin_link')->nullable();
            $table->text('youtube_link')->nullable();
            $table->text('twitter_link')->nullable();
            $table->string('company_email')->unique()->nullable();
            $table->string('company_phone')->unique()->nullable();
            $table->string('alt_email')->nullable()->comment('use comma for multiple allowed');
            $table->string('alt_phone')->nullable()->comment('use comma for multiple allowed');
            $table->string('mon')->nullable();
            $table->string('tue')->nullable();
            $table->string('wed')->nullable();
            $table->string('thu')->nullable();
            $table->string('fri')->nullable();
            $table->string('sat')->nullable();
            $table->string('sun')->nullable();
            $table->string('status')->nullable();
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
