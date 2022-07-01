<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UnitRequest extends FormRequest
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
            'unit' => 'required|unique:units,unit,'.$id,
            'dinas' => 'required',
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
            'unit.required' => 'Nama Unit harus diisi atau tidak boleh kosong',
            'unit.unique' => 'Nama Unit sudah digunakan',
            'dinas.required' => 'Nama Dinas harus diisi atau tidak boleh kosong',
        ];
    }

}
