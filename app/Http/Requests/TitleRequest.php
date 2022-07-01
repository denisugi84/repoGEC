<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class TitleRequest extends FormRequest
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
            'nama' => 'required',
            'level' => 'required',
            'multiple_member' => 'required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $error = $validator->errors();
        
        $response = response()->json([
            'status' => false,
            'message' => "Periksa kembali Form",
            'data' => $error
        ], 200);
        throw new HttpResponseException($response);
    }

    public function messages() //OPTIONAL
    {
        return [
            'nama.required' => 'Nama Jabatan harus diisi / tidak boleh kosong',
            'level.required' => 'Level Jabatan harus diisi / tidak boleh kosong',
            'multiple_member' => 'Opsi Multiple Member harus diisi / tidak boleh kosong',
        ];
    }

}
