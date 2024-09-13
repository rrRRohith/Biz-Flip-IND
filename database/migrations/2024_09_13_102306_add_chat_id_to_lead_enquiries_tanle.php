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
            $table->bigInteger('chat_id')->unsigned()->nullable();
            $table->foreign('chat_id')->references('id')->on('chats')->onUpdate("SET NULL");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lead_enquiries', function (Blueprint $table) {
            // Drop foreign key constraint
            $table->dropForeign(['chat_id']);

            // Drop the column
            $table->dropColumn('chat_id');
        });
    }
};
