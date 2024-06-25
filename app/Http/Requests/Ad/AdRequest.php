<?php
namespace App\Http\Requests\Ad;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Factory as ValidationFactory;

class AdRequest extends FormRequest
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
            'images',
            function($attribute, $value, $parameters){
                return count($this->images) + count($this->uploaded_images) >= 3;
            },
            'Please upload atleast 3 images for your ad.'
        );
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $businessCategory = \App\Models\BusinessCategory::find($this->business_category);
        $rules = [
            'title' => 'required|max:256|string',
            'price' => 'required|numeric|min:0',
            'images' => 'array|images',
            'uploaded_images' => 'array',
            'description' => 'required|string',
            'ad_purpose' => 'required|string',
            'property_type' => 'required|string',
            'category' => 'required|exists:categories,id',
            'business_category' => 'required|exists:business_categories,id',
            // 'features' => 'required|array',
            // 'features.*' => 'exists:features,id',
            // 'facilities' => 'required|array',
            // 'facilities.*' => 'exists:facilities,id',
            'address' => 'required|max:256|string',
            'city' => 'required|max:256|string',
            'postalcode' => 'required|max:10|string',
            'province' => 'required|exists:provinces,name',
            'lat' => 'required|max:256|string',
            'lng' => 'required|max:256|string',
            'map_link' => 'required|max:256|string',
            'status' => 'required|in:0,1',
            'has_negotiable' => 'required|in:0,1',
            'has_commission' => 'required|in:0,1',
            'commission' => 'required_if:has_commission,1|nullable|numeric|min:0|max:100',
            'space' => 'required|max:100|string',
            'seo_title' => 'sometimes|nullable|max:256|string',
            'seo_tags' => 'sometimes|nullable|max:256|string',
            'seo_description' => 'sometimes|nullable|max:256|string',
        ];

        if($businessCategory->slug == 'franchise'){
            $rules = array_merge($rules, [
                'territories' => 'required|string',
                'franchising_since' => 'required|string',
                'in_business_since' => 'required|string',
            ]);
        }

        return $rules;
    }
}