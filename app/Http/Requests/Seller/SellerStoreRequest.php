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
            'phone'         => ['required','max:10'],
            'address'       => ['required'],
            'postalcode'    => ['required'],
            'city'          => ['required'],
            'province'      => ['required'],
            'company_name'  => ['required'],
            'full_address'  => ['required'],
            'company_email' => ['required','email'],
            'company_phone' => ['required','max:10'],
            'position'      => ['required'],

        ];
    }
}


