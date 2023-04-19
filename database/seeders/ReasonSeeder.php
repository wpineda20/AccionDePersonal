<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reason;

class ReasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Reason::insert([
            [
                "id" => 1,
                "reason_name" => "Enfermedad (15 días): Art. 6 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 2,
                "reason_name" => "Enfermedad con incapacidad médica (90 días): Art. 6 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos (15 días por año de servicio)",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 3,
                "reason_name" => "Maternidad: Art. 9 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 4,
                "reason_name" => "Enfermedad grave de parientes/Duelo (20 días): Art. 10 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 5,
                "reason_name" => "Carácter personal (5 días): Art. 11 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 6,
                "reason_name" => "Licencia sin goce de sueldo: Art. 92, Disposiciones Generales de Presupuesto",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 7,
                "reason_name" => "Estudios: Art. 85 Numeral 2, Disposiciones Generales de Presupuesto",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 8,
                "reason_name" => "Misión Oficial: Art. 19 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos, Reglamento de viaticos art. 4",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 9,
                "reason_name" => "Tiempo compensatorio: Art. 113, Numeral 6, Disposiciones Generales de Presupuesto",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 10,
                "reason_name" => "Dificultad de Marcación (Detallar en la justificación el motivo que lo generó)",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 11,
                "reason_name" => "Actividades Sindicales",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 12,
                "reason_name" => "Decreto No. 335 Paternidad",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 13,
                "reason_name" => "Otras licencias reguladas en el Contrato Colectivo de Trabajo (Justificar licencia que corresponda)",
                "created_at" => now(),
                "updated_at" => now(),
            ],
        ]);
    }
}
