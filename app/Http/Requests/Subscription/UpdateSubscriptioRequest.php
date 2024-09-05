<?php

namespace App\Http\Requests\Subscription;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateSubscriptioRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'          => ['required'],
            'description'   => ['required'],
            'features'      => ['required'],
            'price'         => ['required','max:10'],
            'duration'      => ['required'],
            'ads'           => ['required'],
        ];
    }
}
