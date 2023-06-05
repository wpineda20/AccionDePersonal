<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = Role::findOrFail(1);
        $roleUser = Role::findOrFail(2);
        $roleJefe = Role::findOrFail(3);
        $roleRrhh = Role::findOrFail(4);

        $user = User::create([
            'id' => 1,
            'name' => 'William',
            'last_name' => 'Pineda',
            'position_signature' => 'Técnico Especialista en Medios de Comunicación Web',
            'email' => 'admin@gmail.com',
            'dependency_id' => 9,
            'inmediate_superior_id' => null,
            'status' => 1,
            'password' => Hash::make('12345678'),
            'email_verified_at' => now(),
        ]);
        $user->assignRole($roleAdmin);
    }
}
