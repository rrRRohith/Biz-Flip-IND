<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    public function messages(){
        return $this->hasMany(ChatMessage::class);
    }

    public function seller(){
        return $this->belongsTo(User::class);
    }

    public function customer(){
        return $this->belongsTo(User::class);
    }

    public function getSenderNameAttribute(){
        if($this->seller_id == auth()->user()->id){
            $this->customer->name;
        }else{
            return $this->seller->name;
        }
    }
}
