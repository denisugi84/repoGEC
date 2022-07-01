<template>
    <div class="row mt-1">
        <div class="col-md-12" v-if="$can('member-approval') && member.is_approved === 'n'">
            <Approval :member="member" @initData="initData" />
        </div>
        <div class="col-3">
            <MemberCard :member="member" :button="false" v-if="member.nama" />
        </div>
        <div class="col-md-9">
            <div class="card h-100">
                <div class="card-body">
                    <ul class="nav nav-tabs" role="tablist">
                        <!-- <li class="nav-item">
                            <a class="nav-link" id="info-tab" data-bs-toggle="tab" href="#info" aria-controls="info"
                                role="tab" aria-selected="false"><i class="fa fa-user"></i> Personal Detail</a>
                        </li> -->
                        <li class="nav-item" v-if="$bulkCan('member-index', 'member-edit')">
                            <a class="nav-link active" id="edit-tab" data-bs-toggle="tab" href="#edit"
                                aria-controls="edit" role="tab" aria-selected="true">Edit</a>
                        </li>
                        
                        <li class="nav-item" v-if="$can('member-detail')">
                            <!-- TODO : Show absensi meeting data -->
                            <a class="nav-link" id="absensi-meeting-tab" data-bs-toggle="tab"
                                aria-controls="absensi-meeting" href="#absensi-meeting" role="tab"
                                aria-selected="false">Absensi Meeting</a>
                        </li>
                        <li class="nav-item" v-if="$can('member-edit')">
                            <a class="nav-link" id="login-access-tab" data-bs-toggle="tab"
                                aria-controls="login-access" href="#login-access" role="tab"
                                aria-selected="false">Akses Login</a>
                        </li>
                        <li class="nav-item" v-if="$can('member-edit')">
                            <a class="nav-link" id="member-status-tab" data-bs-toggle="tab"
                                aria-controls="status" href="#status" role="tab"
                                aria-selected="false">Status Aktif/Nonaktif</a>
                        </li>
                        <li class="nav-item" v-if="$can('member-delete') && member.deleted_at == null">
                            <a class="nav-link" id="delete-member-tab" data-bs-toggle="tab"
                                aria-controls="delete-member" href="#delete-member" role="tab"
                                aria-selected="false">Hapus Member
                            </a>
                        </li>
                        <li class="nav-item" v-if="$bulkCan('member-edit', 'member-delete') && member.deleted_at">
                            <a class="nav-link" id="restore-member-tab" data-bs-toggle="tab"
                                aria-controls="restore-member" href="#restore-member" role="tab"
                                aria-selected="false">Restore Member
                            </a>
                        </li>
                        <li class="nav-item" v-if="$can('member-delete') && member.deleted_at">
                            <a class="nav-link" id="permanent-delete-member-tab" data-bs-toggle="tab"
                                aria-controls="permanent-delete-member" href="#permanent-delete-member" role="tab"
                                aria-selected="false">Hapus Permanen
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <!-- <div class="tab-pane" id="info" aria-labelledby="info-tab" role="tabpanel">
                            
                        </div> -->
                        <div class="tab-pane active" id="edit" aria-labelledby="edit-tab" role="tabpanel" v-if="$bulkCan('member-detail', 'member-edit')">
                            <Form :member="member" v-if="(typeof member.id !== 'undefined')" />
                        </div>
                        <div class="tab-pane" id="absensi-meeting" role="tabpanel"
                            aria-labelledby="absensi-meeting-tab" v-if="$can('member-detail')">
                            <AbsensiMeeting :meeting="member.meeting" />
                        </div>
                        <div class="tab-pane" id="login-access" role="tabpanel"
                            aria-labelledby="login-access-tab" v-if="$can('member-edit')">
                            <LoginAccess :member="member" />
                        </div>
                        <div class="tab-pane" id="status" role="tabpanel"
                            aria-labelledby="member-status-tab" v-if="$can('member-detail')">
                            <MemberStatus :member="member" />
                        </div>
                        <div class="tab-pane" id="delete-member" role="tabpanel"
                            aria-labelledby="delete-member-tab"  v-if="$can('member-delete') && member.deleted_at == null">
                            <DeleteMember :member="member" />
                        </div>
                        <div class="tab-pane" id="restore-member" role="tabpanel"
                            aria-labelledby="restore-member-tab"  v-if="$bulkCan('member-edit', 'member-delete') && member.deleted_at">
                            <RestoreMember :member="member" />
                        </div>
                        <div class="tab-pane" id="permanent-delete-member" role="tabpanel"
                            aria-labelledby="permanent-delete-member-tab"  v-if="$can('member-delete') && member.deleted_at">
                            <PermanentDelete :member="member" />
                        </div>
                        <!-- TODO : Create UI for RFID Registration -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Form from "@/pages/member/components/Form"
import Approval from "@/pages/member/components/Approval";
import MemberCard from "@/pages/member/components/Card";
import AbsensiMeeting from "@/pages/member/components/Meeting";
import LoginAccess from "@/pages/member/components/LoginAccess";
import MemberStatus from "@/pages/member/components/MemberStatus";
import DeleteMember from "@/pages/member/components/DeleteMember";
import RestoreMember from "@/pages/member/components/RestoreMember";
import PermanentDelete from "@/pages/member/components/PermanentDelete";

export default {
    components: {
        Form, 
        Approval,
        MemberCard,
        AbsensiMeeting,
        LoginAccess, 
        MemberStatus, 
        DeleteMember, 
        RestoreMember,
        PermanentDelete,
    },

    data: () => ({
        member: {},
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: async function() {
            $.LoadingOverlay("show");
            await axios.get(`/api/member/${this.$route.params.member_id}`)
            .then( res => {
                this.member = res.data;
                this.$root.setPageHeader(this.member.nama, "Detail Member");
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                $.LoadingOverlay("hide");
            });

        },
    }

}
</script>