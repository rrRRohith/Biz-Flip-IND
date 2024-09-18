<?php
namespace App\Http\Requests\Testimonial;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreTestimonialRequest extends FormRequest
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
            "name" => ['required', 'max:255'],
            "designation" => ['required', 'max:255'],
            "message" => ['required', 'max:255'],
            'image' => ['nullable', 'image'],
            "position" => ['integer'],
            'status' => ['required', Rule::in(['0', '1'])]
        ];
    }
}