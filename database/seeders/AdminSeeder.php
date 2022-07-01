<?php

namespace Database\Seeders;

use App\Lib\Helper;
use App\Models\Member;
use App\Models\Title;
use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Init Faker
        $faker = Faker::create('id_ID');
        //
        $user = new User;
        $user->username = 'admin';
        // $user->user_type = 'admin';
        $user->password = bcrypt('gec2022@');
        if($user->save())
        {
            $member = new Member;
            $member->no_anggota = Helper::generateNoAnggota();
            $member->user_id = $user->id;
            $member->is_active = rand(0, 1) ? 'y' : 'n';
            $member->unit_id = rand(1, 527);
            $member->title_id = Title::where('level', 'SUPERADMIN')->first()->id;
            $member->nopeg = 10001;
            $member->nama = $faker->name;
            $member->email = $faker->email;
            $member->phone = $faker->phoneNumber;
            $member->tanggal_daftar = $faker->date($format = 'Y-m-d', $max = 'now');
            $member->tanggal_lahir = $faker->date($format = 'Y-m-d', $max = 'now');
            $member->tempat_lahir = $faker->city;

            if($member->save())
            {
                unset($member);
            }
        }
    }
}
