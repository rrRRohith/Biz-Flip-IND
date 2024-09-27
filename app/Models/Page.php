<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Page extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    public function banner(){
        return $this->belongsTo(Banner::class);
    }

    public function getBannerImageUrlAttribute(){
        return $this->banner ? image_url($this->banner->picture_desktop) : null;
    }
}
