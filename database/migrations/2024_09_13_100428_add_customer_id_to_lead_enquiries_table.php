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
        Schema::table('lead_enquiries', function (Blueprint $table) {
            $table->bigInteger('customer_id')->unsigned()->nullable();
            $table->foreign('customer_id')->references('id')->on('users')->onUpdate("SET NULL");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lead_enquiries', function (Blueprint $table) {
            // Drop foreign key constraint
            $table->dropForeign(['customer_id']);

            // Drop the column
            $table->dropColumn('customer_id');
        });
    }
};
