<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class NavigationMenu extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    public function childs(){
        return $this->hasMany(self::class, 'parent_id', 'id');
    }
}
