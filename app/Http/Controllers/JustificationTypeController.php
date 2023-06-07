<?php

namespace App\Http\Controllers;

use App\Models\JustificationType;

use Illuminate\Http\Request;
use Encrypt;

class JustificationTypeController extends Controller
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
            $itemsPerPage =  JustificationType::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $reason = JustificationType::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $reason = Encrypt::encryptObject($reason, "id");

        $total = JustificationType::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $reason,
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
        $reason = new JustificationType;

        $reason->justification_name = $request->justification_name;
        $reason->valid_days = $request->valid_days;
        $reason->year = $request->year;
        $reason->deleted_at = $request->deleted_at;

        $reason->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reason  reason
     * @return \Illuminate\Http\Response
     */
    public function show(JustificationType $reason)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JustificationType  $reason
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $reason = JustificationType::where('id', $data['id'])->first();
        $reason->justification_name = $request->justification_name;
        $reason->valid_days = $request->valid_days;
        $reason->year = $request->year;
        $reason->deleted_at = $request->deleted_at;

        $reason->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reason  $reason
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = Encrypt::decryptValue($request->id);

        JustificationType::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * List of Justificactions with colors & letters
     *
     * @param  \App\Models\Reason  $reason
     * @return \Illuminate\Http\Response
     */
    public function justificationLettersColors(Request $request)
    {
        $justifications = JustificationType::all();

        $colors =
            [
                "#6cb4d5", //A 1
                "#628acb", //B 2
                "#626bcb", //C 3              
                "#8c76df", //D 4
                "#a26cd5", //E 5
                "#c26cd5", //F 6 
                "#df76d3", //G 7
                "#d56ca9", //H 8
                "#d56c8a", //I 9
                "#d56e6c", //J 10
                "#cb8362", //K 11
                "#dfb776", //L 12
                "#dfd676", //M 13
            ];

        $letters = range('A', 'Z'); // Letras disponibles

        foreach ($justifications as $key => $value) {

            $colorIndex = $key % count($colors); // Índice del color actual
            $letterIndex = $key % count($letters); // Índice de la letra actual

            $value->letter = $letters[$letterIndex];
            $value->color = $colors[$colorIndex];
        }

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $justifications,
            "success" => true,
        ]);
    }
}
