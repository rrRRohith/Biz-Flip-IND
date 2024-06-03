<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Spatie\Permission\Traits\HasPermissions;
class Role extends \Spatie\Permission\Models\Role
{
     use HasFactory;

     public function scopeSearch($q){
          $request = request();
          return $q->when($request->q, fn($q) => $q->where('name', 'LIKE', "%{$request->q}%"));
     }
}
