<template>
    <!-- Modal -->
    <div class="modal fade" id="importModal" tabindex="-1" aria-labelledby="importModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="importModalLabel">Import Anggota dengan XLSX</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning">
                        <div class="alert-body">
                            <p class="mb-2">
                                Silahkan untuk mendownload template
                                Excel terlebih dahulu untuk menyesuaikan struktur data dengan
                                <i>Template</i>
                            </p>

                            <a href="/template/xlsx/GEC-IMPORT-MEMBER.xlsx" class="btn btn-primary">Download
                                Template</a>
                        </div>
                    </div>
                    <br />

                    <h5>Upload File Excel</h5>

                    <div class="form-group">
                        <input type="file" class="form-control" ref="file" name="file"
                            @change="fileUpload($event.target)" />
                    </div>
                    <br>
                    <div class="progress" v-if="loading.progressBar > 0">
                        <div class="progress-bar" role="progressbar" :style="`width: ${loading.progressBar}%`" :aria-valuenow="loading.progressBar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                    <button type="button" class="btn btn-primary" @click="startUpload"><i class="fa fa-upload"></i> Upload</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data: () => ({
        file: "",
        loading: {
            isLoading: false,
            progressBar: 0,
        },
    }),

    methods: {

        fileUpload: function (event) {
            this.file = event.files[0];
        },

        startUpload: function() {
            swal({
                title: `Anda akan memulai Upload Data Anggota menggunakan Template XLSX`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");

                    let formData = new FormData();
                    formData.append("file", this.file);
                    axios.post(`/api/member/import_xlsx`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        //FUNGSI INI YANG MEMILIKI PERAN UNTUK MENGUBAH SEBERAPA JAUH PROGRESS UPLOAD FILE BERJALAN
                        onUploadProgress: function (progressEvent) {
                            //DATA TERSEBUT AKAN DI ASSIGN KE VARIABLE progressBar
                            this.loading.progressBar = parseInt(
                                Math.round(
                                    (progressEvent.loaded * 100) /
                                        progressEvent.total
                                )
                            );
                        }.bind(this),
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            // if success
                            this.$emit('initData');
                            $('#importModal').modal('hide');
                            swal("Berhasil!", res.data.message, "success");

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
    }
}
</script>

<style>

</style>