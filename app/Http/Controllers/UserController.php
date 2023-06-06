<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Hash;
use Spatie\Permission\Models\Role;
use Encrypt;
use App\Models\User;
use App\Models\Dependency;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $itemsPerPage = $request->itemsPerPage;
        $skip = ($request->page - 1) * $request->itemsPerPage;

        if (($request->itemsPerPage == -1)) {
            $itemsPerPage =  User::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $users = User::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);

        $total = User::counterPagination($search);

        return response()->json([
            "success" => true,
            "status" => 200,
            "message" => "Usuarios obtenidos correctamente.",
            "users" => $users,
            "total" => $total,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = count(User::where(["email" => $request->email])->get());

        if ($user > 0) {
            return response()->json([
                "status" => "fail",
                "message" => "Este email ya existe."
            ]);
        }

        $password = Hash::make($request->password);

        $user = new User();
        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->dui = $request->dui;
        $user->email = $request->email;
        $user->email_verified_at = now();
        $user->password = $password;

        $user->save();

        $role = Role::where("name", $request->rol)->first();
        $user->assignRole($role);

        return response()->json([
            "status" => "success",
            "message" => "Registro creado correctamente."
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = Encrypt::decryptValue($request->id);
        $user = User::find($id);

        $password = Hash::make($request->password);

        $data = [
            "name" => $request->name,
            "email" => $request->email,
            "position_signature" => $request->position_signature,
            "dependency_name" => Dependency::where('dependency_name', $request->dependency_name)->first()->id,
            "inmediate_superior_id" => User::where('name', $request->inmediate_superior_id)->first()->id,
        ];

        if (isset($request->rol)) {
            $oldRole = DB::table("model_has_roles")->where("model_id", $user->id)->delete();

            $role = Role::where("name", $request->rol)->first();
            $user->assignRole($role);
        }

        $user->update($data);

        return response()->json([
            "status" => "success",
            "message" => "Registro creado correctamente."
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user->delete();
        return response()->json([
            "status" => "success",
            "message" => "Registro creado correctamente."
        ]);
    }

    /**
     * Change the status resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function disableUser(Request $request)
    {
        $id = Encrypt::decryptValue($request->id);

        $user = User::where('id', $id)->first();
        $user->status = 0;
        $user->save();

        return response()->json([
            "status" => 200,
            "success" => true,
            "message" => "Usuario desactivado correctamente."
        ]);
    }

    /**
     * Gets the specified user resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function actualUser(Request $request)
    {
        $user = User::find(auth()->user()->id);

        return response()->json([
            "status" => "success",
            "message" => "Registro obtenido correctamente.",
            "user" => $user
        ]);
    }

    /**
     * Gets info user logged
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function infoUserLoggedIn(Request $request)
    {
        $user = auth()->user();
        // Getting the role of the user
        // $role = auth()->user()->getRoleNames()[0];
        // $user->role = $role;

        $user->dependency = Dependency::where('id', $user->dependency_id)
            ->first();

        return response()->json(['message' => 'success', 'userInfoLogged' => $user]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function usersByDependency(Request $request)
    {
        $userLogged = auth()->user();

        $users = User::where('dependency_id', $userLogged->dependency_id)->get();

        return response()->json([
            "success" => true,
            "status" => 200,
            "message" => "Usuarios obtenidos correctamente.",
            "users" => $users,
        ]);
    }
}
