<template>
    <div>
        <div class="row mt-2">
            <div class="col-md-3">
                <MeetingCard :meeting="meeting" :show_img="true" :show_export="true" />
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="member-tab" data-bs-toggle="tab" href="#member"
                                    aria-controls="member" role="tab" aria-selected="true"><i class="fa fa-users"></i> Anggota ({{ meeting.member.length }})</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile"
                                    aria-controls="profile" role="tab" aria-selected="false"><i class="fa fa-sticky-note"></i> Catatan</a>
                            </li>
                            <li class="nav-item" v-if="$can('meeting-edit')">
                                <a class="nav-link" id="edit-tab" data-bs-toggle="tab" href="#edit"
                                    aria-controls="edit" role="tab" aria-selected="false"><i class="fa fa-pencil"></i> Edit</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="member" aria-labelledby="member-tab" role="tabpanel">
                                <MeetingMember :members="meeting.member" @initData="initData" />
                            </div>
                            <div class="tab-pane" id="profile" aria-labelledby="profile-tab" role="tabpanel">
                                <MeetingNote :meeting="meeting" :is_notulen="isNotulen" />
                            </div>
                            <div v-if="$can('meeting-edit')" class="tab-pane" id="edit" aria-labelledby="edit-tab" role="tabpanel">
                                <MeetingForm :meeting="meeting"  @initData="initData" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MeetingCard from "@/pages/meeting/components/Card";
import MeetingMember from "@/pages/meeting/components/Member";
import MeetingNote from "@/pages/meeting/components/Note";
import MeetingForm from "@/pages/meeting/components/Form";

export default {

    components: {
        MeetingCard, MeetingMember, MeetingNote, MeetingForm,
    },

    computed:  {
        isNotulen: function() {
            let user = JSON.parse(this.$store.getters.user);

            if(user.member) {
                if(user.member.id == this.meeting.notulen.id) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }

        },
    },

    data: () => ({
        meeting: {
            member: [],
            note: '',
            notulen: {
                id: '',
            },
        },
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function() {
            $.LoadingOverlay("show");
            axios.get(`/api/meeting/${this.$route.params.meeting_id}`)
            .then( res => {
                this.meeting = res.data;

                this.$root.setPageHeader(`${this.meeting.title}`, `${this.meeting.description ? this.meeting.description: 'No Description'}`);
            })
            .catch( e => {
                console.log(e.response);
            })
            .then(() => {
                $.LoadingOverlay("hide");
            })
        },
    },

}
</script>

<style>

</style>