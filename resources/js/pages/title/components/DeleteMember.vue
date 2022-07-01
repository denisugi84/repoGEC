<template>
    <div class="card border-danger mb-3">
        <div class="card-body">
            <h5 class="card-title">Hapus Anggota</h5>
            <hr>
            <ul class="warning-list">
                <li>Data yang sudah dihapus tidak bisa dikembalikan</li>
                <li>Apabila terdapat Anggota pada Jabatan {{ title.nama }}. Member / Anggota bersangkutan tidak akan memiliki Jabatan dan mohon untuk melakukan update data kembali</li>
                <li>Lakukan dengan tanggung jawab</li>
            </ul>
            <button class="btn btn-danger" @click="deleteTitle"><i class="fa fa-trash"></i> Hapus Jabatan</button>
        </div>

        
    </div>
</template>

<script>
export default {
    props: ['title'],

    methods: {
        deleteTitle: function() {
            swal({
                title: `Anda akan menghapus ${this.title.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) => {
                if (value) {
                    $.LoadingOverlay('show');
                    axios.delete(`/api/title/${this.$route.params.title_id}`)
                    .then(res => {
                        if (res.data.status == true) {
                            toastr.success(res.data.message);
                            this.$router.push({name: 'title.index'});
                        } else if (res.data.status == false) {
                            toastr.warning(res.data.message, "Ooppss!");
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