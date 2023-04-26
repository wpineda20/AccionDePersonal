<?php

namespace App\Http\Controllers;

use App\Models\PersonnelAction;
use App\Models\User;
use App\Models\Dependency;
use App\Models\JustificationType;
use Illuminate\Http\Request;

class PersonnelActionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //ValidatePersonnelAction
        $validation = $this->validatePersonnelAction($request->all());


        if ($validation['total'] > 0) {
            return response()->json([
                'success' => false,
                'status' => 500,
                'message' => $validation['message'],
                'state' => 'fail',
            ]);
        }

        //Create personnel action
        $personnelAction = PersonnelAction::create([
            'date_request_created' => now(),
            'user_id' => auth()->user()->id,
            'justification_type_id' => JustificationType::where('justification_name', $request->justification_name)->first()->id,
            'from_hour' => $request->from_hour,
            'to_hour' => $request->to_hour,
            'total_hours' => $request->total_hours,
            'effective_date' => $request->effective_date,
            'from_date' => $request->from_date,
            'to_date' => $request->to_date,
            'total_days' => $request->total_days,
            'justification' => $request->justification,
            'current_year' => intval(date("Y")),
            'status_id' => 1,
        ]);

        $personnelAction->save();

        return response()->json([
            'success' => true,
            'message' => "Tu solicitud ha sido enviada exitosamente.",
        ]);
    }

    /**
     * Validate Dates & Hours Personnel Action
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function validatePersonnelAction(array $data)
    {
        $validation = [
            'total' => 0,
            'messsage' => "",
        ];

        $from_hour = date("Hi", strtotime($data['from_hour']));
        $to_hour = date("Hi", strtotime($data['to_hour']));

        //Validate hours
        if ($from_hour > $to_hour) {
            $validation['message'] = "La hora de inicio no puede ser mayor que la de fin.";
            $validation['total'] = 1;

            return $validation;
        }

        //Validate dates
        if ($data['from_date'] > $data['to_date']) {
            $validation['message'] = "La fecha de inicio no puede ser mayor a la fecha fin.";
            $validation['total'] = 1;

            return $validation;
        }

        return $validation;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function show(PersonnelAction $personnelAction)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PersonnelAction $personnelAction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function destroy(PersonnelAction $personnelAction)
    {
        //
    }

    /**
     * Get user personnel actions.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function userPersonnelActions(Request $request)
    {
        $filters = [];

        if (isset($request->filter)) {
            switch ($request->filter) {
                case "Solicitada":
                    $filters['s.status_name'] = "Solicitada";
                    break;
                case "Observada":
                    $filters['s.status_name'] = "Observada";
                    break;
                case "Rechazada":
                    $filters['s.status_name'] = "Rechazada";
                    break;
                case "Aprobada":
                    $filters['s.status_name'] = "Aprobada";
                    break;
                case "Procesada":
                    $filters['s.status_name'] = "Procesada";
                    break;
            }
        }

        $skip = $request->skip;
        $limit = $request->take - $skip; // the limit

        $registeredRecords = PersonnelAction::select('*', 's.status_name', 'jt.justification_name')
            ->join('status as s', 'personnel_action.status_id', '=', 's.id')
            ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
            ->where($filters)
            ->skip($skip)
            ->take($limit)
            ->get();

        $total = PersonnelAction::count();

        return response()->json([
            'message' => 'success',
            'registeredRecords' => $registeredRecords,
            'total' => $total
        ]);
    }
}
