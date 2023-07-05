<?php

namespace App\Repositories;

use App\Models\JustificationType;
use App\Models\PersonnelAction;
use App\Models\Remark;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class PersonnelActionRepository
{
    public function getRecords(array $filters): Collection
    {
        $personnelActions =  PersonnelAction::select(
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
            ->where($filters)

            ->orderBy("personnel_action.date_request_created")
            ->get();

        foreach ($personnelActions as $key => $value) {
            $value->remarks = Remark::where('personnel_action_id', $value->id)->get();

            foreach ($value->remarks as $remark) {
                $remark->status = ($remark->status == 0) ? "No Corregida" : "Corregida";
            }
        }

        return $personnelActions;
    }

    public function create(Request $request)
    {
        //Base64 to file convertion
        if ($request->justification_file) {
            $justification_file = FileController::base64ToFile($request->justification_file, date('Y-m-d') . '-' . Str::random(4) . '-documentacion', 'documents');

            $justification_file = asset($justification_file);
        } else {
            $justification_file = $request->justification_file;
        }

        return PersonnelAction::create([
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

            return $validation;
        }

        //Validate if has an immediate superior
        if (empty(auth()->user()->inmediate_superior_id)) {
            $validation['message'] = "No puedes solicitar una acción de personal sin tener asignado un jefe.";
            $validation['total'] = 1;

            return $validation;
        }

        return $validation;
    }

    public function latestPersonnelActions(int $userId, int $total = 5)
    {
        return PersonnelAction::select(
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
            ->where('personnel_action.user_id', $userId)
            ->where('hpa.active', 1)
            ->limit($total)
            ->orderBy('date_request_created', 'desc')
            ->get();
    }

    public function countByStatus(int $userId, int $statusId)
    {
        return PersonnelAction::select(
            'personnel_action.*',
            'personnel_action.id as id',
            'hpa.personnel_action_id',
            'hpa.active',
            'st.status_name',
        )
            ->join('history_personnel_action as hpa', 'personnel_action.id', '=', 'hpa.personnel_action_id')
            ->join('status as st', 'hpa.status_id', '=', 'st.id')
            ->where('personnel_action.user_id', $userId)
            ->where('hpa.status_id', $statusId)
            ->where('hpa.active', 1)
            ->count();
    }

    public function countByJustification(int $userId, int $justificationId)
    {
        return PersonnelAction::where('personnel_action.user_id', $userId)
            ->where('personnel_action.justification_type_id', $justificationId)
            ->count();
    }

    public function getInfo(int $apId)
    {
        return PersonnelAction::select('personnel_action.*', 'u.*', 'jt.*', 'personnel_action.id as id', 'u.name as name')
            ->where('personnel_action.id', $apId)
            ->join('users as u', 'personnel_action.user_id', 'u.id')
            ->join('justification_type as jt', 'personnel_action.justification_type_id', 'jt.id')
            ->first();
    }
}
