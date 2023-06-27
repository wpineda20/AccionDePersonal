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
                "order_id" => 1,
                "created_at" => now(),
            ],
            [
                "id" => 2,
                "status_name" => "Pediente autorización",
                "order_id" => 2,
                "created_at" => now(),
            ],
            [
                "id" => 3,
                "status_name" => "Observada",
                "order_id" => 3,
                "created_at" => now(),
            ],
            [
                "id" => 4,
                "status_name" => "Autorizada",
                "order_id" => 4,
                "created_at" => now(),
            ],
            [
                "id" => 5,
                "status_name" => "Procesada",
                "order_id" => 5,
                "created_at" => now(),
            ],
            [
                "id" => 6,
                "status_name" => "Rechazada",
                "order_id" => 6,
                "created_at" => now(),
            ],
            [
                "id" => 7,
                "status_name" => "Finalizada",
                "order_id" => 7,
                "created_at" => now(),
            ],
        ]);
    }
}
