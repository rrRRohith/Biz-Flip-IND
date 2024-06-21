<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class NavigationMenu extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'title', 'slug', 'parent_id', 'link', 'position', 'custom_link', 'status'
    ];

    public function childs(){
        return $this->hasMany(self::class, 'parent_id', 'id');
    }

    public function children()
    {
        return $this->hasMany(NavigationMenu::class, 'parent_id', 'id');
    }
}
