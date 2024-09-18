<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdFranchise extends Model
{
    use HasFactory;

    protected $fillable = [
        'ad_id',
        'canadian_units',
        'us_units',
        'international_units',
        'corporate_units',
        'franchise_fee',
        'liquid_capital',
        'total_investment',
        'in_business_since',
        'franchising_since',
        'territories',
    ];
    
}
