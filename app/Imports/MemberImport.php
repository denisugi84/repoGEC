<?php

namespace App\Imports;

use App\Models\Member;
use App\Models\Title;
use App\Models\Unit;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Illuminate\Contracts\Queue\ShouldQueue;

class MemberImport implements ToModel, WithHeadingRow, WithValidation, WithChunkReading, ShouldQueue
{

    public function headingRow(): int
    {
        return 1;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $member = new Member;
        $member->nama = $row['nama'];
        $member->nopeg = $row['nopeg'];
        $member->no_anggota = $row['no_anggota'];
        $member->email = $row['email'];
        $member->tanggal_lahir = $row['tanggal_lahir'];
        $member->unit_id = $this->getUnit($row['dinas'], $row['unit'])->id;
        $member->title_id = $this->getTitle($row['jabatan'])->id;
        $member->nopeg = $row['nopeg'];

        if ($member->save()) {
            return $member;
        }
    }

    public function getUnit($dinas, $unit)
    {
        $dinas = trim($dinas);
        $unit = trim($unit);

        $unit_model = Unit::firstOrNew([
            'dinas' => $dinas,
            'unit' => $unit,
        ]);
        $unit_model->dinas = $dinas;
        $unit_model->unit = $unit;

        if ($unit_model->save()) {
            return $unit_model;
        }
    }

    public function getTitle($title)
    {
        // Expected value : DPD - Ketua
        $arr_title = explode("-", $title);

        $level = trim($arr_title[0]);
        $nama = trim($arr_title[1]);

        $title_model = Title::firstOrNew([
            'level' => $level,
            'nama' => $nama,
        ]);
        $title_model->level = $level;
        $title_model->nama = $nama;

        if ($title_model->save()) {
            return $title_model;
        }
    }

    public function rules(): array
    {
        return [
            'nama' => ['required', 'string'],
            'email' => ['email'],
            'nopeg' => ['required', 'numeric'],
            'no_anggota' => ['required', 'numeric'],
            'tanggal_lahir' => ['date'],
            'unit' => ['required'],
            'dinas' => ['required'],
            // 'nopeg' => ['required', Rule::in(['islam', 'katholik', 'protestan', 'hindu', 'buddha', 'konghucu'])],

        ];
    }

    public function customValidationMessages()
    {
        return [
            // 'tanggal_lahir.date' => 'Format Tanggal Salah. Sesuaikan dengan format yyyy-mm-dd. Contoh: 2001-01-01',
            'nisn.required' => 'NISN harus diisi.',
            'nis.required' => 'NIS harus diisi.',
            'agama.required' => 'Agama harus diisi.',
            'agama.in' => 'Input Agama salah, silahkan isi dengan islam, katholik, protestan, hindu, buddha atau konghucu.',
            // 'alamat.required' => 'Alamat harus diisi.',
            // 'tanggal_lahir.required' => 'Tanggal Lahir harus diisi.',
            // 'tanggal_lahir.required' => 'Tanggal Lahir harus diisi.',
        ];
    }

    public function chunkSize(): int
    {
        return 200;
    }
}
