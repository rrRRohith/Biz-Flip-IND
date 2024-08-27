<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\{Country};
class Province extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

    function country(){
        return  $this->belongsTo(Country::class);
    }

    public function cities(){
        return $this->hasMany(City::class);
    }

    public function ads(){
        return $this->hasMany('App\Models\Ad','province','name');
    }

    public function leads(){
        return $this->hasManyDeepFromRelations($this->ads(), (new Ad())->leads());
    }

    
}
