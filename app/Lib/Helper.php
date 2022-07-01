<?php

namespace App\Lib;

use App\Models\Member;

class Helper {

    public static function generateNoAnggota() {
        $next_no = Member::whereYear('created_at', date('Y'))->count();
        $next_no += 1;

        $no_anggota = date('y').sprintf("%04d", $next_no);

        return (int) $no_anggota;
    }

}