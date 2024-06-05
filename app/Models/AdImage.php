<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class AdImage extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $appends = ['image_url'];

    protected $fillable = [
        'image',
        'type'
    ];

    public function getImageUrlAttribute(){
        return asset('images/'.$this->image);
    }
}
