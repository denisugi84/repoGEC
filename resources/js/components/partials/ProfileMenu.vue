<template>
    <li class="nav-item dropdown dropdown-user">
        <a class="nav-link dropdown-toggle dropdown-user-link"
            id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <div class="user-nav d-sm-flex d-none">
                <span class="user-name fw-bolder">{{ user.username }}</span>
                <span class="user-status">{{ user.user_type }}</span>
            </div>
            <span class="avatar">
                <img class="round" :src="user.avatar" alt="avatar" height="40" width="40">
                <span class="avatar-status-online"></span>
            </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
            <router-link class="dropdown-item" :to="{ name: 'profile.index' }">
                <i class="me-50" data-feather="user"></i> Profile
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" :to="{ name: 'setting.mail' }">
                <i class="me-50" data-feather="settings"></i> Settings
            </router-link>
            <a class="dropdown-item" href="javascript:void(0)" @click="doLogout">
                <i class="me-50" data-feather="power"></i> Logout
            </a>
        </div>
    </li>
</template>

<script>
export default {
    computed: {
        // user: function() {
        //     return JSON.parse(localStorage.getItem('user'));
        // },
    },

    data: () => ({
        user: {}
    }),

    mounted() {
        this.getProfile();
    },

    methods: {

        getProfile: function() {
            axios.get('/api/user')
            .then( res => {
                this.user = res.data;
            })
        },

        doLogout: function () {
            swal({
                title: "Anda akan keluar dari Aplikasi",
                text: "Lanjut?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((value) => {
                if (value) {
                    axios
                        .post("/api/auth/logout")
                        .then((res) => {
                            if (res.data.status) {
                                this.$store.dispatch("logout").then(() => {
                                    toastr.success(
                                        "Successfully logged out. Redirecting to Login Page"
                                    );
                                    window.location.href = "/login";
                                });
                            }
                        });
                } else {
                    toastr.info("Canceled");
                }
            });
        },
    }
}
</script>

<style>

</style>