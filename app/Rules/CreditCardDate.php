<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Carbon\Carbon;

class CreditCardDate implements Rule{
    public function passes($attribute, $value){
        // Parse the provided expiration date
        try{
            $expirationDate = Carbon::createFromFormat('m/y', $value);

            // Compare the parsed expiration date with the current date
            return $expirationDate->isFuture();
        }catch(\Exception $e){}
        
    }

    public function message(){
        return 'This card is expired';
    }
}