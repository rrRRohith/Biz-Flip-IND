<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Ticket extends Model{
    use HasFactory;

    public $appends = ['sender_name', 'date_text'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'subject',
        'priority',
        'status',
        'user_id',
        'ticket_no'
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at'  => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Creator of the ticket
     */
    public function user(){
        return $this->belongsTo(User::class);
    }

    /**
     * Messages of the ticket
     */
    public function messages(){
        return $this->hasMany(TicketMessage::class)->whereNotNull('user_id');
    }

    /**
     * Check if ticket is closed
     */
    public function getSolvedAttribute(){
        return $this->status == 'solved';
    }

    public function getSenderNameAttribute(){
        return $this->user->name;
    }

    public function getDateTextAttribute(){
        return \Carbon\Carbon::parse($this->created_at)->format('h:i a, d M');
    }

    public function scopeSearch($q, Request $request){
        return $q->when($request->q, function($q) use($request){
            return $q->where('subject', 'LIKE', "%{$request->q}%");
        });
    }
}
