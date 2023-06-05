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
        Schema::create('dependency', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('dependency_name');
            $table->string('address', 500)->nullable()->default(null);
            // $table->string('superior_dependency')->nullable()->comment('Jefe Superior');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dependency');
    }
};
