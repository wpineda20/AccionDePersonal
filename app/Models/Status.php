<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'status';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'status_name', 'deleted_at', 'created_at', 'updated_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Status::select('status.*', 'status.id as id')

            ->where('status.status_name', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("status.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return Status::select('status.*', 'status.id as id')

            ->where('status.status_name', 'like', $search)

            ->count();
    }
}
