<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CompanySettings extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    public function social_settings(){
      
            return  $this->belongsTo(SocailLink::class);
        
    }

  
}
