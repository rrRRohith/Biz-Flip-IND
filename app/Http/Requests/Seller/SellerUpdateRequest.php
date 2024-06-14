<?php

namespace App\Http\Requests\Seller;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SellerUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
           
            'firstname'     => ['required'],
            'lastname'      => ['required'],
            'email'         => ['required','email','max:255'],
            'phone'         => ['required','max:10'],
            'address'       => ['required'],
            'postalcode'    => ['required'],
            'city'          => ['required'],
            'province'      => ['required'],
        ];
    }
}


