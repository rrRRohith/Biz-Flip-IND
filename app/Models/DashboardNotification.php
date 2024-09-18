<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class DashboardNotification extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];



    protected $fillable = [
        'sender_id',
        'recipient_id',
        'subject',
        'message',
        'redirection',
        'read_at',
        'status',
    ];
    
}
