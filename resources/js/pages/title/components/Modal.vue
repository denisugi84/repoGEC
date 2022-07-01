<template>
    <!-- Modal -->
    <div class="modal fade" id="newData" tabindex="-1" aria-labelledby="newDataLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newDataLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="newData">
                        <div class="form-group">
                            <label for="level">Level <Required /></label>
                            <input 
                                type="text" 
                                id="level" 
                                class="form-control" 
                                v-model="form.level" 
                                v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.level) && (error_validation.level.length > 0) ,
                                }"
                            >
                            
                            <div class="invalid-feedback">
                                <ul class="warning-list" v-for="(txt, i) in error_validation.level" :key="i">
                                    <li>{{ txt }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="nama">Nama <Required /></label>
                            <input 
                                type="text" 
                                id="nama" 
                                class="form-control" 
                                v-model="form.nama"
                                v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.nama) && (error_validation.nama.length > 0) ,
                                }"
                            >
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
                            <label for="multiple_member">Multiple Member <Required /></label>
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
                        <div class="float-end">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i> Tambah Jabatan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

    props: ['title'],

    components: {
    },

    data: () => ({
        url: '',
        form: {
            nama: '',
            level: '',
            multiple_member: 'n',
        },

        error_validation: {},
    }),

    mounted() {
    },

    methods: {
        newData: function() {
            swal({
                title: `Anda akan membuat Jabatan Baru.`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $('#newData').modal('hide');
                    $.LoadingOverlay("show");
                    axios.post(`/api/title`, this.form)
                    .then(res => {
                        if(res.data.status == true) {
                            toastr.success(res.data.message, "Success!");
                            this.$emit('newData', this.form)
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