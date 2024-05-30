<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketMessage extends Model{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'attachments',
        'message',
        'ticket_id',
        'user_id',
        'read_at',
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at'  => 'datetime',
        'updated_at' => 'datetime',
        'read_at' => 'datetime',
        'attachments' => 'object'
    ];

    /**
     * Sender of the ticket message
     */
    public function user(){
        return $this->belongsTo(User::class);
    }

    /**
     * Ticket of the ticket message
     */
    public function ticket(){
        return $this->belongsTo(Ticket::class);
    }

    /**
     * Check if message has attachments
     */
    public function getHasAttachmentsAttribute(){
        return $this->attachments ? true : false;
    }
}
