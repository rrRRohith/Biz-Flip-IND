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
        Schema::create('company_settings', function (Blueprint $table) {
            $table->id();
            $table->mediumText('facebook_link')->nullable();
            $table->mediumText('instagram_link')->nullable();
            $table->mediumText('linkedin_link')->nullable();
            $table->mediumText('youtube_link')->nullable();
            $table->mediumText('twitter_link')->nullable();
            $table->mediumText('seo_title')->nullable();
            $table->mediumText('seo_description')->nullable();
            $table->mediumText('seo_keywords')->nullable();
            $table->mediumText('email_config_api_url')->nullable();
            $table->mediumText('email_config_api_key')->nullable();
            $table->mediumText('email_config_api_method')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_settings');
    }
};
