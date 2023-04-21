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
        Schema::create('personnel_action', function (Blueprint $table) {
            $table->id();
            $table->date('date_request_created');
            $table->foreignId('user_id')->constrained('users')->comment('Empleado');
            $table->foreignId('justification_type_id')->constrained('justification_type');
            $table->string('from_hour');
            $table->string('to_hour');
            $table->integer('total_hours');
            $table->date('effective_date');
            $table->date('from_date');
            $table->date('to_date');
            $table->integer('total_days');
            $table->text('justification');
            $table->integer('current_year');
            $table->softDeletes();
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
        Schema::dropIfExists('request');
    }
};
