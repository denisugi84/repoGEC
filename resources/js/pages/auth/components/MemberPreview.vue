<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="previewMember" tabindex="-1" aria-labelledby="previewMemberLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="previewMemberLabel">Verifikasi Data Diri</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="alert alert-warning" role="alert">
                            <div class="alert-body">
                                <p>Mohon untuk mengkonfirmasi sebelum melanjutkan Proses Pendaftaraan Keanggotan GMF Employees Club</p>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <center class="mb-2">
                                <img class="img-fluid rounded-circle" style="height: 120px" :src="member.avatar" alt="Avatar">
                            </center>
                            <table>
                                <tr>
                                    <td style="width: 30%">Nopeg</td>
                                    <td style="width: 5%">:</td>
                                    <td>{{ member.nopeg }}</td>
                                </tr>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>{{ member.nama }}</td>
                                </tr>
                                <tr>
                                    <td>E-Mail</td>
                                    <td>:</td>
                                    <td>{{ member.email }}</td>
                                </tr>
                                <tr>
                                    <td>Dinas</td>
                                    <td>:</td>
                                    <td>{{ member.unit.dinas }}</td>
                                </tr>
                                <tr>
                                    <td>Unit</td>
                                    <td>:</td>
                                    <td>{{ member.unit.unit }}</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        <button type="button" class="btn btn-primary" @click="doRegister">Ya, Konfirmasi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['member'],

    methods: {
        doRegister: function() {
            this.$emit('doRegister', this.member);
        },
    }
}
</script>

<style>

</style>