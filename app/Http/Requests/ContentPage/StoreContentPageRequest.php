<?php
namespace App\Http\Requests\ContentPage;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreContentPageRequest extends FormRequest
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
            'title'     => ['required', 'unique:pages,title', 'max:255'],
            'pageContent' => ['required'],
            'seo_title'   => ['nullable'],
            'seo_keywords'   => ['nullable'],
            'seo_description'   => ['nullable'],
            'status' => ['required', Rule::in(['0', '1'])]
        ];
    }
}