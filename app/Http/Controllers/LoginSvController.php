<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Socialite;
use Str;
use App\Models\User;
use Spatie\Permission\Models\Role;

use App\Repositories\UserRepository;

class LoginSvController extends Controller
{
    private $userRepostory;

    public function __construct(){
        $this->userRepository = new UserRepository();
    }

    /**
     * Redirect to ServiceProvider.
     **/
    public function redirectToProvider()
    {
        return Socialite::driver('loginsv')->stateless()->redirect();
    }

    /**
     * Get the user returned by the ServiceProvider and get saved at the DB.
     *
     * @param  \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback(Request $request)
    {
        try {
            $user = Socialite::driver('loginsv')->stateless()->user();
        } catch (\Exception $e) {
            return $e;
        }

        // $user = $data->user();

        // dd($data->user()->token);

        // check if the user exists
        $existingUser = User::where('email', $user->email)->first();

        if (!$existingUser) {
            try {
                $newUser = new User();
                $newUser->name =  $user["name"];
                $newUser->email =  $user["email"];
                $newUser->position_signature =  $user["position_signature"];
                $newUser->dependency_name =  $user["dependency_name"];
                $newUser->email_verified_at =  now();
                $newUser->last_name = '';
                $newUser->password =  Hash::make(Str::random(8));
                $newUser->save();

                // Assign colector role by default
                $roleUser = Role::findOrFail(1);
                $newUser->assignRole($roleUser);

                auth()->login($newUser, true);
            } catch (\Throwable $th) {
                User::where('email', $user['email'])->delete();
                return $th;
            }

            return redirect()->to('/home');
        } else {
            $existingUser->name =  $user["name"];
            $existingUser->email =  $user["email"];
            $existingUser->position_signature =  $user["position_signature"];
            $existingUser->dependency_name =  $user["dependency_name"];
            $existingUser->send_to_rrhh =  $user["send_to_rrhh"];

            $inmediateSuperior = User::where('email', $user["inmediate_superior"])->first();
            $existingUser->inmediate_superior_id = $inmediateSuperior?->id;

            $existingUser->save();

            auth()->login($existingUser, true);
        }

        return redirect()->to('/home');
    }
}
