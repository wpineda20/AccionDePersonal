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

        $user = User::create([
            'id' => 1,
            'name' => 'William',
            'last_name' => 'Pineda',
            'position_signature' => 'Técnico Especialista en Medios de Comunicación Web',
            // 'dui' => '02475605-7',
            'dependency_id' => 9,
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345678'),
            'name' => 'William',
            'email_verified_at' => now(),
        ]);
        $user->assignRole($roleAdmin);
    }
}
