<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class LoginRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|min:4',
            'password' => 'required|min:4',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $response = $validator->errors()->all();

        throw new HttpResponseException(response()->json($response, 422));
    }

    public function messages() //OPTIONAL
    {
        return [];
    }
}
