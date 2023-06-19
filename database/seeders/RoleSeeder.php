<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => 'Empleado']);
        Role::create(['name' => 'Coordinador']);
        Role::create(['name' => 'Jefe']);
        Role::create(['name' => 'RRHH']);
        Role::create(['name' => 'Administrador']);
    }
}
