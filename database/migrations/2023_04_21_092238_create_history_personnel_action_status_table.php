<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('history_personnel_action_status', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personnel_action_id')->constrained('personnel_action');
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('status_id')->constrained('status');
            $table->dateTime('update_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('history_ap');
    }
};
