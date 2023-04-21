<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::insert([
            [
                "id" => 1,
                "status_name" => "Digitada",
                "created_at" => now(),
            ],
            [
                "id" => 2,
                "status_name" => "Observada",
                "created_at" => now(),
            ],
            [
                "id" => 3,
                "status_name" => "Rechazada",
                "created_at" => now(),
            ],
            [
                "id" => 4,
                "status_name" => "Aprobada",
                "created_at" => now(),
            ],
            [
                "id" => 5,
                "status_name" => "Procesada",
                "created_at" => now(),
            ],
        ]);
    }
}
