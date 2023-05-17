<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Remark extends Model
{
    use HasFactory;

    protected $table = 'remarks';

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'observation', 'personnel_action_id', 'status', 'created_at', 'updated_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;
}
