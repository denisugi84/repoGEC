<?php

namespace Database\Seeders;

use App\Models\Title;
use Illuminate\Database\Seeder;

class TitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas = [
            ['level' => 'SUPERADMIN', 'nama' => 'Super Admin'],
            ['level' => 'DPD', 'nama' => 'Ketua DPD TA-TH-TX',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD TB',],
            ['level' => 'DPD', 'nama' => 'Wakil Ketua DPD TB',],
            ['level' => 'DPD', 'nama' => 'Sekretaris DPD TB',],
            ['level' => 'DPD', 'nama' => 'Bendahara DPD TB',],
            ['level' => 'DPD', 'nama' => 'HUMAS DPD TB',],
            ['level' => 'DPD', 'nama' => 'Hubungan Industrial & Kajian DPD TB',],
            ['level' => 'DPD', 'nama' => 'Hubungan Industrial & Kajian DPD TB',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TBH',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TBH',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TBH',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TBH ',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TBP',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TBP',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TBP',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TBP',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TBR',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TBR',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TBR',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TBR',],
            ['level' => 'DPC', 'nama' => 'HUMAS DPC TBR',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TBW',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TBW',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TBW',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TBW',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TBS',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TBS',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TBS',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TBS',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TBK',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TBK',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TBK',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TBK',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD TC',],
            ['level' => 'DPD', 'nama' => 'Sekretaris DPD TC',],
            ['level' => 'DPD', 'nama' => 'Bendahara DPD TC',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD Dinas TE',],
            ['level' => 'DPD', 'nama' => 'Sekretaris DPD TE',],
            ['level' => 'DPD', 'nama' => 'Bendahara DPD TE',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD Dinas TM',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD TI-TD-TS-TY',],
            ['level' => 'DPD', 'nama' => 'Sekretaris DPD TI-TD-TS-TY',],
            ['level' => 'DPD', 'nama' => 'Bendahara  DPD TI-TD-TS-TY',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD TJ',],
            ['level' => 'DPD', 'nama' => 'Wakil Ketua DPD TJ',],
            ['level' => 'DPD', 'nama' => 'Sekretaris Jendral DPD TJ',],
            ['level' => 'DPD', 'nama' => 'Sekretaris-1 DPD TJ',],
            ['level' => 'DPD', 'nama' => 'HuMas-1 DPD TJ',],
            ['level' => 'DPD', 'nama' => 'HuMas-2 DPD TJ',],
            ['level' => 'DPD', 'nama' => 'Bendahara-1 DPD TJ',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TJP+TJW',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TJP+TJW',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TJO',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TJO',],
            ['level' => 'DPC', 'nama' => 'Sekretaris  DPC TJO',],
            ['level' => 'DPC', 'nama' => 'Bendahara  DPC TJO',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TJN',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TJN',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TJN',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TJH',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TJH',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TJH',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TJC',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TJC',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TJC',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Bendahara 1 DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Bendahara 2 DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Sekertaris 1 DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Sekertaris 2 DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Humas 1 DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Humas 2 DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Team Advisor DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Team Advisor DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Team Advisor DPC TJK',],
            ['level' => 'DPC', 'nama' => 'Team Advisor DPC TJK',],
            ['level' => 'DPD', 'nama' => 'Ketua DPD TL',],
            ['level' => 'DPD', 'nama' => 'Sekretaris DPD TL',],
            ['level' => 'DPD', 'nama' => 'Bendahara DPD TL',],
            ['level' => 'DPD', 'nama' => 'HUMAS DPD TL',],
            ['level' => 'DPD', 'nama' => 'Koordinator OSA DPD TL',],
            ['level' => 'DPD', 'nama' => 'Koordinator Hanggar DPD TL',],
            ['level' => 'DPD', 'nama' => 'Koordinator HLP & CGK Apron DPD TL',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 1 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 2 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 3 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 4 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 5 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 6 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 7 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Perwakilan 8 DPC TLG',],
            ['level' => 'DPC', 'nama' => 'Ketua DPC TLM',],
            ['level' => 'DPC', 'nama' => 'Wakil Ketua DPC TLM',],
            ['level' => 'DPC', 'nama' => 'Sekretaris DPC TLM',],
            ['level' => 'DPC', 'nama' => 'Bendahara DPC TLM',],
            ['level' => 'DPP', 'nama' => 'Ketua Umum DPP',],
            ['level' => 'DPP', 'nama' => 'Wakil Ketua Umum DPP',],
        ];

        Title::insert($datas);

        // echo $datas[0]['level'];
        
        // for($i = 0; $i < count($datas); $i++)
        // {
        //     echo "error at " .  $i;
        //     $title = new Title;
        //     $title->level = $datas[$i]['level'];
        //     $title->nama = $datas[$i]['nama'];

        //     if($title->save())
        //     {
        //         unset($title);
        //     }
        // }

    }
}
