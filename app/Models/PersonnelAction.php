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
}
