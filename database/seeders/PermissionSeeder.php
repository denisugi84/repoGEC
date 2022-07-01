<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Permission;
use App\Models\Title;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions_data = [
            [
                'group' => 'dashboard',
                'description' => 'Permission yang mengizinkan untuk mengakses Dashboard',
                'slug' => 'dashboard',
                'name' => 'Dashboard'
            ],
            [
                'group' => 'profile',
                'description' => 'Permission yang mengizinkan untuk mengakses menu Profil Pengguna',
                'slug' => 'profile',
                'name' => 'Profile'
            ],
            // Title
            [
                'group' => 'jabatan',
                'description' => 'Permission yang mengizinkan untuk mengakses Data Jabatan',
                'slug' => 'title-index',
                'name' => 'Data Jabatan',
            ],
            [
                'group' => 'jabatan',
                'description' => 'Permission yang mengizinkan untuk mengakses Detail Jabatan',
                'slug' => 'title-detail',
                'name' => 'Detail Jabatan'
            ],
            [
                'group' => 'jabatan',
                'description' => 'Permission yang mengizinkan untuk mengakses menambahkan Jabatan',
                'slug' => 'title-add',
                'name' => 'Tambah Jabatan'
            ],
            [
                'group' => 'jabatan',
                'description' => 'Permission yang mengizinkan untuk mengakses mengedit Jabatan',
                'slug' => 'title-edit',
                'name' => 'Edit Jabatan'
            ],
            [
                'group' => 'jabatan',
                'description' => 'Permission yang mengizinkan untuk mengakses menghapus Jabatan',
                'slug' => 'title-delete',
                'name' => 'Hapus Jabbatan'
            ],
            // End Title

            // meeting
            [
                'group' => 'meeting',
                'description' => 'Permission yang mengizinkan untuk mengakses Data meeting',
                'slug' => 'meeting-index',
                'name' => 'Data meeting',
            ],
            [
                'group' => 'meeting',
                'description' => 'Permission yang mengizinkan untuk mengakses Detail Meeting',
                'slug' => 'meeting-detail',
                'name' => 'Detail meeting'
            ],
            [
                'group' => 'meeting',
                'description' => 'Permission yang mengizinkan untuk mengakses menambahkan meeting',
                'slug' => 'meeting-add',
                'name' => 'Tambah meeting'
            ],
            [
                'group' => 'meeting',
                'description' => 'Permission yang mengizinkan untuk mengakses mengedit meeting',
                'slug' => 'meeting-edit',
                'name' => 'Edit meeting'
            ],
            [
                'group' => 'meeting',
                'description' => 'Permission yang mengizinkan untuk mengakses menghapus meeting',
                'slug' => 'meeting-delete',
                'name' => 'Hapus meeting'
            ],
            [
                'group' => 'meeting',
                'description' => 'Permission yang mengizinkan untuk mengakses Report Meeting',
                'slug' => 'meeting-report',
                'name' => 'Report Meeting'
            ],
            // End meeting

            // Unit
            [
                'group' => 'unit',
                'description' => 'Permission yang mengizinkan untuk mengakses Data Unit',
                'slug' => 'unit-index',
                'name' => 'Data Unit',
            ],
            [
                'group' => 'unit',
                'description' => 'Permission yang mengizinkan untuk mengakses Detail Unit',
                'slug' => 'unit-detail',
                'name' => 'Detail Unit'
            ],
            [
                'group' => 'unit',
                'description' => 'Permission yang mengizinkan untuk mengakses menambahkan Unit',
                'slug' => 'unit-add',
                'name' => 'Tambah Unit'
            ],
            [
                'group' => 'unit',
                'description' => 'Permission yang mengizinkan untuk mengakses mengedit Unit',
                'slug' => 'unit-edit',
                'name' => 'Edit Unit'
            ],
            [
                'group' => 'unit',
                'description' => 'Permission yang mengizinkan untuk mengakses menghapus Unit',
                'slug' => 'unit-delete',
                'name' => 'Hapus Unit'
            ],
            // End Unit

            // Member
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengakses Data Member',
                'slug' => 'member-index',
                'name' => 'Data Member',
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengakses Detail Member',
                'slug' => 'member-detail',
                'name' => 'Detail Member'
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengakses menambahkan Member',
                'slug' => 'member-add',
                'name' => 'Tambah Member'
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengakses mengedit Member',
                'slug' => 'member-edit',
                'name' => 'Edit Member'
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengakses menghapus Member',
                'slug' => 'member-delete',
                'name' => 'Hapus Member'
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengganti Login Member',
                'slug' => 'member-login',
                'name' => 'Login Member'
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk mengganti Status Member',
                'slug' => 'member-status',
                'name' => 'Status Member'
            ],
            [
                'group' => 'member',
                'description' => 'Permission yang mengizinkan untuk melakukan Approval Member (Member yang melakukan Pendaftaran)',
                'slug' => 'member-approval',
                'name' => 'Approval Member'
            ],
            // End Member

            // setting
            [
                'group' => 'setting',
                'description' => 'Permission yang mengizinkan untuk melakukan Pengaturan E-Mail / SMTP Account',
                'slug' => 'setting-email',
                'name' => 'Setting E-Mail',
            ],
            // End setting
        ];

        Permission::insert($permissions_data);

        $title = Title::where('level', 'SUPERADMIN')->first();

        $title->permission()->attach(Permission::get());
    }
}
