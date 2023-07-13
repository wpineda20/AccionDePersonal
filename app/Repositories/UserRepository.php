<?php

namespace App\Repositories;

use Hash;
use Str;
use App\Models\User;
use Illuminate\Support\Facades\Http;

class UserRepository {
    public function getUserLogin(string $email, string $token){
        $response = Http::withHeaders([
            'Authorization' => "Bearer $token",
        ])
        ->get(getenv('URL_LOGIN')."/api/userInfo/$email");

        $response->throw();

        return $response->json()['data'];
    }

    public function createUser($data){
        $user = new User();
        $user->name =  $data["name"];
        $user->email =  $data["email"];
        $user->position_signature =  $data["position_signature"];
        $user->dependency_name =  $data["dependency_name"];
        $user->send_to_rrhh =  $data["send_to_rrhh"];
        $user->send_to_rrhh =  $data["send_to_rrhh"];
        $user->email_verified_at =  now();
        $user->last_name = '';
        $user->password =  Hash::make(Str::random(8));
        $user->save();

    }
}