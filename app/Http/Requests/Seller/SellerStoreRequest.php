<?php

namespace App\Http\Requests\Seller;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SellerStoreRequest extends FormRequest
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
            'email'         => ['required','email','max:255',Rule::unique('users'),'email'],
            'phone'         => ['required','max:10','unique:users,phone'],
            'address'       => ['nullable'],
            'password'      => ['required','min:8'],
            'postalcode'    => ['nullable'],
            'city'          => ['nullable'],
            'province'      => ['nullable'],

        ];
    }
}


