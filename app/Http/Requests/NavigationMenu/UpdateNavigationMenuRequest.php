<?php
namespace App\Http\Requests\NavigationMenu;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateNavigationMenuRequest extends FormRequest
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
            'title' => 'required',
            // 'items' => 'array',
            // 'items.*.linkText' => 'required',
            // 'items.*.linkType' => 'required',
            // 'items.*.customLink' => 'nullable',
            // 'items.*.children' => 'array',
        ];


    }

    // public function messages()
    // {
    //     return [
    //         'items.*.linkText.required' => 'Link text is required',
    //         'items.*.linkType.required' => 'Link type is required'
    //     ];

        
    // }
}