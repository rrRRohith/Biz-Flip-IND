<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class StrongPassword implements Rule
{
    public function passes($attribute, $value)
    {
        return preg_match('/[a-z]/', $value) && 
               preg_match('/[A-Z]/', $value) && 
               preg_match('/[0-9]/', $value) && 
               preg_match('/[@$!%*?&]/', $value) && 
               strlen($value) >= 8;
    }

    public function message()
    {
        return 'The :attribute must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.';
    }
}

