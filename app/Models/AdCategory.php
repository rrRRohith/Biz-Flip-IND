<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;
class AdCategory extends Pivot{
    //Nothing here
    protected $table = 'ad_categories';
}
