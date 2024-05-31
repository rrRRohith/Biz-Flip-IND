<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Traits\HasPermissions;


class User extends Authenticatable
{
   
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes, HasRoles, HasPermissions;
       protected $dates = ['deleted_at'];

    protected $appends = ['picture_url'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'phone',
        'email',
        'password',
        'picture',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getNameAttribute(){
        return "{$this->firstname} {$this->lastname}";
    }
    
    public function isAdmin()
    {
        return $this->type === 'admin';
    }

    public function isSeller()
    {
        return $this->type === 'seller';
    }

    public function getPictureAttribute($picture){
        return $picture ? : 'default.png';
    }

    public function getPictureUrlAttribute($picture){
        return asset('images/'.$this->picture);
    }

    public function seller(){
        return $this->hasOne(Seller::class);
    }

    public function getRole()
    {
        return $this->belongsTo('App\Models\Role','role_id','id');
    }
    
    public function availability(){
        return $this->hasOne(SellerAvailability::class);
    }
    
    public function tickets(){
        return $this->hasMany(Ticket::class);
    }
}
