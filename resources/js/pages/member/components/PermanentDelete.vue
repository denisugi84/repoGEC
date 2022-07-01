<template>
    <div>
        <div class="card">
            <div class="card-header bg-danger text-white">
                Delete Member
            </div>
            <div class="card-body">
                <div class="mt-1">
                    <center>
                        <p>
                            Silahkan klik tombol dibawa ini untuk menghapus member {{ member.nama }} secara Permanent
                        </p>
                        <button class="btn btn-danger mt-2" @click="deleteMember"><i class="fa fa-trash"></i> Hapus Member Permanen</button>
                    </center>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['member'],

    methods: {
        deleteMember: function() {
            swal({
                title: `Menghapus Data Member ${this.member.nama} secara Permanen. Data yang dihapus tidak bisa dikembalikan`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.delete(`/api/member/${this.member.id}/delete`)
                    .then(res => {
                        if(res.data.status == true) {
                            this.$router.push({ name: 'member.index' });
                            toastr.success(res.data.message, "Success!");
                        } else {
                            toastr.error(res.data.message, "Terjadi kesalahan!")
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