<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    use HasFactory;

    public $appends = ['tax_amount', 'total_amount'];

    public function getTaxAmountAttribute(){
        return number_format(0, 2);
    }

    public function getTotalAmountAttribute(){
        return $this->price + $this->tax_amount;
    }
}
