<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //'password' => ['sometimes', 'nullable', 'same:confirm_password', new \App\Rules\StrongPassword],
            'picture' => ['nullable', 'image'],
            //'confirm_password' => 'sometimes|nullable',
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            //'address' => 'required|max:256|string',
            //'city' => 'required|max:256|string',
            //'postalcode' => 'required|max:10|string',
            //'province' => 'required|exists:provinces,name',
            //'phone' => ['required', 'numeric', 'digits:10'],
            //'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }
}
