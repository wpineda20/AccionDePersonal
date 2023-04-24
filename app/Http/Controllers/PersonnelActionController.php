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
                'success' => true,
                'status' => 200,
                'message' => $validation['message'],
                'state' => 'fail',
            ]);
        }

        //Save user information
        $userInfo = User::where('id', auth()->user()->id)->first();

        $userInfo->name = $request->employee_name;
        $userInfo->position_signature = $request->position_signature;
        $userInfo->dependency_id = Dependency::where('dependency_name', $request->dependency_name)->first()->id;

        $userInfo->save();

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
        if (isset($from_hour) > isset($to_hour)) {
            $validation['message'] = "La hora de inicio no puede ser mayor que la de fin.";
            $validation['total'] = 1;

            return $validation;
        }

        //Validate dates
        if (isset($data['from_date']) > isset($data['to_date'])) {
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
}
