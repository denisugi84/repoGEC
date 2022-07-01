<?php

namespace Database\Seeders;

use App\Lib\Helper;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\{Unit, Title, Member};

class MemberSeeder extends Seeder
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

        // Init Title
        $titles = Title::query();

        // inactive member
        $inactive_member = [580307, 580362];

        // User Seeder for Admin
        $start = 1;

        for ($i = 580280; $i < 580400; $i++) {


            $titles->where('multiple_member', 'y');
            $titles->orWhereDoesntHave('member');
            $title = $titles->inRandomOrder()->first();

            if (!in_array($i, $inactive_member)) {
                $member = new Member;
                $member->no_anggota = Helper::generateNoAnggota();
                $member->is_active = rand(0, 1) ? 'y' : 'n';
                $member->unit_id = rand(1, 527);
                $member->title_id = $title ? $title->id : null;
                $member->nopeg = $i;
                $member->nama = $faker->name;
                $member->email = $faker->email;
                $member->phone = $faker->phoneNumber;
                $member->tanggal_daftar = $faker->date($format = 'Y-m-d', $max = 'now');
                $member->tanggal_lahir = $faker->date($format = 'Y-m-d', $max = 'now');
                $member->tempat_lahir = $faker->city;
                $member->is_kpk = $i % 4 == 0 ? 'y' : 'n';

                if ($member->save()) {
                    unset($member);
                }
            }
        }
    }
}
