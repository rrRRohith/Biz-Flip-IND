<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = ['customer_id', 'seller_id'];

    protected $appends = [
        'contact_name',
        'last_message',
        'last_message_time',
        'contact_image'
    ];

    public function messages(){
        return $this->hasMany(ChatMessage::class);
    }

    public function seller(){
        return $this->belongsTo(User::class);
    }

    public function customer(){
        return $this->belongsTo(User::class);
    }

    public function getContactNameAttribute(){
        if($this->seller_id == auth()->user()->id){
            $this->customer->name;
        }else{
            return $this->seller->name;
        }
    }

    public function getContactImageAttribute(){
        if($this->seller_id == auth()->user()->id){
            $this->customer->picture_url;
        }else{
            return $this->seller->picture_url;
        }
    }

    public function getLastMessageAttribute(){
        if ($this->messages()->exists()) {
            return $this->messages()->latest()->first()->message ?? null;
        }
        
    }

    public function getLastMessageTimeAttribute(){
        if ($this->messages()->exists()) {
            return $this->messages()->exists() ? $this->messages()->latest()->first()->created_at->diffForHumans() : null;
        }
    }
}
