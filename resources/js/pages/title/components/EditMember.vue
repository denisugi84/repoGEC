<template>
    <div>
        <form @submit.prevent="updateData">

            <div class="row">
                <div class="col-md-8">
                    <div class="form-group">
                        <label for="level">Level
                            <Required /></label>
                        <input type="text" id="level" class="form-control" v-model="form.level" v-bind:class="{ 
                            'is-invalid' : Array.isArray(error_validation.level) && (error_validation.level.length > 0) ,
                        }">

                        <div class="invalid-feedback">
                            <ul class="warning-list" v-for="(txt, i) in error_validation.level" :key="i">
                                <li>{{ txt }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="nama">Nama
                            <Required /></label>
                        <input type="text" id="nama" class="form-control" v-model="form.nama" v-bind:class="{ 
                            'is-invalid' : Array.isArray(error_validation.nama) && (error_validation.nama.length > 0) ,
                        }">
                        <div class="invalid-feedback">
                            <ul class="warning-list" v-for="(txt, i) in error_validation.nama" :key="i">
                                <li>{{ txt }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="alert alert-info">
                            <div class="alert-body">
                                <p>
                                    <i class="fa fa-info-circle mr-1"></i>
                                    Jabatan dapat diisi oleh banyak member / anggota apabila opsi dipilih Ya
                                </p>
                            </div>
                        </div>
                        <label for="multiple_member">Multiple Member
                            <Required /></label>
                        <div class="demo-inline-spacing form-check">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="multiple-member-selectionOptions"
                                    id="multiple-member-selection1" v-model="form.multiple_member" value="n" checked="">
                                <label class="form-check-label" for="multiple-member-selection1">Tidak</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="multiple-member-selectionOptions"
                                    id="multiple-member-selection2" v-model="form.multiple_member" value="y">
                                <label class="form-check-label" for="multiple-member-selection2">Ya</label>
                            </div>
                            <div class="invalid-feedback">
                                <ul class="warning-list" v-for="(txt, i) in error_validation.multiple_member" :key="i">
                                    <li>{{ txt }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="alert alert-warning">
                        <h4 class="alert-heading"><i class="fa fa-exclamation-triangle"></i> Instruksi</h4>
                        <div class="alert-body">
                            <ul class="warning-list">
                                <li>Form dengan Tanda <Required /> adalah wajib diisi dan tidak boleh kosong</li>
                                <li>sad</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i> 
                        Ubah Jabatan
                        </button>
                    </div>
                </div>
            </div>


        </form>
    </div>
</template>

<script>
export default {

    data: () => ({
        form: {},
        error_validation: {},
    }),

    mounted() {
        this.initData();
    },

    methods: {

        initData: function() {
            axios.get(`/api/title/${this.$route.params.title_id}`)
            .then(res => {
                this.form = res.data;
            })
        },

        updateData: function() {
            swal({
                title: `Anda akan membuat Jabatan Baru.`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/title/${this.$route.params.title_id}`, this.form)
                    .then(res => {
                        if(res.data.status == true) {
                            toastr.success(res.data.message, "Success!");
                            this.$emit('initData')
                        } else if(res.data.status == false) {
                            this.error_validation = res.data.data;
                            swal("Gagal", res.data.message, "warning");
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
    },
}
</script>

<style>

</style>