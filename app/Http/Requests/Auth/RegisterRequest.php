<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request as httpRequest;
use Illuminate\Validation\Factory as ValidationFactory;
use App\Models\User;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest
{

    public function failedValidation(Validator $validator){
        if($this->ajax()){
            throw new HttpResponseException(response()->json([
                'success'   => false,
                'message'   => 'Opps, there are some problems.',
                'data'      => $validator->errors()
            ], 422));
        }
        parent::failedValidation($validator);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {

        if($this->accountType == 'individual'){
            return [
                'password' => 'required|confirmed|min:6',
                'agree_terms_and_conditions' => 'required',
                'firstname' => ['required', 'string', 'max:255'],
                'lastname' => ['required', 'string', 'max:255'],
                'phone' => ['required', 'numeric', 'digits:10','unique:users,phone'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)],
                'captcha' => !env('CAPTCHA_VALIDATION_DISABLE') ? 'required|captcha' : 'nullable|sometimes',
                'password_confirmation' => 'required'
            ];
        }
        else if($this->accountType == 'agent'){
            return [
                'company_name' => ['nullable', 'string', 'max:255'],
                'description' => ['nullable', 'string'],
                'address' => 'nullable|max:256|string',
                'city' => 'nullable|max:256|string',
                'postalcode' => 'nullable|max:10|string',
                'province' => 'nullable|exists:provinces,name',
                'password' => 'required|confirmed|min:6',
                'agree_terms_and_conditions' => 'required',
                'firstname' => ['required', 'string', 'max:255'],
                'lastname' => ['required', 'string', 'max:255'],
                'phone' => ['required', 'numeric', 'digits:10','unique:users,phone'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)],
                'captcha' => !env('CAPTCHA_VALIDATION_DISABLE') ? 'required|captcha' : 'nullable|sometimes',
                'password_confirmation' => 'required'
            ];
        }
        else{
            dd('Invalid Attempt');
        }
       
    }

    public function messages() :array{
        return [
            'agree_terms_and_conditions.required' => 'You must accept terms and conditions',
            'captcha.required' => 'please enter valid code',
            'captcha.captcha' => 'captcha code invalid, refresh captcha'
        ];
    }


    public function getValidatorInstance(){
        $this->merge([
            'phone' => str_replace('-','',filter_var($this->phone, FILTER_SANITIZE_NUMBER_INT)),
        ]);
        return parent::getValidatorInstance();
    }
}
