<?php

namespace App\Http\Requests\Vendor;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VenderStoreRequest extends FormRequest
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
            'email'         => ['required'],
            'phone'         => ['required'],
            'address'       => ['required'],
            'postal_code'   => ['required'],
            'city'          => ['required'],
            'province'      => ['required'],
            'country'       => ['required'],
            'dob'           => ['required'],
            'company_name'  => ['required'],
            'address'       => ['required'],
            'company_email' => ['required'],
            'company_phone' => ['required'],
        ];
    }
}


