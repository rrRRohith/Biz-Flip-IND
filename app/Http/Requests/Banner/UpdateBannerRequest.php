<?php
namespace App\Http\Requests\Banner;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBannerRequest extends FormRequest
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
            "redirection" => ['required'],
            "type" => ['required'],
            "new_window" => ['nullable'],
            "picture_desktop" => ['nullable', 'image'],
            "picture_mobile" => ['nullable', 'image'],
            "position" => ['required','integer'],
            'status' => ['required', Rule::in(['0', '1'])]
        ];
    }
}