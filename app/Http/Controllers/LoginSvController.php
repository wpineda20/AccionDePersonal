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

        dd($user);
        return $user;
    }
}
