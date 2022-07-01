<template>
    <div class="mb-1 card pointer" @click="goToAction" v-bind:class="{ 'is-not-viewed': notification.is_viewed == 'n' }">
        <div class="card-body">
            <p class="mb-0 list-header">{{ notification.action | actionString }}</p> 
            <p class="mt-0 mb-0 list-subheader">
                {{ $root.indonesianDate(notification.created_at) }}
            </p>
            <hr>
            <MemberApproval v-if="notification.action == 'member-approval'" :notification="notification" />
        </div>
    </div>
</template>

<script>

import MemberApproval from "./action/MemberApproval.vue";

export default {

    components: {
        MemberApproval,
    },

    props: [
        'notification'
    ],
    
    filters: {
        actionString: function (action) {
            let str = ""

            if(action == 'member-approval') {
                str = "Menunggu Approval";
            }

            return str;
        }
    },

    methods: {
        goToAction: function() {
            let notification = this.notification;
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
        },
    }
}
</script>

<style scoped>
.card:hover {
    background: #c8e6c9;
}

.is-not-viewed {
    background: #e0f7fa;
}

.list-header {
    font-weight: bold;
    font-size: 14px;
}

.list-subheader {
    font-size: 12px;
    font-style: italic;
}

.list-description {
    font-size: 12px;
}
</style>