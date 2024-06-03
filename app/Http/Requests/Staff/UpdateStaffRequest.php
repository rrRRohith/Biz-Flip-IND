<?php
namespace App\Http\Requests\Staff;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Factory as ValidationFactory;

class UpdateStaffRequest extends FormRequest
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
            'password' => 'sometimes|nullable|same:confirm_password',
            'picture' => ['nullable', 'image'],
            'confirm_password' => 'sometimes|nullable',
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', 'digits:10'],
            'role_id' => 'sometimes|nullable|exists:roles,id',
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(\App\Models\User::class)->ignore($this->staff->id ?? null)],
        ];
    }
}