<template>
    <div>
        <div class="row">
            <div class="col-md-9">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-2" v-for="(gp, index) in grouped_permission" :key="index">
                        <div class="card h-100 shadow">
                            <div class="card-header">
                                <h4>{{ gp.name }} ({{ gp.children.length }})</h4>
                            </div>
                            <div class="card-body">
                                <div v-for="p in gp.children" :key="p.id">
                                    <div class="form-check">
                                        <input class="form-check-input" v-bind:value="p.id" type="checkbox"
                                            :id="'permission-'+p.id" v-model="selected_permission">
                                        <label class="form-check-label" :for="'permission-'+p.id"
                                            data-bs-toggle="tooltip" :title="p.description">
                                            {{ p.name }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                
                <div class="alert alert-warning" role="alert">
                    <h4 class="alert-heading"><i class="fa fa-exclamation-triangle"></i> Instruksi</h4>
                    <div class="alert-body">
                        <ul class="warning-list">
                            <li>Silahkan Pilih Akses yang dibutuhkan untuk Jabatan yang dipilih</li>
                            <li>Geser cursor Anda diatas Hak akses untuk melihat deskripisi</li>
                            <li>Tekan tombol Simpan Perubahan dibawah ini untuk menyimpan Hak Akses pada Jabatan</li>
                        </ul>
                    </div>
                </div>

                <div class="d-grid gap-1">
                    <button class="btn btn-primary" @click="savePermission" type="button"><i class="fa fa-check"></i> Simpan Perubahan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import permission_group from "@/pages/permission/data";

export default {

    props: [
        'title',
    ],

    data: () => ({
        permissions: [],
        grouped_permission: [],

        selected_permission: [],
    }),

    
    mounted() {
        this.getPermission();
        this.getAttachedPermission();
    },

    methods: {
        getPermission: function() {
            axios.get('/api/permission')
            .then( res => {
                this.permissions = res.data;
                let permissions = res.data;

                let category = permission_group;

                category.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });

                for (let i = 0; i < category.length; i++) {
                    let details = {
                        name: category[i].name,
                        children: permissions.filter(function (cat) {
                            console.log(cat);
                            return cat.group == category[i].group;
                        })
                    }
                    this.grouped_permission.push(details)
                }

            })
        },

        getAttachedPermission: function() {
            axios.get(`/api/title/${this.$route.params.title_id}/get_permission`)
            .then(res => {
                this.selected_permission = res.data;
            })
        },

        savePermission: function() {


            swal({
                title: `Anda akan memasang ${this.selected_permission.length} akses pada jabatan ${this.title.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) => {
                if (value) {
                    $.LoadingOverlay('show');
                    axios.put(`/api/title/${this.$route.params.title_id}/update_permission`, {
                        permission_id: this.selected_permission,
                    })
                    .then(res => {
                        if (res.data.status == true) {
                            toastr.success(res.data.message);
                        } else if (res.data.status == false) {
                            toastr.warning(res.data.message, "Ooppss!");
                            this.getAttachedPermission();
                        }
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
                    .then(res => {
                        $.LoadingOverlay('hide');
                    });
                }
            });
            
            
        },
    }
}
</script>

<style>

</style>