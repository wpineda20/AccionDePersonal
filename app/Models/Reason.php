<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Reason extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'reason';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'reason_name', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Reason::select('reason.*', 'reason.id as id')
        
		->where('reason.reason_name', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("reason.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Reason::select('reason.*', 'reason.id as id')
        
		->where('reason.reason_name', 'like', $search)

        ->count();
    }
}
