<template>
    <div class="card h-100 card-developer-meetup">
        <div class="meetup-img-wrapper rounded-top text-center" v-if="show_img">
            <img src="/app-assets/images/meeting-vector.jpg"
                alt="Meeting Pic" class="img-fluid">
        </div>
        <div class="card-body">
            <div class="meetup-header d-flex align-items-center">
                
                <div class="my-auto">
                    <h4 class="card-title mb-25">{{ meeting.title }}</h4>
                    <p class="card-text mb-0">{{ meeting.description ? meeting.description : 'N/A' }}</p>
                </div>
            </div>
            <div class="d-flex flex-row meetings" v-if="meeting.created_by">
                <div class="avatar bg-light-primary rounded me-1">
                    <div class="avatar-content">
                        <i class="fa fa-user"></i>
                    </div>
                </div>
                <div class="content-body">
                    <h6 class="mb-0">Dibuat Oleh</h6>
                    <small>{{ meeting.created_by.nama }}</small>
                </div>
            </div>
            <div class="d-flex flex-row meetings">
                <div class="avatar bg-light-primary rounded me-1">
                    <div class="avatar-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-calendar avatar-icon font-medium-3">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                </div>
                <div class="content-body">
                    <h6 class="mb-0">{{ $root.indonesianDate(meeting.start) }}</h6>
                    <small>{{ $root.indonesianDate(meeting.start, 'time') }}</small>
                </div>
            </div>
            <div class="d-flex flex-row meetings">
                <div class="avatar bg-light-primary rounded me-1">
                    <div class="avatar-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-map-pin avatar-icon font-medium-3">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                </div>
                <div class="content-body">
                    <h6 class="mb-0">Lokasi</h6>
                    <small>{{ meeting.location ? meeting.location : 'N/A' }}</small>
                </div>
            </div>
            <div class="d-flex flex-row meetings">
                <div class="avatar bg-light-primary rounded me-1">
                    <div class="avatar-content">
                        <i class="fa fa-sticky-note-o"></i>
                    </div>
                </div>
                <div class="content-body">
                    <h6 class="mb-0">Notulen</h6>
                    <small>{{ meeting.notulen ? meeting.notulen.nama : 'N/A' }}</small>
                </div>
            </div>
            <div class="d-flex flex-row meetings">
                <div class="avatar bg-light-primary rounded me-1">
                    <div class="avatar-content">
                        <i class="fa fa-clock-o"></i>
                    </div>
                </div>
                <div class="content-body">
                    <h6 class="mb-0">Dibuat pada</h6>
                    <small>{{ $root.indonesianDate(meeting.created_at, 'datetime') }}</small>
                </div>
            </div>
            <div class="avatar-group" v-if="show_thumbnail">
                <div v-for="(member, index) in meeting.limit_member" :key="index" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title=""
                    class="avatar pull-up" :data-bs-original-title="member.nama">
                    <img :src="member.avatar" alt="Avatar" width="33"
                        height="33">
                </div>
                <h6 class="align-self-center cursor-pointer ms-50 mb-0" v-if="(meeting.member_count - meeting.limit_member.length) > 0">+{{ meeting.member_count - meeting.limit_member.length }} lainnya</h6>
            </div>

            <div class="mt-2 d-grid" v-if="$can('meeting-report') && show_export">
                <button @click="exportMeeting('pdf')" class="btn btn-primary">
                    Export to PDF
                </button>
            </div>
            
            <div class="mt-2 d-grid" v-if="$can('meeting-detail') && btn_detail">
                <router-link :to="{ name: 'meeting.detail', params: {meeting_id: meeting.id} }" class="btn btn-primary">
                    Detail
                </router-link>
            </div>
            
            <div class="mt-2 d-grid" v-if="$can('meeting-delete') && index_mode">
                <button @click="deleteMeeting" class="btn btn-danger">
                    Hapus
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['meeting', 'btn_detail', 'show_thumbnail', 'show_img', 'show_export', 'index_mode'],

    methods: {
        exportMeeting: function(extension) {
            axios.get(`/api/meeting/${this.meeting.id}/export/${extension}`, {
                responseType: 'blob', // had to add this one here
            })
            .then( response => {

                // const content = response.headers['content-type'];

                // console.log(content);
                // console.log(file);
                // console.log(response.data);
                // download(response.data, file.file_name, content);
                const url = URL.createObjectURL(response.data);
                // window.open(url);

                // const url = window.URL.createObjectURL(
                //     new Blob([response.data])
                // );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute(
                    "download",
                    `Meeting ${this.meeting.title}`
                ); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        },

        deleteMeeting: function() {
            console.log('delete meeting');
            this.$emit('initData');
        },
    }
}
</script>

<style>

</style>