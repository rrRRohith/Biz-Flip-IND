<?php
namespace App\Http\Requests\AdPurpose;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAdPurposeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => ['required', 'max:255'],
            'image' => ['nullable', 'image'],
            "position" => ['integer'],
            'status' => ['required', Rule::in(['0', '1'])]
        ];
    }
}