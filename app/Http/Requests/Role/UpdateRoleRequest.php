<?php
namespace App\Http\Requests\Role;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Factory as ValidationFactory;

class UpdateRoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function __construct(ValidationFactory $validationFactory){
        $validationFactory->extend(
            'roleName',
            function($attribute, $value, $parameters){
                return !\App\Models\Role::whereName($this->name)->whereUserId(auth()->user()->id)
                ->whereNot('id', $this->role->id ?? null)->exists();
            },
            'This role is already exists, please use different one.'
        );
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                "required",
                "max:64",
                'string',
                "roleName"
            ],
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,id',
        ];
    }
}