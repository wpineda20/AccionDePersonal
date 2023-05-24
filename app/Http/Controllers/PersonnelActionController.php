<?php

namespace App\Http\Controllers;

use App\Models\PersonnelAction;
use App\Models\User;
use App\Models\Dependency;
use App\Models\Remark;
use App\Models\Status;
use App\Models\JustificationType;
use App\Models\HistoryPersonnelActionStatus;
use Illuminate\Http\Request;
use Str;
use Encrypt;


class PersonnelActionController extends Controller
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
            $itemsPerPage =  PersonnelAction::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $personnelAction = PersonnelAction::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage, $request->filter);

        foreach ($personnelAction as $key => $value) {
            $value->remarks = Remark::where('personnel_action_id', $value->id)->get();

            foreach ($value->remarks as $remark) {
                $remark->status = ($remark->status == 0) ? "No Corregida" : "Corregida";
            }
        }

        $personnelAction = Encrypt::encryptObject($personnelAction, "id");

        $total = PersonnelAction::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $personnelAction,
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

        //Base64 to file convertion
        if ($request->justification_file) {
            $justification_file = FileController::base64ToFile($request->justification_file, date('Y-m-d') . '-' . Str::random(4) . '-documentacion', 'documents');

            $justification_file = asset($justification_file);
        } else {
            $justification_file = $request->justification_file;
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
            'justification_file' => $justification_file,
        ]);

        $personnelAction->save();

        //Create history personnel action status
        HistoryPersonnelActionStatus::insert([
            'personnel_action_id' => $personnelAction->id,
            'user_id' => auth()->user()->id,
            'status_id' => $personnelAction->status_id,
            'update_date' => now(),
        ]);

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
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $personnelAction = PersonnelAction::where('id', $data['id'])->first();

        //Base64 to file convertion
        // if ($request->justification_file) {
        //     $justification_file = FileController::base64ToFile($request->justification_file, date('Y-m-d') . '-' . Str::random(4) . '-documentacion', 'documents');

        //     $justification_file = asset($justification_file);
        // } else {
        //     $justification_file = $request->justification_file;
        // }

        $personnelAction->justification_type_id = JustificationType::where('justification_name', $request->justification_name)->first()->id;
        $personnelAction->from_hour = $request->from_hour;
        $personnelAction->to_hour = $request->to_hour;
        $personnelAction->total_hours = $request->total_hours;
        $personnelAction->effective_date = $request->effective_date;
        $personnelAction->from_date = $request->from_date;
        $personnelAction->to_date = $request->to_date;
        $personnelAction->total_days = $request->total_days;
        $personnelAction->justification = $request->justification;
        $personnelAction->current_year = $request->current_year;
        $personnelAction->status_id = 1;
        // $personnelAction->justification_file = $justification_file;

        $personnelAction->save();

        //Create history personnel action status
        HistoryPersonnelActionStatus::insert([
            'personnel_action_id' => $personnelAction->id,
            'user_id' => auth()->user()->id,
            'status_id' => $personnelAction->status_id,
            'update_date' => now(),
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
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

        $registeredRecords = PersonnelAction::select(
            '*',
            'u.name as employee_name',
            'u.position_signature',
            'd.dependency_name',
            'jt.justification_name',
            's.status_name',
        )
            ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
            ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
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

    /**
     * Get request personnel action to verify
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function verifyPersonnelActions(Request $request)
    {
        //Getting the role
        $roles = auth()->user()->getRoleNames();
        //Getting user info
        $userLogged = auth()->user();

        if (isset($roles[0])) {
            if ($roles[0] == "Administrador") { //Administrador

                $registeredRecords =  PersonnelAction::select(
                    'personnel_action.*',
                    'u.name as employee_name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'd.dependency_name',
                    'jt.justification_name',
                    's.status_name'
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
                    ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
                    ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
                    ->join('status as s', 'personnel_action.status_id', '=', 's.id')
                    ->where('personnel_action.status_id', 1)

                    ->orderBy("personnel_action.date_request_created")
                    ->get();
            }
            if ($roles[0] == "Jefe") { //Jefe inmediato

                $registeredRecords =  PersonnelAction::select(
                    'personnel_action.*',
                    'u.name as employee_name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'd.dependency_name',
                    'jt.justification_name',
                    's.status_name'
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
                    ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
                    ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
                    ->join('status as s', 'personnel_action.status_id', '=', 's.id')
                    ->where('personnel_action.status_id', 1)
                    ->where('u.inmediate_superior_id', $userLogged->id)

                    ->orderBy("personnel_action.date_request_created")
                    ->get();
            }

            foreach ($registeredRecords as $key => $value) {
                $value->remarks = Remark::where('personnel_action_id', $value->id)->get();

                foreach ($value->remarks as $remark) {
                    $remark->status = ($remark->status == 0) ? "No Corregida" : "Corregida";
                }
            }
        }

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $registeredRecords,
            "success" => true,
        ]);
    }

    /**
     * Set personnel action status.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */

    public function setStatus(Request $request)
    {
        $personnelAction = PersonnelAction::where('id', $request->id)->first();
        $personnelAction->status_id =  Status::where('status_name', $request->status)->first()->id;
        $personnelAction->save();

        if (!empty($request->data)) {
            Remark::insert([
                'observation' => $request->data[0]['observation'],
                'personnel_action_id' => $personnelAction->id,
                'status' => $request->data[0]['status'] == "No corregida" ? 0 : 1,
            ]);
        }

        HistoryPersonnelActionStatus::insert([
            'personnel_action_id' => $personnelAction->id,
            'user_id' => auth()->user()->id,
            'status_id' => $personnelAction->status_id,
            'update_date' => now(),
        ]);

        return response()->json(["message" => "success"]);
    }
}
