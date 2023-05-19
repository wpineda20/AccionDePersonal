<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PersonnelAction extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'personnel_action';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'date_request_created',
        'user_id',
        'justification_type_id',
        'from_hour',
        'to_hour',
        'total_hours',
        'effective_date',
        'from_date',
        'to_date',
        'total_days',
        'justification',
        'current_year',
        'status_id',
        'justification_file',
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage, $filter)
    {
        return PersonnelAction::select(
            'personnel_action.*',
            'u.name as employee_name',
            'u.position_signature',
            'd.dependency_name',
            'jt.justification_name',
            's.status_name'
        )
            ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
            ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
            ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
            ->join('status as s', 'personnel_action.status_id', '=', 's.id')
            ->where('jt.justification_name', 'like', $search)
            ->where('s.status_name', $filter)
            ->where('personnel_action.user_id', auth()->user()->id)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("personnel_action.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return PersonnelAction::select(
            'personnel_action.*',
            'u.name as employee_name',
            'u.position_signature',
            'd.dependency_name',
            'jt.justification_name',
            's.status_name'
        )
            ->join('users as u', 'personnel_action.user_id', '=', 'u.id')
            ->join('dependency as d', 'u.dependency_id', '=', 'd.id')
            ->join('justification_type as jt', 'personnel_action.justification_type_id', '=', 'jt.id')
            ->join('status as s', 'personnel_action.status_id', '=', 's.id')
            ->where('jt.justification_name', 'like', $search)
            ->where('personnel_action.user_id', auth()->user()->id)

            ->count();
    }
}
