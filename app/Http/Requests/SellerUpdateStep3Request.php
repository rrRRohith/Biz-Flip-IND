<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SellerUpdateStep3Request extends FormRequest
{
    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator){
        // Set the session values
        session(['forceAgentForm' => true, 'agentFormShown' => false]);

        // Handle the failed validation
        throw new \Illuminate\Http\Exceptions\HttpResponseException(
            redirect()->back()
                ->withErrors($validator)
                ->withInput()
        );
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            // 'picture' => ['nullable', 'image'],
            // 'company_name' => ['required', 'string', 'max:255'],
            // 'firstname' => ['required', 'string', 'max:255'],
            // 'lastname' => ['required', 'string', 'max:255'],
            //'short_description' => ['required', 'string', 'max:255'],
            // 'address' => ['required', 'string', 'max:255'],
            // 'employee' => ['required', 'string', 'max:255'],
            // 'description' => ['required', 'string'],
            // 'phone' => ['required', 'numeric', 'digits:10'],
            // 'email' => ['required', 'string', 'lowercase', 'email', 'max:255'],
            // 'website' => ['sometimes', 'nullable', 'string'],
            // 'days' => 'sometimes|nullable|array',
            // 'address' => 'required|max:256|string',
            // 'city' => 'required|max:256|string',
            // 'postalcode' => 'required|max:10|string',
            // 'province' => 'required|exists:provinces,name',
            // 'location.lat' => 'sometimes|nullable|max:256|string',
            // 'location.lng' => 'sometimes|nullable|max:256|string',
            // 'established' => 'required|digits:4',
        ];
        
    }

    // public function getValidatorInstance(){
    //     $this->merge([
    //         'phone' => str_replace('-','',filter_var($this->phone, FILTER_SANITIZE_NUMBER_INT)),
    //     ]);
    //     return parent::getValidatorInstance();
    // }
}
