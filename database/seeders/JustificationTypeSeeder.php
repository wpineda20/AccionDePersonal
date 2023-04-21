<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JustificationType;

class JustificationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JustificationType::insert([
            [
                "id" => 1,
                "justification_name" => "Enfermedad (15 días): Art. 6 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "valid_days" => 15,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 2,
                "justification_name" => "Enfermedad con incapacidad médica (90 días): Art. 6 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos (15 días por año de servicio)",
                "valid_days" => 90,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 3,
                "justification_name" => "Maternidad: Art. 9 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 4,
                "justification_name" => "Enfermedad grave de parientes/Duelo (20 días): Art. 10 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "valid_days" => 20,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 5,
                "justification_name" => "Carácter personal (5 días): Art. 11 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos",
                "valid_days" => 5,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 6,
                "justification_name" => "Licencia sin goce de sueldo: Art. 92, Disposiciones Generales de Presupuesto",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 7,
                "justification_name" => "Estudios: Art. 85 Numeral 2, Disposiciones Generales de Presupuesto",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 8,
                "justification_name" => "Misión Oficial: Art. 19 Ley de Asuetos, Vacaciones y Licencias de los Empleados Públicos, Reglamento de viaticos art. 4",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 9,
                "justification_name" => "Tiempo compensatorio: Art. 113, Numeral 6, Disposiciones Generales de Presupuesto",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 10,
                "justification_name" => "Dificultad de Marcación (Detallar en la justificación el motivo que lo generó)",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 11,
                "justification_name" => "Actividades Sindicales",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 12,
                "justification_name" => "Decreto No. 335 Paternidad",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => 13,
                "justification_name" => "Otras licencias reguladas en el Contrato Colectivo de Trabajo (Justificar licencia que corresponda)",
                "valid_days" => null,
                "year" => 2023,
                "created_at" => now(),
                "updated_at" => now(),
            ],
        ]);
    }
}
