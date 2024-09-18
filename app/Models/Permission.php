<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Permission extends \Spatie\Permission\Models\Permission
{
     use HasFactory;

     public function scopeSeller($q){
          return $q->whereIn('type', ['Common', 'Seller']);
     }

     public function scopeAdmin($q){
          return $q->whereIn('type', ['Common', 'Admin']);
     }
}
