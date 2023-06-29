<?php

namespace App\Http\Controllers;

use App\Models\PersonnelAction;
use App\Models\Remark;
use App\Models\Status;
use App\Models\JustificationType;
use App\Models\HistoryPersonnelAction;
use App\Models\User;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use Str;
use Encrypt;
use Barryvdh\DomPDF\Facade\Pdf;


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
            'justification_file' => $justification_file,
            'extraordinary_work' => $request->extraordinary_work,
            'training' => $request->training,
            'execution_site' => $request->execution_site,
            'execution_date' => $request->execution_date,
            'execution_schedule' => $request->execution_schedule,
            'execution_number_hours' => $request->execution_number_hours,
            'assigned_by' => $request->assigned_by,
            'period_by' => $request->period_by,
            'number_days_requested' => $request->number_days_requested,
            'execution_effective_date' => $request->execution_effective_date,
            'execution_from' => $request->execution_from,
            'execution_to' => $request->execution_to,
        ]);

        $personnelAction->save();

        //Create first record with status requested
        HistoryPersonnelAction::insert([
            'personnel_action_id' => $personnelAction->id,
            'user_id' => $personnelAction->user_id,
            'status_id' => 1,
            'url_file' => null,
            'active' => 1,
        ]);

        //Generate pdf
        $fileName = 'accion-de-personal-' . Str::random(5) . '.pdf';

        $path = 'public/personnel_actions/' . $fileName;

        $pdf = PDF::loadView("PDF.report", compact("request"))->setPaper("A4", "portrait");

        $content = $pdf->download()->getOriginalContent();

        Storage::put($path, $content);

        $url = Storage::url($path);

        $fullUrl = asset($url);


        //Send PDF information to login
        // try {
        //     $response = Http::dd()->post(
        //         "https://apilogin",
        //         [
        //             'file' => $content,
        //             'user_id' => $personnelAction->user_id,
        //             'coordinatesX' => '',
        //             'coordinatesY' => '',
        //         ]
        //     )->throw()->json();

        //     return $response;
        // } catch (\Throwable $th) {
        //     //throw $th;
        // }


        //Get PDF information from login


        //Create second record with status pending authorization and signed pdf
        $activeState = HistoryPersonnelAction::where([
            'personnel_action_id' => $personnelAction->id,
            'active' => 1,
        ])->first();

        $activeState->active = 0;
        $activeState->save();

        $history = new HistoryPersonnelAction();
        $history->user_id = $personnelAction->user_id;
        $history->personnel_action_id = $personnelAction->id;
        $history->status_id = 2;
        $history->active = 1;
        $history->url_file = $fullUrl;
        $history->save();


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
        if ($from_hour > $to_hour && $data['period_by'] == 'hours') {
            $validation['message'] = "La hora de inicio no puede ser mayor que la de fin.";
            $validation['total'] = 1;

            return $validation;
        }

        //Validate dates
        if ($data['from_date'] > $data['to_date'] && $data['period_by'] == 'days') {
            $validation['message'] = "La fecha de inicio no puede ser mayor a la fecha fin.";
            $validation['total'] = 1;
            dd("Hola");

            return $validation;
        }

        return $validation;
    }

    /**
     * send information to login 
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function apiSendPdf()
    {
        $response = Http::dd()->post(
            "https://apilogin",
            [
                'file' => '', //id de login sv puede ir vacío si no se tiene
                'user_id' => auth()->user()->id, //correo de persona que inicia el tramite
                'tramite_id' => '1460', // La secretaria lo proporciona
            ]
        )->throw()->json();

        return $response;
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

        if (substr($request->justification_file, 0, 20) == "data:application/pdf") {

            $request->justification_file = FileController::base64ToFile($request->justification_file, date('Y-m-d') . '-' . Str::random(4) . '-documentacion', 'documents');

            $justification_file = $request->justification_file;
        } else {
            $justification_file = $request->justification_file;
        }
        // dd($request);

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
        $personnelAction->justification_file = $justification_file;

        $personnelAction->save();

        //Create history personnel action status
        HistoryPersonnelAction::insert([
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
     * Get request personnel action to verify for Jefe & Coordinador
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
            //Administrador
            if ($roles[0] == "Administrador") {

                $registeredRecords =  PersonnelAction::select(
                    'personnel_action.*',
                    'u.name as employee_name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'd.dependency_name',
                    'jt.justification_name',
                    's.status_name',
                    'hpa.personnel_action_id',
                    'hpa.active',
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
                    ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
                    ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
                    ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
                    ->join('status as s', 'hpa.status_id', '=', 's.id')
                    // ->where('hpa.status_id', 2)
                    ->where('hpa.active', 1)

                    ->orderBy("personnel_action.date_request_created")
                    ->get();
            }
            //Jefe
            else if ($roles[0] == "Jefe" || auth()->user()->hasUsersInCharge()) {

                $registeredRecords =  PersonnelAction::select(
                    'personnel_action.*',
                    'u.name as employee_name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'd.dependency_name',
                    'jt.justification_name',
                    's.status_name',
                    'hpa.personnel_action_id',
                    'hpa.active',
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
                    ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
                    ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
                    ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
                    ->join('status as s', 'hpa.status_id', '=', 's.id')
                    // ->where('hpa.status_id', 2)
                    ->where('hpa.active', 1)
                    ->where('u.inmediate_superior_id', $userLogged->id) //If the logged-in user is the immediate superior.
                    ->where('u.dependency_id', $userLogged->dependency_id) //If the logged-in user belongs to the same dependency.

                    ->orderBy("personnel_action.date_request_created")
                    ->get();
            }
            //Jefe
            // else if ($roles[0] == "Jefe") {

            //     $registeredRecords =  PersonnelAction::select(
            //         'personnel_action.*',
            //         'u.name as employee_name',
            //         'u.position_signature',
            //         'u.inmediate_superior_id',
            //         'u.dependency_id',
            //         'd.dependency_name',
            //         'jt.justification_name',
            //         's.status_name',
            //         'hpa.personnel_action_id',
            //         'hpa.active',
            //     )
            //         ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
            //         ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
            //         ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
            //         ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            //         ->join('status as s', 'hpa.status_id', '=', 's.id')
            //         ->where('hpa.status_id', 4)
            //         ->where('hpa.active', 1)
            //         ->where('u.dependency_id', $userLogged->dependency_id) //If the logged-in user belongs to the same dependency.
            //         ->WhereNull('u.inmediate_superior_id')

            //         ->orderBy("personnel_action.date_request_created")
            //         ->get();
            // }
            //RRHH
            else if ($roles[0] == "RRHH") {

                $registeredRecords =  PersonnelAction::select(
                    'personnel_action.*',
                    'u.name as employee_name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'd.dependency_name',
                    'jt.justification_name',
                    's.status_name',
                    'hpa.personnel_action_id',
                    'hpa.active',
                )
                    ->join(
                        'users as u',
                        'personnel_action.user_id',
                        '=',
                        'u.id'
                    )
                    ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
                    ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
                    ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
                    ->join('status as s', 'hpa.status_id', '=', 's.id')
                    ->where('hpa.status_id', 5)
                    ->where('hpa.active', 1)

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

    public function updateStatus(Request $request)
    {
        //Update the lastest record on the history
        $personnelActionActive = HistoryPersonnelAction::where([
            'personnel_action_id' => $request->id,
            'active' => 1,
        ])->first();

        $personnelActionActive->active = 0;
        $personnelActionActive->save();

        //create new record on the history record
        $personnelActionStatus = new HistoryPersonnelAction();
        $personnelActionStatus->user_id = auth()->user()->id;
        $personnelActionStatus->personnel_action_id = $request->id;
        $personnelActionStatus->status_id = Status::where('status_name', $request->status)->first()->id;
        $personnelActionStatus->active = 1;
        $personnelActionStatus->url_file = $personnelActionActive->url_file;
        $personnelActionStatus->save();

        //create remark if exists
        if (!empty($request->data)) {

            Remark::where('personnel_action_id', $request->id)->delete();

            foreach ($request->data as $value) {

                Remark::insert([
                    'observation' => $value['observation'] . ' - observada por: ' . auth()->user()->name,
                    'personnel_action_id' => $request->id,
                    'status' => $value['status'] == "No Corregida" ? 0 : 1,
                ]);
            }

            return response()->json(["message" => "success"]);
        }

        // if()

        return response()->json(["message" => "success"]);
    }

    /**
     * Latest 5 Personnel Actions.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function latestPersonnelActions(Request $request)
    {
        $latest = PersonnelAction::select(
            'personnel_action.*',
            'jt.justification_name',
            's.status_name',
            'hpa.personnel_action_id',
            'hpa.active',
            'personnel_action.id as id'
        )
            ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
            ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            ->join('status as s', 'hpa.status_id', '=', 's.id')
            ->where('personnel_action.user_id', auth()->user()->id)
            ->where('hpa.active', 1)
            ->limit(5)
            ->orderBy('date_request_created', 'desc')
            ->get();

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $latest,
            "success" => true,
        ]);
    }

    /**
     * Total Requested. 
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function totalPersonnelAction(Request $request)
    {
        $totalRequested = count(PersonnelAction::select(
            'personnel_action.*',
            'personnel_action.id as id',
            'hpa.personnel_action_id',
            'hpa.active',
        )
            ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            ->where('personnel_action.user_id', auth()->user()->id)
            ->where('hpa.status_id', $request->status_name)
            ->where('hpa.active', 1)
            ->get());

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "total" => $totalRequested,
            "success" => true,
        ]);
    }
    /**
     * Total Observed.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function totalObserved()
    {
        $totalObserved = count(PersonnelAction::select(
            'personnel_action.*',
            'personnel_action.id as id',
            'hpa.personnel_action_id',
            'hpa.active',
        )
            ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            ->where('personnel_action.user_id', auth()->user()->id)
            ->where('hpa.status_id', 3)
            ->where('hpa.active', 1)
            ->get());

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "totalObserved" => $totalObserved,
            "success" => true,
        ]);
    }
    /**
     * Total Rejected.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function totalRejected(Request $request)
    {
        $totalRejected = count(PersonnelAction::select(
            'personnel_action.*',
            'personnel_action.id as id',
            'hpa.personnel_action_id',
            'hpa.active',
        )
            ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            ->where('personnel_action.user_id', auth()->user()->id)
            ->where('hpa.status_name', $request->status_name)
            ->where('hpa.active', 1)
            ->get());

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "totalRejected" => $totalRejected,
            "success" => true,
        ]);
    }
    /**
     * Total Approved.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function totalApproved()
    {
        $totalApproved = count(PersonnelAction::select(
            'personnel_action.*',
            'personnel_action.id as id',
            'hpa.personnel_action_id',
            'hpa.active',
        )
            ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            ->where('personnel_action.user_id', auth()->user()->id)
            ->where('hpa.status_id', 5)
            ->where('hpa.active', 1)
            ->get());


        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "totalApproved" => $totalApproved,
            "success" => true,
        ]);
    }
    /**
     * Total Rejected.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function totalProcessed()
    {
        $totalProcessed = count(PersonnelAction::select(
            'personnel_action.*',
            'personnel_action.id as id',
            'hpa.personnel_action_id',
            'hpa.active',
        )
            ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
            ->where('personnel_action.user_id', auth()->user()->id)
            ->where('hpa.status_id', 7)
            ->where('hpa.active', 1)
            ->get());

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "totalProcessed" => $totalProcessed,
            "success" => true,
        ]);
    }

    /**
     * Personnel actions by justifications.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function personnelActionsByJustifications(Request $request)
    {
        // $actionsByJustifications = count(PersonnelAction::select('*', 'jt.justification_name', 'personnel_action.id as id')
        //     ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
        //     // ->join('status as s', 'personnel_action.status_id', '=', 's.id')
        //     ->where('justification_type_id', 12)
        //     ->get());

        $actionsByJustifications = [
            [
                "country" => "A",
                "value" => 1,
            ],
            [
                "country" => "B",
                "value" => 5,
            ],
        ];

        // dd($actionsByJustifications);
        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $actionsByJustifications,
            "success" => true,
        ]);
    }
}
