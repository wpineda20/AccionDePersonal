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
            $table->dateTime('date_request_created');
            $table->foreignId('user_id')->constrained('users')->comment('Empleado');
            $table->foreignId('justification_type_id')->constrained('justification_type');
            $table->string('from_hour')->nullable();
            $table->string('to_hour')->nullable();
            $table->integer('total_hours')->nullable();
            $table->date('effective_date')->nullable();
            $table->date('from_date')->nullable();
            $table->date('to_date')->nullable();
            $table->integer('total_days')->nullable();
            $table->text('justification');
            $table->integer('current_year');
            $table->foreignId('status_id')->constrained('status')->comment('Estado');
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
