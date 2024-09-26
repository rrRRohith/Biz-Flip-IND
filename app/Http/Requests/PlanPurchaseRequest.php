<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\{CreditCardDate};

class PlanPurchaseRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', 'digits:10'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255'],
            'city' => 'required|max:256|string',
            'postalcode' => 'required|max:10|string',
            'province' => 'required|exists:provinces,name',
            // 'card_name' => 'required|string',
            // 'card_date' => ['required', 'regex:/\d{2}\/\d{2}/', new CreditCardDate],
            // 'card_cvv' => 'required|digits_between:3,4',
            // 'card_number' => ['bail','required','digits_between:14,16'],
        ];

        if($this->plan->default != '1'){
            $rules = array_merge($rules, [
                'card_name' => 'required|string',
                'card_date' => ['required', 'regex:/\d{2}\/\d{2}/', new CreditCardDate],
                'card_cvv' => 'required|digits_between:3,4',
                'card_number' => ['bail','required','digits_between:14,16'],
            ]);
        }

        return $rules;
    }
}
