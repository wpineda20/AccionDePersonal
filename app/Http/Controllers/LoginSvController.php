<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Socialite;
use Str;
use App\Models\User;
use Spatie\Permission\Models\Role;

class LoginSvController extends Controller
{
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

        // dd($user);
        // check if the user exists
        $existingUser = User::where('email', $user->email)->first();

        if (!$existingUser) {
            try {
                $newUser = new User();
                $newUser->name =  $user["name"];
                $newUser->email =  $user["email"];
                $newUser->position_signature =  $user["position_signature"];
                $newUser->dependency_id =  $user["dependency_id"];
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
            auth()->login($existingUser, true);
        }

        return redirect()->to('/home');
    }
}
