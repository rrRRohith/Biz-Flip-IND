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
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

class User extends Authenticatable
{
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;
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
        'role_id',
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

    public function staff_roles(){
        return $this->hasMany(\App\Models\Role::class, 'user_id', 'id');
    }

    public function staffs(){
        return $this->hasMany(self::class, 'parent_id', 'id');
    }

    public function getRoleNameAttribute(){
        return $this->getRole->name ?? null;
    }

    public function employer(){
        return $this->belongsTo(self::class, 'parent_id', 'id');
    }

    public function ads(){
        return $this->hasMany(Ad::class, 'seller_id', 'id');
    }

    public function leads(){
        return $this->hasMany(LeadEnquiry::class, 'seller_id', 'id');
    }

    public function scopeSearch($q, Request $request){
        return $q->when($request->q, function($q) use($request){
            return $q->where('firstname', 'LIKE', "%{$request->q}%")->orWhere('lastname', 'LIKE', "%{$request->q}%")
            ->orWhere('email', 'LIKE', "%{$request->q}%");
        });
    }

    public function ad_views(){
        return $this->hasManyDeepFromRelations($this->ads(), (new Ad())->views());
    }

    public function socials(){
        return $this->hasMany(SocailLink::class);
    }
}
