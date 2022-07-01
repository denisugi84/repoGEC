<template>
    <div>
        <div class="row">
            <div class="col-1">
                <img :src="notification.member.avatar" class="img-fluid rounded">
            </div>
            <div class="col-auto">
                <p class="mb-0">
                    {{ notification.member.nama }} baru saja mendaftar pada {{ $root.indonesianDate(notification.member.created_at) }}
                </p>
                <span class="mt-0">
                    <span v-if="notification.member.no_anggota"><i class="fa fa-check"></i> Sudah approve</span>
                    <span v-else><i class="fa fa-spinner"></i> Segera lakukan Approval</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'notification',
    ]
}
</script>

<style>

</style>