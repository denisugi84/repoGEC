<template>
    <div>
        <div class="alert" v-bind:class="{
            'alert-primary' : member.rejection.length === 0,
            'alert-danger' : member.rejection.length > 0,
        }">
            <div class="alert-body">

                
                <h4 class="mb-1"><i class="fa fa-info-circle"></i> Perhatian</h4>
                <p class="mt-0">
                    <span v-if="member.rejection.length === 0">
                        Member {{ member.nama }} mendaftar pada {{ $root.indonesianDate(member.created_at) }}. Segera lakukan verifikasi
                    </span>
                    <span v-else>
                        Pendaftaran Member {{ member.nama }} di tolak oleh {{ member.rejection[0].rejected_by.nama }} pada {{ $root.indonesianDate(member.rejection[0].rejected_by.created_at) }}
                        <p class="mt-1">Alasan : {{ member.rejection[0].reason }}</p>
                    </span>
                </p>
                
                <br>
                
                <div class="clearfix">
                    <div class="float-end">
                        <button class="btn btn-danger" v-if="member.rejection.length == 0" @click="reject"><i class="fa fa-forbidden"></i> Reject</button>
                        <button class="btn btn-success" @click="approve"><i class="fa fa-forbidden"></i> Approve</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'member'
    ],

    methods: {
        approve: function() {

            let member = this.member;

            swal({
                title: `Anda akan Approve ${member.nama}.`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/member/${member.id}/approve`)
                    .then(res => {
                        if(res.data.status == true) {
                            toastr.success(res.data.message + ". Browser akan refresh dalam 3 detik", "Success!");
                            setTimeout(() => {
                                location.reload();
                            }, 3000);
                        } else {
                            swal("Please check your input", res.data.message, "warning");
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

        reject: function() {


            let member = this.member;

            swal({
                text: 'Ketikan alasan Penolakan',
                content: "input",
                button: {
                    text: "Submit!",
                    closeModal: true,
                },
            })
            .then(reason => {
                if (!reason) throw null;
                
                

            swal({
                title: `Anda akan melakukan penolakan dengan alasan ${reason} pada ${member.nama}.`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/member/${member.id}/reject`, {
                        reason: reason,
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            this.$emit("initData");
                            toastr.success(res.data.message, "Success!");
                        } else {
                            swal("Please check your input", res.data.message, "warning");
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

            })

        },
    }
}
</script>

<style>

</style>