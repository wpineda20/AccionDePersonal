<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class JustificationType extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'justification_type';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'justification_name',
        'valid_days',
        'year',
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

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return JustificationType::select('justification_type.*', 'justification_type.id as id')

            ->where('justification_type.justification_name', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("justification_type.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return JustificationType::select('justification_type.*', 'justification_type.id as id')

            ->where('justification_type.justification_name', 'like', $search)

            ->count();
    }
}
