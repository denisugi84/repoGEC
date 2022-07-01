<template>
    <div>
        <div class="card">
            <div class="card-header bg-primary text-white">
                Status Member
            </div>
            <div class="card-body">
                <div class="mt-1">
                    <center>
                        <div v-if="member.is_active == 'y'">
                            <p>
                                Status Member sudah Aktif.
                            </p>

                            <button class="btn btn-warning" @click="changeStatus('deactivate')"><i class="fa fa-times"></i> Non-Aktifkan</button>
                        </div>
                        <div v-else>

                            <p>
                                Status Member Tidak Aktif
                            </p>

                            <button class="btn btn-success" @click="changeStatus('activate')"><i class="fa fa-check"></i> Aktifkan Member</button>
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
        changeStatus: function(action) {

            let text = '';

            if(action == 'activate') text = "mengaktifkan";
            if(action == 'deactivate') text = "menonaktifkan";

            swal({
                title: `Anda akan ${text} status ${this.member.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/member/${this.member.id}/change_status`, {
                        action: action
                    })
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