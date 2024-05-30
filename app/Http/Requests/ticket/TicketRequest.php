<?php

namespace App\Http\Requests\ticket;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request as httpRequest;
use Illuminate\Validation\Factory as ValidationFactory;

class TicketRequest extends FormRequest{
    
        /**
         * Get the validation rules that apply to the request.
         *
         * @return array<string, mixed>
         */
        public function rules() : array{
            return [
                'subject' => 'required|max:128|string|min:8',
                'priority' => 'required|in:low,medium,high',
                'message' => 'required|string|min:50',
                'attachments' => 'sometimes|nullable|array',
                'attachments.*' => 'file|mimes:doc,docx,pdf,png,jpg,webp|max:4096',
            ];
        }
    }
    