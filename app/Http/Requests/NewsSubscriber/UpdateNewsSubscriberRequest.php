<?php
namespace App\Http\Requests\NewsSubscriber;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateNewsSubscriberRequest extends FormRequest
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
            "firstname" => ['required', 'max:255'],
            "lastname" => ['required', 'max:255'],
            "email_id" => ['required', 'max:255', Rule::unique('news_subscribers')->ignore($this->route('subscriber'))],
            // "type_of_needed" => ['required', 'max:255'],
            'status' => ['required', Rule::in(['0', '1'])]
        ];
    }
}