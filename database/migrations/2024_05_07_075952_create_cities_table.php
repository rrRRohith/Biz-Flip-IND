<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Artisan;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('province_id')->unsigned()->nullable();
            $table->foreign('province_id')->references('id')->on('provinces')->onDelete("cascade");
            $table->string('name')->nullable();
            $table->string('code')->nullable();
            $table->mediumText('image')->nullable();
            $table->string('slug')->nullable();
            $table->integer('position')->nullable();
            $table->integer('status')->comment('0=inactive,1=active');    
            $table->softDeletes();
            $table->timestamps();
        });

         // Call the seeder here
         Artisan::call('db:seed', [
            '--class' => 'ProvinceAndCitiesSeeder',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cities');
    }
};
