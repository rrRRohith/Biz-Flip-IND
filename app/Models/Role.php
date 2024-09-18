<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Spatie\Permission\Traits\HasPermissions;
use Illuminate\Http\Request;

class Role extends \Spatie\Permission\Models\Role
{
     use HasFactory;

    public function scopeSearch($q, Request $request){
        return $q->when($request->q, function($q) use($request){
            return $q->where('name', 'LIKE', "%{$request->q}%");
        });
    }
     
}
