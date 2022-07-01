<template>
    <div class="card border h-100">
        <div class="card-body">
            <div class="banner"></div>
            <div class="row img-overlay">
                <div class="col-3">
                    <div class="avatar avatar-xl mb-2">
                        <img :src="$root.checkImage(member.avatar)" class="avatar" v-bind:class="{ 'blurred-image' : member.deleted_at }" alt="avatar" @error="imageLoadError">
                    </div>
                </div>
                <div class="col-9">
                    <div style="margin-left: 15px;"> 
                        <h4 style="mb-0; color: white; font-size: 16px; font-weight: bold;">
                            {{ member.nama.length > 28 ? member.nama.substr(0, 26) + ".." : member.nama }}
                        </h4>
                        <p class="mb-0" style="margin-top: -8px; color: white; font-weight: 400; font-size: 13px;"><span v-if="member.no_anggota">{{ member.no_anggota }} /</span> {{ member.nopeg }}</p>
                        <span class="badge bg-success text-wrap badge-block" style="mt-0">{{ `${member.title ? member.title.nama : 'N/A'}`  }}</span>
                    </div>
                </div>
            </div>

            <div class="mt-2">

                <div class="alert" v-bind:class="{
                    'alert-success': member.is_active == 'y',
                    'alert-warning': member.is_active == 'n',
                }">
                    <div class="alert-body">
                        <center>
                            <span v-if="member.is_approved == 'n'">
                                <span v-if="member.rejection.length === 0">
                                    <i class="fa fa-spinner"></i> Menunggu Approval
                                </span>
                                <span v-else>
                                    <i class="fa fa-ban"></i> Pendaftaran Ditolak
                                </span>
                            </span>
                            <span v-else-if="member.is_active == 'y'"><i class="fa fa-check"></i> Status Member Aktif</span>
                            <span v-else-if="member.is_active == 'n'"><i class="fa fa-times"></i> Status Member Non-Aktif</span>
                        </center>
                    </div>
                </div>

                <div class="table-responsive">
                    <table>
                        <tr v-if="member.is_kpk == 'y'">
                            <td>
                                <span class="badge bg-success">
                                    <i class="fa fa-handshake-o"></i> Anggota KPK
                                </span>
                            </td>
                        </tr>
                        <tr v-if="member.unit">
                            <td><i class="fa fa-building"></i>{{ member.unit.dinas + " - " + member.unit.unit}}</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-envelope"></i>{{ member.email ? member.email : 'N/A' }}</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-mobile"></i>{{ member.phone ? member.phone : 'N/A' }}</td>
                        </tr>
                        <tr v-if="member.tempat_lahir !== null && member.tanggal_lahir !== null">
                            <td><i class="fa fa-home"></i>{{ member.tempat_lahir }}, {{ $root.indonesianDate(member.tanggal_lahir) }}</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-sign-in"></i>{{ member.tanggal_daftar ? $root.indonesianDate(member.tanggal_daftar) : 'N/A' }}</td>
                        </tr>
                        <tr v-if="member.deleted_at" class="text-danger">
                            <td><i class="fa fa-trash"></i>Dihapus pada {{ $root.indonesianDate(member.deleted_at) }}</td>
                        </tr>
                    </table>
                </div>
                <div class="position-absolute bottom-0 end-0"  style="margin: 10px;">
                    <button v-if="$can('member-approval') && member.is_approved == 'n'" class="btn btn-success btn-sm" @click="approveMember"><i class="fa fa-check"></i> Approve</button>
                    <router-link v-if="$can('member-detail') && button" :to="{ name: 'member.detail', params: { member_id: member.id } }" class="btn btn-primary btn-sm"><i class="fa fa-info"></i> Detail</router-link>
                    <button v-if="$can('member-edit') && from_title && (member.title_id !== null)" class="btn btn-danger btn-sm" @click="deleteMemberFromTitle"><i class="fa fa-chain-broken"></i> Hapus</button>
                    <button v-if="$can('member-edit') && from_unit && (member.unit_id !== null)" class="btn btn-danger btn-sm" @click="deleteMemberFromUnit"><i class="fa fa-chain-broken"></i> Hapus</button>
                    <button v-if="$can('member-edit') && btn_meeting" class="btn btn-danger btn-sm" @click="deleteMemberFromMeeting"><i class="fa fa-chain-broken"></i> Hapus</button>
                    <!-- <button class="btn btn-warning btn-sm"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button> -->
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: ['member', 'button', 'from_title', 'from_unit', 'btn_meeting'],

    methods: {
        deleteMemberFromTitle: function() {
            this.$emit('clicked', this.member)
        },
        deleteMemberFromUnit: function() {
            this.$emit('deleteMemberFromUnit', this.member)
        },
        deleteMemberFromMeeting: function() {
            this.$emit('deleteMemberFromMeeting', this.member)
        },
        approveMember: function() {
            this.$emit('approveMember', this.member);
        },

        imageLoadError () {
            console.log('Image failed to load');
        },
    },
}
</script>

<style scoped>

.card {
    border-radius: 8px;
}

.banner {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 125px;
    background-image: url(/app-assets/images/card-bg2.jpg);
    background-position: center;
    background-size: cover;
}

.img-overlay {
    position: relative;
    z-index: 10;
}


.fa {
    margin-right: 5px;
}

.blurred-image {
    filter: brightness(30%);
}
</style>