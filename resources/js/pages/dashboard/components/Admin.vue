<template>
    <div class="mt-2">
        <section id="dashboard-ecommerce">
            <div class="row match-height">
                <!-- Medal Card -->
                <div class="col-xl-4 col-md-6 col-12">
                    <div class="card bg-primary text-white card-congratulation-medal">
                        <div class="card-body">
                            <h5 class="text-white">Hi, <strong><i>{{ user.member.nama }}</i></strong></h5>
                            <p class="card-text text-white font-small-3">No. Anggota : {{ user.member.no_anggota }} | No. Pegawai {{ user.member.nopeg }}</p>
                            <h3 class="mb-75 mt-2 pt-50 text-white">{{ user.member.title.nama }} <i class="pointer fa fa-question-circle"></i></h3>
                            <button type="button" class="btn btn-success waves-effect waves-float waves-light">Profil Saya</button>
                            <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/illustration/badge.svg"
                                class="congratulation-medal" alt="Medal Pic">
                        </div>
                    </div>
                </div>
                <!--/ Medal Card -->

                <!-- Statistics Card -->
                <div class="col-xl-8 col-md-6 col-12">
                    <div class="card card-statistics">
                        <div class="card-header">
                            <h4 class="card-title">Statistics</h4>
                            <div class="d-flex align-items-center">
                                <p class="card-text font-small-2 me-25 mb-0">Updated 1 month ago</p>
                            </div>
                        </div>
                        <div class="card-body statistics-body">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 col-12 pointer mb-2 mb-xl-0" @click="goTo('meeting')">
                                    <div class="d-flex flex-row">
                                        <div class="avatar bg-light-primary me-2">
                                            <div class="avatar-content">
                                                <i class="fa fa-globe fa-2x"></i>
                                            </div>
                                        </div>
                                        <div class="my-auto">
                                            <h4 class="fw-bolder mb-0">{{ count.meeting }}</h4>
                                            <p class="card-text font-small-3 mb-0">Meeting</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 pointer mb-2 mb-xl-0" @click="goTo('member')">
                                    <div class="d-flex flex-row">
                                        <div class="avatar bg-light-info me-2">
                                            <div class="avatar-content">
                                                <i class="fa fa-users fa-2x"></i>
                                            </div>
                                        </div>
                                        <div class="my-auto">
                                            <h4 class="fw-bolder mb-0">{{ count.member }}</h4>
                                            <p class="card-text font-small-3 mb-0">Member</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 pointer mb-2 mb-sm-0" @click="goTo('title')">
                                    <div class="d-flex flex-row">
                                        <div class="avatar bg-light-danger me-2">
                                            <div class="avatar-content">
                                                <i class="fa fa-briefcase fa-2x"></i>
                                            </div>
                                        </div>
                                        <div class="my-auto">
                                            <h4 class="fw-bolder mb-0">{{ count.title }}</h4>
                                            <p class="card-text font-small-3 mb-0">Jabatan</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 pointer" @click="goTo('unit')">
                                    <div class="d-flex flex-row">
                                        <div class="avatar bg-light-success me-2">
                                            <div class="avatar-content">
                                                <i class="fa fa-stack-exchange fa-2x"></i>
                                            </div>
                                        </div>
                                        <div class="my-auto">
                                            <h4 class="fw-bolder mb-0">{{ count.unit }}</h4>
                                            <p class="card-text font-small-3 mb-0">Unit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Statistics Card -->
            </div>
        </section>
    </div>
</template>

<script>
export default {

    data: () => ({
        count: {
            meeting: 0,
            member: 0,
            title: 0,
            unit: 0,
        },
        activity_logs: [],
    }),

    computed: {
        user: function() {
            return JSON.parse(this.$store.getters.user);
        },
    },

    mounted() {
        this.$root.setPageHeader('Dashboard', 'GMF Employees Club');
        this.initData();
    },

    methods: {
        initData: function() {
            axios.get('/api/dashboard')
            .then( res => {
                this.count = res.data.count;
                this.activity_logs = res.data.activity_logs;
            })
        },

        goTo: function(page) {
            if(page == 'meeting') this.$router.push({name: 'meeting.index'});
            else if(page == 'member') this.$router.push({name: 'member.index'});
            else if(page == 'title') this.$router.push({name: 'title.index'});
            else if(page == 'unit') this.$router.push({name: 'unit.index'});
        }
    }
}
</script>

<style>

</style>