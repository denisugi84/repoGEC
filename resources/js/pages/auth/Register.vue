<template>
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-cover">
                    <div class="auth-inner row m-0">
                        <!-- Left Text-->
                        <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                            <div class="w-100 d-lg-flex align-items-center justify-content-center px-5"><img
                                    class="img-fluid"
                                    src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/pages/register-v2.svg"
                                    alt="Register V2" /></div>
                        </div>
                        <!-- /Left Text-->
                        <!-- Login-->
                        <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                            <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                <!-- <h2 class="card-title fw-bold mb-1" style="text-align: center;"> -->
                                    <center>
                                        <Logo style="height: 140px;" />
                                        <h2 class="card-title fw-bold mb-1 mt-2">Daftar Keanggotaan</h2>
                                    </center>
                                    <!-- <p class="card-text mb-2">Daftar Keanggotaan</p> -->
                                <!-- </h2> -->
                                <form class="auth-login-form mt-2" @submit.prevent="memberVerification">
                                    <div class="mb-1">
                                        <label class="form-label" for="nopeg">Nomor Pegawai</label>
                                        <input
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.nopeg) && (error_validation.nopeg.length > 0),
                                                'is-valid' : !error_validation.nopeg && this.submitted == true 
                                            }"
                                            class="form-control" id="nopeg" v-model="form.nopeg" type="number" name="nopeg"
                                            placeholder="58xxxx" aria-describedby="nopeg"
                                            autofocus="" tabindex="1" required />
                                        
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.nopeg" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mb-1">
                                        <label class="form-label" for="nama">Nama</label>
                                        <input 
                                            
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.nama) && (error_validation.nama.length > 0),
                                                'is-valid' : !error_validation.nama && this.submitted == true 
                                            }"
                                            class="form-control" id="nama" v-model="form.nama" type="text" name="nama"
                                            placeholder="Nama Lengkap" aria-describedby="nama"
                                            autofocus="" tabindex="1" required />
                                        
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.nama" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mb-1">
                                        <label class="form-label" for="email">Email</label>
                                        <input 
                                            v-bind:class="{ 
                                                'is-invalid' : Array.isArray(error_validation.email) && (error_validation.email.length > 0),
                                                'is-valid' : !error_validation.email && this.submitted == true 
                                            }"
                                            class="form-control" id="email" v-model="form.email" type="email" name="email"
                                            placeholder="Alamat Email" aria-describedby="email"
                                            autofocus="" tabindex="1" required />
                                        
                                        <div class="invalid-feedback">
                                            <ul class="warning-list" v-for="(txt, i) in error_validation.email" :key="i">
                                                <li>{{ txt }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-1">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label class="form-label" for="dinas">Dinas</label>
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
                                            <div class="col-md-6">
                                                <label class="form-label" for="unit">Unit</label>
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
                                    </div>
                                    <!-- <div class="mb-1">
                                        <div class="d-flex justify-content-between">
                                            <label class="form-label" for="login-password">Password</label>
                                        </div>
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input class="form-control form-control-merge" v-model="form.password" id="login-password"
                                                type="password" name="login-password" placeholder="············"
                                                aria-describedby="login-password" tabindex="2" /><span
                                                class="input-group-text cursor-pointer"><i
                                                    data-feather="eye"></i></span>
                                        </div>
                                    </div>
                                    <div class="mb-1">
                                        <div class="d-flex justify-content-between">
                                            <label class="form-label" for="password-confirm">Konfirmasi Password</label>
                                        </div>
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input class="form-control form-control-merge" v-model="form.password_confirmation" id="password-confirm"
                                                type="password" name="password-confirm" placeholder="············"
                                                aria-describedby="password-confirm" tabindex="2" /><span
                                                class="input-group-text cursor-pointer"><i
                                                    data-feather="eye"></i></span>
                                        </div>
                                    </div> -->
                                    <!-- <div class="mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input" id="remember-me" type="checkbox"
                                                tabindex="3" />
                                            <label class="form-check-label" for="remember-me"> Remember Me</label>
                                        </div>
                                    </div> -->
                                    <button class="btn btn-primary w-100 mt-1" tabindex="4">Daftar Keanggotaan</button>
                                    <p class="text-center mt-2"><span>Sudah punya akun?</span><router-link :to="{ name: 'login' }"><span>&nbsp;Masuk Disini</span></router-link></p>
                                    
                                </form>
                                <!-- <p class="text-center mt-2"><span>New on our platform?</span><a
                                       ><span>&nbsp;Create an account</span></a></p>
                                <div class="divider my-2">
                                    <div class="divider-text">or</div>
                                </div>
                                <div class="auth-footer-btn d-flex justify-content-center"><a
                                        class="btn btn-facebook" href="#"><i data-feather="facebook"></i></a><a
                                        class="btn btn-twitter white" href="#"><i data-feather="twitter"></i></a><a
                                        class="btn btn-google" href="#"><i data-feather="mail"></i></a><a
                                        class="btn btn-github" href="#"><i data-feather="github"></i></a>
                                </div> -->
                            </div>
                        </div>
                        <!-- /Login-->
                    </div>
                </div>
            </div>
        </div>

        <PreviewMember :member="form" @doRegister="doRegister" />
    </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import PreviewMember from "./components/MemberPreview.vue";

export default {

    components: {
        Multiselect,
        PreviewMember,
    },

    data: () => ({
        form: {
            avatar: '',
            nopeg: '782659',
            nama: 'Antonio Saiful Islam',
            email: 'antonio.saiful@gmf-aeroasia.co.id',
            password: '123123123',
            password_confirmation: '123123123',
            dinas: '',
            unit: '',
        },

        error_validation: {},
        
        submitted: false,

        selection: {
            titles: [],
            dinas: [],
            units: [],
        }
    }),

    mounted() {
        this.setStyle();
        this.getDinas();
    },

    methods: {
        
        unitLabel: function({unit}) {
            return `${unit}`;
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

        async memberVerification() {
            swal({
                title: `Apakah Data Yang Dimasukan Sudah Benar?`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    
                    this.error_validation = {};
                    axios.post('/api/auth/check-register', this.form)
                    .then((res) => {
                        if (res.data.status == true) {
                            this.form.avatar = res.data.data.avatar;
                            $('#previewMember').modal('show');
                            // this.$router.push({ name: "home" });
                        } else if(res.data.status == false) {
                            swal("Ooopss!", res.data.message, "warning");

                            this.error_validation = res.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                        if (error) {

                            if (error.response.status == 422) {
                                toastr.warning(Array.isArray(error.response.data) ? error.response.data[0] : error.response.data.message, "Please Check Your Input");
                            } else {
                                toastr.error(error.response.statusText, `Error Code : ${error.response.status}`);
                            }
                        }
                    })
                    .then(() => {
                        this.submitted = true;
                        $.LoadingOverlay('hide');
                    });
                }
            });
            
        },

        async doRegister() {
            swal({
                title: `Anda akan menyelesaikan Proses Pendaftaran?`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    this.error_validation = {};
                    $.LoadingOverlay("show");
                    axios.post('/api/auth/register', this.form)
                    .then((res) => {
                        if (res.data.status == true) {
                            swal("Berhasil!", res.data.message, "success");
                            this.resetForm();
                            $('#previewMember').modal('hide');
                            // this.$router.push({ name: "home" });
                        } else if(res.data.status == false) {
                            toastr.warning(res.data.message, "Periksa Kembali Form Input");
                            this.error_validation = res.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                        if (error) {

                            if (error.response.status == 422) {
                                toastr.warning(Array.isArray(error.response.data) ? error.response.data[0] : error.response.data.message, "Please Check Your Input");
                            } else {
                                toastr.error(error.response.statusText, `Error Code : ${error.response.status}`);
                            }
                        }
                    })
                    .then(() => {
                        this.submitted = true;
                        $.LoadingOverlay('hide');
                    });
                }
            });
            
        },

        resetForm: function() {
            this.form = {
                avatar: '',
                nopeg: '',
                nama: '',
                email: '',
                password: '',
                password_confirmation: '',
                unit: {
                    dinas: '',
                    unit: '',
                },
            };
        },

        setStyle: function () {
            // class="auth-page" style="background-image: url('assets/images/p-1.png'); background-size: cover; background-position: center center;"
            $("body").addClass("auth-page");
            $("body").css({
                "background-image": "url('/assets/images/p-1.png')",
                "background-size": "cover",
                "background-position": "center center",
            });
        },
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
ul {
    list-style-type: none;
}

li {
    margin-left: -15px;
}
</style>