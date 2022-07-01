<template>
    <li class="nav-item dropdown dropdown-notification me-25">
        <a class="nav-link" href="#" data-bs-toggle="dropdown">
            <i class="ficon" data-feather="bell"></i>
            <span class="badge rounded-pill bg-danger badge-up" v-if="count > 0">{{ count }}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-media dropdown-menu-end">
            <li class="dropdown-menu-header">
                <div class="dropdown-header d-flex">
                    <h4 class="notification-title mb-0 me-auto">Notifications</h4>
                    <!-- TODO: Set Notification Here -->
                    <!-- <div class="badge rounded-pill badge-light-primary">6 New</div> -->
                </div>
            </li>
            <li class="scrollable-container media-list" >
                <a v-for="notification in notifications" :key="notification.id" class="d-flex" @click="goToAction(notification)" href="javascript:void(0)">
                    <div class="list-item d-flex align-items-start">
                        <div class="me-1">
                            <div class="avatar"><img
                                    :src="notification.member.avatar"
                                    alt="avatar" width="32" height="32"></div>
                        </div>
                        <div class="list-item-body flex-grow-1">
                            <p class="media-heading">
                                <span class="fw-bolder">Menunggu Approval</span>
                            </p>
                            <small class="notification-text"> 
                                {{ notification.description }}
                            </small>
                        </div>
                    </div>
                </a>
                
                <div class="list-item align-items-center"  v-if="notifications.length == 0">
                    <center>
                        Tidak ada notifikasi. Baru
                    </center>
                </div>
            </li>
            <li class="dropdown-menu-footer">
                <router-link :to="{ name: 'notification.index' }" class="btn btn-primary w-100">Read all notifications</router-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    data: () => ({
        count: 0,
        notifications: [],
    }),

    mounted() {
        this.initData();
    },

    methods: {

        getCount: function() {
            axios.get('/api/notification/count?is_viewed=n')
            .then(res => {
                this.count = res.data;
            })
        },

        initData: function() {
            axios.get('/api/notification?preview=y')
            .then( res => {
                this.notifications = res.data;
                
                this.getCount();
            })
        },

        goToAction: function(notification) {
            if(notification.referal_id) {
                if(notification.action == 'member-approval') {
                    this.$router.push({name: 'member.detail', params: { member_id: notification.referal_id }})
                }
            } else {
                toastr.warning("Tidak dapat membuka Notifikasi");
            }

            this.setNotificationStatus(notification);
        },

        setNotificationStatus: function(notification) {
            axios.put(`/api/notification/${notification.id}/set_viewed`)
            .then( res => {
                this.initData();
            })
        },
    }
}
</script>

<style>

</style>