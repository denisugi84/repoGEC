<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nama' => 'required|string',
            'nopeg' => 'required|numeric|unique:members,nopeg|min:5',
            'email' => 'unique:members,email|email',
            'password' => 'string|min:8|confirmed',
            'dinas' => 'required',
            'unit' => 'required',
        ];
    }
    public function failedValidation(Validator $validator)
    {

        $error = $validator->errors();

        $response = response()->json([
            'status' => false,
            'message' => "Periksa kembali form input Anda.",
            'data' => $error
        ], 200);
        throw new HttpResponseException($response);
    }
    public function messages() //OPTIONAL
    {
        return [
            'name.required' => 'Nama tidak boleh kosong !',
            'name.string' => 'Nama tidak valid !',
            'nopeg.required' => 'Nomor Pegawai tidak boleh kosong !',
            'nopeg.unique' => 'Nomor Pegawai sudah digunakan !',
            'email.required' => 'Email tidak boleh kosong !',
            'email.email' => 'Email tidak valid !',
            'email.unique' => 'Email sudah terdaftar !',
            'unit.required' => 'Unit tidak boleh kosong !',
            'dinas.required' => 'Dinas tidak valid !',
        ];
    }
}
