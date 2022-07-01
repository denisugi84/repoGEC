<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class EmailRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->id;

        return [
            'host' => 'required|string',
            'smtp_auth' => 'boolean',
            'username' => 'required|string',
            'password' => 'required|string',
            'smtp_secure' => 'required|string',
            'port' => 'required|numeric',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $error = $validator->errors();

        $response = response()->json([
            'status' => false,
            'message' => "Form can't be processed",
            'data' => $error
        ], 200);
        throw new HttpResponseException($response);
    }

    public function messages() //OPTIONAL
    {
        return [
            'title.required' => 'Judul meeting harus diisi / tidak boleh kosong',
            'location.required' => 'Lokasi meeting ahrus diisi',
            'notulen.required' => 'Notulen meeting harus diisi / tidak boleh kosong',
            'start.required' => 'Tanggal Mulai Meeting harus diisi / tidak boleh kosong',
            'start.date' => 'Tanggal Mulai Meeting harus berformat tanggal',
            'end.date' => 'Tanggal Selesai Meeting harus berformat tanggal',
        ];
    }
}
