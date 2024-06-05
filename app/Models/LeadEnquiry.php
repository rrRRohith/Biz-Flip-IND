<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class LeadEnquiry extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = ['status', 'attender_id'];

    public function ad(){
        return $this->belongsTo(Ad::class, 'ad_id', 'id');
    }

    public function attender(){
        return $this->belongsTo(User::class, 'attender_id', 'id');
    }
}
