<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\PersonnelAction;
use App\Models\Remark;
use App\Models\Status;
use App\Models\JustificationType;
use App\Models\HistoryPersonnelAction;

use App\Repositories\HistoryPersonnelActionRepository;
use App\Repositories\PersonnelActionRepository;

use Str;
use Encrypt;


class PersonnelActionController extends Controller
{
    private $personnelActionRepository;
    private $historyPersonnelActionRepository;

    public function __construct()
    {
        $this->personnelActionRepository = new PersonnelActionRepository();
        $this->historyPersonnelActionRepository = new HistoryPersonnelActionRepository();
    }

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
        $validation = $this->personnelActionRepository->validatePersonnelAction($request->all());

        if ($validation['total'] > 0) {
            return response()->json([
                'message' => $validation['message'],
                'state' => 'fail',
            ], 400);
        }

        //Create personnel action
        $personnelAction = $this->personnelActionRepository->create($request);

        //Create first record with status requested
        $this->historyPersonnelActionRepository->create($personnelAction, 1);

        $infoAp = $this->personnelActionRepository->getInfo($personnelAction->id);
        $createdFile = $this->historyPersonnelActionRepository->createFile($infoAp, $personnelAction->id);

        //Send PDF information to login
        $signedFile = $this->historyPersonnelActionRepository->signFile(
            $createdFile['content'],
            $createdFile['name'],
            auth()->user()->email,
            'true',
            15,
            27
        );

        //Create second record with status pending authorization and signed pdf
        $this->historyPersonnelActionRepository->advanceAp($personnelAction, 2, $signedFile['url'], auth()->user()->inmediate_superior_id);

        return response()->json([
            'success' => true,
            'message' => "Tu solicitud ha sido enviada exitosamente.",
        ]);
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
     * Updates the information of the AP.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $personnelAction = PersonnelAction::where('id', $data['id'])->first();

        if (substr($request->justification_file, 0, 20) == "data:application/pdf") {

            $request->justification_file = FileController::base64ToFile($request->justification_file, date('Y-m-d') . '-' . Str::random(4) . '-documentacion', 'documents');

            $justification_file = $request->justification_file;
        } else {
            $justification_file = $request->justification_file;
        }

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
        $personnelAction->justification_file = $justification_file;

        $personnelAction->save();

        $createdFile = $this->historyPersonnelActionRepository->createFile($request, $personnelAction->id);

        $this->historyPersonnelActionRepository->advanceAp($personnelAction, 2, $createdFile, auth()->user()->id);

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
                    'u.name as name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'u.dependency_name',
                    'jt.justification_name',
                    's.status_name',
                    'hpa.personnel_action_id',
                    'hpa.active',
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
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
                    'u.name as name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'u.dependency_name',
                    'jt.justification_name',
                    's.status_name',
                    'hpa.personnel_action_id',
                    'hpa.active',
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
                    ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
                    ->join('history_personnel_action as hpa', 'hpa.personnel_action_id', '=', 'personnel_action.id')
                    ->join('status as s', 'hpa.status_id', '=', 's.id')
                    // ->where('hpa.status_id', 2)
                    ->where('hpa.active', 1)
                    ->where('hpa.user_id', $userLogged->id) //If the logged-in user is the immediate superior.
                    // ->where('u.dependency_name', $userLogged->dependency_name) //If the logged-in user belongs to the same dependency.

                    ->orderBy("personnel_action.date_request_created")
                    ->get();
            }
            //RRHH
            else if ($roles[0] == "RRHH") {

                $registeredRecords =  PersonnelAction::select(
                    'personnel_action.*',
                    'u.name as name',
                    'u.position_signature',
                    'u.inmediate_superior_id',
                    'u.dependency_name',
                    'jt.justification_name',
                    's.status_name',
                    'hpa.personnel_action_id',
                    'hpa.active',
                )
                    ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
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
     * Only updates the status but no the information of the ap.
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */

    public function updateStatus(Request $request)
    {
        $personnelAction = PersonnelAction::find($request->id);

        $positions = $this->historyPersonnelActionRepository->calculatePositionOfSign($request->id);

        // When the user logged in can sen the ap to rrhh and the status
        if (auth()->user()->send_to_rrhh == 1 && $request->status == 'Autorizada') {
            $statusId = 5;
            $userId = auth()->user()->id;

            //Send PDF information to login
            $signedFile = $this->historyPersonnelActionRepository->updateSign(
                $positions['url_file'],
                auth()->user()->email,
                'true',
                $positions['positionX'],
                $positions['positionY'],
            );
        } else if ($request->status == 'Autorizada') {
            $statusId = 2;
            $userId = auth()->user()->inmediate_superior_id;

            $signedFile = $this->historyPersonnelActionRepository->updateSign(
                $positions['url_file'],
                auth()->user()->email,
                'true',
                $positions['positionX'],
                $positions['positionY'],
            );
        } else {
            $userId = auth()->user()->id;
            $statusId = Status::where('status_name', $request->status)->first()->id;
        }

        // Advance history
        $this->historyPersonnelActionRepository->advanceAp($personnelAction, $statusId, $signedFile['url'] ?? null,  $userId);

        //create remark if exists
        if (!empty($request->data && $request->status == 'Observada')) {

            Remark::where('personnel_action_id', $request->id)->delete();

            foreach ($request->data as $value) {

                Remark::insert([
                    'observation' => 'Observada por ' . auth()->user()->name . ': ' . $value['observation'],
                    'personnel_action_id' => $request->id,
                    'status' => $value['status'] == "No Corregida" ? 0 : 1,
                ]);
            }

            return response()->json(["message" => "success"]);
        }

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
        $latest = $this->personnelActionRepository->latestPersonnelActions(auth()->user()->id, 5);

        return response()->json([
            "data" => $latest,
        ], 200);
    }

    /**
     * Total Requested. 
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function totalPersonnelActionByStatus(Request $request)
    {
        $pendingAuthorization = $this->personnelActionRepository->countByStatus(auth()->user()->id, 2);
        $observed = $this->personnelActionRepository->countByStatus(auth()->user()->id, 3);
        $authorized = $this->personnelActionRepository->countByStatus(auth()->user()->id, 4);
        $processed = $this->personnelActionRepository->countByStatus(auth()->user()->id, 5);
        $rejected = $this->personnelActionRepository->countByStatus(auth()->user()->id, 6);
        $finished = $this->personnelActionRepository->countByStatus(auth()->user()->id, 7);
        $total = PersonnelAction::where('user_id', auth()->user()->id)->count();

        return response()->json([
            "message" => "Registros obtenidos correctamente.",
            "data" => [
                [
                    'title' => 'En autorización',
                    'icon' => 'mdi-file-clock',
                    'total' => $pendingAuthorization,
                ],
                [
                    'title' => 'Observadas',
                    'icon' => 'mdi-file-edit',
                    'total' => $observed,
                ],
                [
                    'title' => 'Autorizadas',
                    'icon' => 'mdi-file-edit',
                    'total' => $authorized,
                ],
                [
                    'title' => 'Remitidas a UTH',
                    'icon' => 'mdi-file-check',
                    'total' => $processed,
                ],
                [
                    'title' => 'Rechazada',
                    'icon' => 'mdi-file-remove',
                    'total' => $rejected,
                ],
                [
                    'title' => 'Finalizada',
                    'icon' => 'mdi-file-star',
                    'total' => $finished,
                ],
                [
                    'title' => 'Total',
                    'icon' => 'mdi-file-multiple',
                    'total' => $total,
                ],
            ],
        ]);
    }

    /**
     * Total by Justifications. 
     *
     * @param  \App\Models\PersonnelAction  $personnelAction
     * @return \Illuminate\Http\Response
     */
    public function personnelActionsByJustifications(Request $request)
    {
        $justificationA = $this->personnelActionRepository->countByJustification(auth()->user()->id, 1);
        $justificationB = $this->personnelActionRepository->countByJustification(auth()->user()->id, 2);
        $justificationC = $this->personnelActionRepository->countByJustification(auth()->user()->id, 3);
        $justificationD = $this->personnelActionRepository->countByJustification(auth()->user()->id, 4);
        $justificationE = $this->personnelActionRepository->countByJustification(auth()->user()->id, 5);
        $justificationF = $this->personnelActionRepository->countByJustification(auth()->user()->id, 6);
        $justificationG = $this->personnelActionRepository->countByJustification(auth()->user()->id, 7);
        $justificationH = $this->personnelActionRepository->countByJustification(auth()->user()->id, 8);
        $justificationI = $this->personnelActionRepository->countByJustification(auth()->user()->id, 9);
        $justificationJ = $this->personnelActionRepository->countByJustification(auth()->user()->id, 10);
        $justificationK = $this->personnelActionRepository->countByJustification(auth()->user()->id, 11);
        $justificationL = $this->personnelActionRepository->countByJustification(auth()->user()->id, 12);
        $justificationM = $this->personnelActionRepository->countByJustification(auth()->user()->id, 13);

        return response()->json(
            [
                "message" => "Registros obtenidos correctamente.",
                "data" => [
                    [
                        'letter' => 'A',
                        'value' => $justificationA,
                    ],
                    [
                        'letter' => 'B',
                        'value' => $justificationB,
                    ],
                    [
                        'letter' => 'C',
                        'value' => $justificationC,
                    ],
                    [
                        'letter' => 'D',
                        'value' => $justificationD,
                    ],
                    [
                        'letter' => 'E',
                        'value' => $justificationE,
                    ],
                    [
                        'letter' => 'F',
                        'value' => $justificationF,
                    ],
                    [
                        'letter' => 'G',
                        'value' => $justificationG,
                    ],
                    [
                        'letter' => 'H',
                        'value' => $justificationH,
                    ],
                    [
                        'letter' => 'I',
                        'value' => $justificationI,
                    ],
                    [
                        'letter' => 'J',
                        'value' => $justificationJ,
                    ],
                    [
                        'letter' => 'K',
                        'value' => $justificationK,
                    ],
                    [
                        'letter' => 'L',
                        'value' => $justificationL,
                    ],
                    [
                        'letter' => 'M',
                        'value' => $justificationM,
                    ],
                ],
            ]
        );
    }
}
