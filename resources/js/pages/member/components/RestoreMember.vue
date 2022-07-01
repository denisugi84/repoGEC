<template>
    <div>
        <div class="card">
            <div class="card-header bg-success text-white">
                Restore Member
            </div>
            <div class="card-body">
                <div class="mt-1">
                    <center>
                        <p>
                            Dihapus pada tanggal {{ $root.indonesianDate(member.deleted_at) }}. Silahkan klik tombol dibawa ini untuk merestore member {{ member.nama }}
                        </p>
                        <button class="btn btn-success mt-2" @click="deleteMember"><i class="fa fa-undo"></i> Restore Member</button>
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
                title: `Restore Data Member ${this.member.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/member/${this.member.id}/restore`)
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