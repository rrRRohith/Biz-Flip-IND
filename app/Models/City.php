<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class City extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

    function province(){
        return  $this->belongsTo(Province::class);
    }

    public function ads(){
        return $this->hasMany('App\Models\Ad','city','name');
    }

    public function leads(){
        return $this->hasManyDeepFromRelations($this->ads(), (new Ad())->leads());
    }


    
}
