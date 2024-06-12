<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request as httpRequest;
use Illuminate\Validation\Factory as ValidationFactory;

class SubscribeRequest extends FormRequest{

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
     * @return array<string, mixed>
     */
    public function rules(){
        return [
            'email_id' => 'required|email|unique:news_subscribers,email_id',
        ];
    }

    public function messages(){
        return [
            'email_id.unique' => 'This email address is already subscribed.',
        ];
    }
}


