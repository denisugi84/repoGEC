<template>
    <div>
        <div class="card">
            <div class="card-header bg-primary text-white">
                Akses Login
            </div>
            <div class="card-body">
                <div class="mt-1">
                    <center>
                        <div v-if="member.user">
                            <p>
                                Anggota sudah memiliki Akses Login pada {{ $root.indonesianDate(member.user.created_at) }}.
                            </p>

                            <button class="btn btn-warning" @click="applyLogin('detach')">Hapus Akses Login</button>
                        </div>
                        <div v-else>

                            <p>
                                Anggota belum memiliki Akses Login.
                            </p>

                            <button class="btn btn-success" @click="applyLogin('attach')">Tambah Akses Login</button>
                        </div>
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
        applyLogin: function(action) {

            let text = '';

            if(action == 'attach') text = "menambahkan";
            if(action == 'detach') text = "menghapus";

            swal({
                title: `Anda akan ${text} akses login ${this.member.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/member/${this.member.id}/login`, {
                        action: action
                    })
                    .then(res => {
                        console.log(res.data);
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