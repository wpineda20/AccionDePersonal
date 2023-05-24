<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Encrypt;

class User extends Authenticatable implements MustVerifyEmail, JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    public $incrementing = true;

    protected $fillable = [
        'id',
        'name',
        'last_name',
        'position_signature',
        'email',
        'dependency_id',
        'inmediate_superior_id',
        'password',
        // 'password_no_encrypted',
        'email_verified_at',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
        'remember_token',
        'email_verified_at',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendEmailVerificationNotification()
    {
        $this->notify(new \App\Notifications\VerifyEmailQueued);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function dependency()
    {
        return $this->belongsTo(Dependency::class);
    }

    public function format($showPassword = true)
    {
        return [

            'id' => Encrypt::encryptValue($this->id),
            'name' => $this->name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'password' => ($showPassword) ? $this->password_no_encrypted : null,
            'rol' => $this->getRoleNames()[0],
            'position_signature' => $this->position_signature,
            'inmediate_superior_id' => ($this->inmediate_superior_id != null) ? User::where('id', $this->inmediate_superior_id)->first('name')->name : null,
            'dependency_name' => $this->dependency->dependency_name,
            'email_verified_at' => $this->email_verified_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return User::select('users.*', 'users.id as id')

            ->where('users.name', 'like', $search)
            ->orWhere('users.email', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("users.$sortBy", $sort)
            ->get()
            ->map(fn ($user) => $user->format());
    }

    public static function counterPagination($search)
    {
        return User::select('users.*', 'users.id as id')

            ->where('users.name', 'like', $search)
            ->orWhere('users.email', 'like', $search)

            ->count();
    }
}
