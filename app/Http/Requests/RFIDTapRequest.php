<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class RFIDTapRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'rfid' => 'required|string',
        ];
    }
    public function failedValidation(Validator $validator)
    {

        $error = $validator->errors();

        $response = response()->json([
            'status' => false,
            'message' => "RFID harus diisi.",
            'data' => $error
        ], 422);
        throw new HttpResponseException($response);
    }
    public function messages() //OPTIONAL
    {
        return [
            'rfid.required' => 'RFID tidak boleh kosong !',
            'rfid.string' => 'RFID tidak valid !',
        ];
    }
}
