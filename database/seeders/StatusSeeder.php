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
                "status_name" => "Solicitada",
                "color" => "#FFEB3BFF",
                "created_at" => now(),
            ],
            [
                "id" => 2,
                "status_name" => "Observada",
                "color" => "#F3A723FF",
                "created_at" => now(),
            ],
            [
                "id" => 3,
                "status_name" => "Rechazada",
                "color" => "#B71C1CFF",
                "created_at" => now(),
            ],
            [
                "id" => 4,
                "status_name" => "Aprobada",
                "color" => "#2D52A8FF",
                "created_at" => now(),
            ],
            [
                "id" => 5,
                "status_name" => "Procesada",
                "color" => "#1B5E20FF",
                "created_at" => now(),
            ],
        ]);
    }
}
