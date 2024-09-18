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

    protected $appends = ['picture_url', 'is_agent'];
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
        'type',
        'unique_code',
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

    public function scopeSellers($q)
    {
        return $q->whereType('seller')->whereHas('seller');
    }

    public function getPictureAttribute($picture){
        return $picture ? : 'default.png';
    }

    public function getPictureUrlAttribute($picture){
        return $this->picture ? image_url($this->picture) : asset('/assets/admin/images/noimage.webp');
        return asset($this->picture ? 'images/'.$this->picture : '/assets/admin/images/noimage.webp');
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

    public function scopeSearchAgent($q, Request $request){
        return $q->when($request->aq, function($q) use($request){
            return $q->where('firstname', 'LIKE', "%{$request->aq}%")->orWhere('lastname', 'LIKE', "%{$request->aq}%")
            ->orWhere(function($q) use($request){
                return $q->whereHas('seller', fn($q) => $q->where('company_name', 'LIKE', "%{$request->aq}%"));
            });
        })->when($request->agentCategory, fn($q) => $q->whereHas('ads', fn($q) => $q->whereHas('categories', fn($q) => $q->whereIn('categories.id', (array) $request->agentCategory))));
    }

    public function ad_views(){
        return $this->hasManyDeepFromRelations($this->ads(), (new Ad())->views());
    }

    public function socials(){
        return $this->hasMany(SocailLink::class);
    }

    public function leadEnquiries()
    {
        return $this->hasMany(LeadEnquiry::class, 'seller_id');
    }

    public function getIsAgentAttribute() : bool{
        return (bool) ($this->employer()->exists() ? $this->employer->seller()->exists() :  $this->seller()->exists());
    }

    public function subscription_orders(){
        return $this->hasMany(SubscriptionOrder::class, 'seller_id', 'id');
    }

    public function current_subscription(){
        return $this->hasOne(SubscriptionOrder::class, 'seller_id', 'id')->where('expires_at', '>', now())->latest();
    }

    public function getRemainingAdsAttribute(){
        return $this->current_subscription->remaining_ads ?? 0;
    }

    public function chats(){
        if($this->type == 'customer'){
            return $this->hasMany(Chat::class, 'customer_id', 'id');
        }else{
            if($this->employer()->exists()){
                return $this->hasMany(Chat::class, 'seller_id', 'parent_id');
            }
            return $this->hasMany(Chat::class, 'seller_id', 'id');
        }
    }
}
