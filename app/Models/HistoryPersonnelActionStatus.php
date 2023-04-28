<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoryPersonnelActionStatus extends Model
{
    use HasFactory;

    protected $table = 'history_personnel_action_status';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'personnel_action_id',
        'user_id',
        'status_id',
        'update_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;
}
