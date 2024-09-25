<?php

namespace App\Http\Requests;

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
            'picture' => ['nullable', 'image'],
            'company_name' => ['required', 'string', 'max:255'],
            // 'firstname' => ['required', 'string', 'max:255'],
            // 'lastname' => ['required', 'string', 'max:255'],
            //'short_description' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'employee' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'phone' => ['required', 'numeric', 'digits:10'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255'],
            'website' => ['sometimes', 'nullable', 'string'],
            'days' => 'sometimes|nullable|array',
            'address' => 'required|max:256|string',
            'city' => 'required|max:256|string',
            'postalcode' => 'required|max:10|string',
            'province' => 'required|exists:provinces,name',
            'lat' => 'required|max:256|string',
            'lng' => 'required|max:256|string',
            'established' => 'required|digits:4',
        ];
    }
}
