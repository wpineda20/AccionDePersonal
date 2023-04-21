<?php

namespace App\Http\Controllers;

use App\Models\Dependency;

use Illuminate\Http\Request;
use Encrypt;

class DependencyController extends Controller
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

        // Getting all the records
        if (($request->itemsPerPage == -1)) {
            $itemsPerPage =  Dependency::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $dependency = Dependency::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $dependency = Encrypt::encryptObject($dependency, "id");

        $total = Dependency::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $dependency,
            "total" => $total,
            "success" => true,
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
        $dependency = new Dependency;

        $dependency->dependency_name = $request->dependency_name;
        $dependency->address = $request->address;
        $dependency->superior_dependency = $request->superior_dependency;
        $dependency->deleted_at = $request->deleted_at;

        $dependency->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dependency  dependency
     * @return \Illuminate\Http\Response
     */
    public function show(Dependency $dependency)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dependency  $dependency
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $dependency = Dependency::where('id', $data['id'])->first();
        $dependency->dependency_name = $request->dependency_name;
        $dependency->address = $request->address;
        $dependency->superior_dependency = $request->superior_dependency;
        $dependency->deleted_at = $request->deleted_at;

        $dependency->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dependency  $dependency
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = Encrypt::decryptValue($request->id);

        Dependency::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }
}
