<template>
    <div>
        <form @submit.prevent="proceedData">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="rfid">RFID Card / Code<br><i><small>Klik form RFID dan lakukan Scan Kartu RFID untuk mengisi secara otomatis</small></i></label>
                                        <input type="text" autofocus class="form-control" id="rfid" v-model="form.rfid">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="no_anggota">Nomor Anggota</label>
                                        <input type="text" disabled class="form-control" id="no_anggota" v-model="form.no_anggota">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="nopeg">Nomor Pegawai <Required /></label>
                                        <input
                                            id="nopeg"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.nopeg) && (error_validation.nopeg.length > 0) ,
                                                'is-valid' : !error_validation.nopeg && this.submitted == true
                                            }"
                                            type="number"
                                            v-model="form.nopeg"
                                            placeholder="Nomor Pegawai"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.nopeg" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="nama">Nama Lengkap
                                        <Required /></label>
                                        <input
                                            id="nama"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.nama) && (error_validation.nama.length > 0),
                                                'is-valid' : !error_validation.nama && this.submitted == true 
                                            }"
                                            type="text"
                                            v-model="form.nama"
                                            placeholder="Type Member's Full Name"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.nama" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="dinas">Dinas <Required /></label>
                                        <multiselect 
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.dinas) && (error_validation.dinas.length > 0),
                                                'is-valid' : !error_validation.dinas && this.submitted == true 
                                            }"
                                            v-model="form.dinas" 
                                            :options="selection.dinas"
                                            @input="dinasOnChange"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.dinas" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="unit">Unit <Required /></label>
                                        <multiselect 
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.unit) && (error_validation.unit.length > 0),
                                                'is-valid' : !error_validation.unit && this.submitted == true
                                            }"
                                            v-model="form.unit" 
                                            :options="selection.units"
                                            :custom-label="unitLabel"    
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.unit" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="title">Jabatan</label>
                                        <multiselect 
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.title) && (error_validation.title.length > 0),
                                                'is-valid' : !error_validation.title && this.submitted == true
                                            }"
                                            v-model="form.title" 
                                            :options="selection.titles"
                                            :custom-label="titleLabel"    
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.title" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="tanggal_daftar">Tanggal Daftar</label>
                                        <input
                                            id="tanggal_daftar"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.tanggal_daftar) && (error_validation.tanggal_daftar.length > 0) ,
                                                'is-valid' : !error_validation.tanggal_daftar && this.submitted == true
                                            }"
                                            type="date"
                                            v-model="form.tanggal_daftar"
                                            placeholder="Tanggal Daftar"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.tanggal_daftar" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone">No. Telephone</label>
                                        <input
                                            id="phone"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.phone) && (error_validation.phone.length > 0) ,
                                                'is-valid' : !error_validation.phone && this.submitted == true
                                            }"
                                            type="text"
                                            v-model="form.phone"
                                            placeholder="Contoh: 08121xxxx"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.phone" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email">Alamat Email</label>
                                        <input
                                            id="email"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.email) && (error_validation.email.length > 0),
                                                'is-valid' : !error_validation.email && this.submitted == true 
                                            }"
                                            type="email"
                                            v-model="form.email"
                                            placeholder="Email Address"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.email" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="tempat_lahir">Tempat Lahir</label>
                                        <input
                                            id="tempat_lahir"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.tempat_lahir) && (error_validation.noptempat_lahireg.length > 0),
                                                'is-valid' : !error_validation.tempat_lahir && this.submitted == true
                                            }"
                                            type="text"
                                            v-model="form.tempat_lahir"
                                            placeholder="Tempat Lahir"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.tempat_lahir" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="tanggal_lahir">Tanggal Lahir</label>
                                        <input
                                            id="tanggal_lahir"
                                            class="form-control"
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.tanggal_lahir) && (error_validation.tanggal_lahir.length > 0) ,
                                                'is-valid' : !error_validation.tanggal_lahir && this.submitted == true
                                            }"
                                            type="date"
                                            v-model="form.tanggal_lahir"
                                            placeholder="Tanggal Lahir"
                                        />
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.tanggal_lahir" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="is_kpk">Anggota KPK</label>
                                        <div class="demo-inline-spacing">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="is_kpk_n" value="n" v-model="form.is_kpk">
                                                <label class="form-check-label" for="is_kpk_n">Tidak</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="is_kpk_y" value="y" v-model="form.is_kpk">
                                                <label class="form-check-label" for="is_kpk_y">Ya</label>
                                            </div>
                                        </div>
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.tanggal_lahir" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                        <!-- <div class="invalid-feedback" v-if="error_validation.unit && error_validation.unit.length > 0">{{ error_validation.unit[0] }}</div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="alert alert-warning" role="alert">
                        <h4 class="alert-heading"><i class="fa fa-exclamation-triangle"></i> Instruction</h4>
                        <div class="alert-body">
                            <ul class="warning-list">
                                <li>Form with <Required /> is should be filled / can't let blank</li>
                                <li>Please fill form with correct data and do it with your own responsibility</li>
                                <li>Click Save button below this after you finished filled all necessary form</li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-grid gap-1">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-check"></i> Save Data</button>
                        <button class="btn btn-warning" @click="resetForm" type="button"><i class="fa fa-refresh"></i> Reset Form</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import Multiselect from 'vue-multiselect'

import member_format from "@/pages/member/components/member";

export default {
    props: ['member'],

    components: {
        Multiselect,
    },

    data: () => ({
        // action contains save or update
        action: 'save',
        url: '/api/member',
        form: member_format,
        error_validation: {},
        submitted: false,

        selection: {
            titles: [],
            dinas: [],
            units: [],
        }
    }),

    mounted() {
        this.checkAction();
        this.getDinas();
        this.getTitles();
    },

    methods: {
        unitLabel: function({unit}) {
            return `${unit}`;
        },

        titleLabel: function({nama, level}) {
            return `${nama} - ${level}`;
        },

        checkAction: function() {
            if(this.member) {
                this.action = 'update';
                this.url += `/${this.member.id}`
                this.getMember();
                this.getUnit();
            } else {
                this.getNoAnggota();
            }
        },

        getMember: function() {
            axios.get(`/api/member/${this.member.id}`)
            .then( res => {
                this.form = res.data;
                this.form.dinas = this.form.unit.dinas;
            })
        },

        getNoAnggota: function() {
            axios.get('/api/member/get/no_anggota')
            .then( res => {
                this.form.no_anggota = res.data;
            })
        },

        getDinas: function() {
            axios.get('/api/dinas')
            .then( res => {
                this.selection.dinas = res.data;
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                // Always executed
            });
        },

        getTitles: function() {
            axios.get('/api/title', { params: { form_member: 'y', page: -1 } })
            .then( res => {
                this.selection.titles = res.data.data;
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                // Always executed
            });
        },

        dinasOnChange: function () {

            if (this.form.dinas) {

                this.form.unit = "";
                this.units = [];

                this.getUnit();
            }
        },
        
        getUnit: function() {
            axios.get(`/api/unit?dinas=${this.form.dinas}`, )
                .then(res => {
                    this.selection.units = res.data;
                })
                .catch(e => {
                    console.log(e.response);
                })
                .then(() => {
                    // Always executed
                });
        },

        request: async function() {
            if(this.member) {
                return await axios.put(this.url, this.form);
            } else {
                return await axios.post(this.url, this.form);
            }
        },
        proceedData: async function () {

            swal({
                title: `Anda akan ${this.action == 'save' ? 'menambahkan' : 'memperbaharui'} data Member`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    this.request()
                    .then(res => {
                        if(res.data.status == true) {
                            this.$router.push({ name: 'member.index' });
                            toastr.success(res.data.message, "Success!");
                        } else {
                            swal("Please check your input", res.data.message, "warning");
                            this.error_validation = res.data.data;
                            this.applyValidator(res.data.data);
                        }
                    })
                    .catch ( e => {
                        console.log(e.response);
                    })
                    .then(() => {
                        $.LoadingOverlay("hide");
                    });
                }
            });

            
        },

        applyValidator: function(error_validation) {
            this.error_validation = error_validation;
            let obj = error_validation;
            Object.keys(this.error_validation).forEach(function (key) {


            });
        },
        
        resetForm: function() {
            this.checkAction();
        },
    }

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>



</style>
