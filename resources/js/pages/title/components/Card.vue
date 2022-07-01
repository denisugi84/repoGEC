<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <span v-if="title.member_count == 1" style="font-weight: bold;">{{ title.limit_member[0].nama }}</span>
                <span v-else-if="title.member_count > 1">Total {{ title.member_count }} member</span>
                
                <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                    <li v-for="member_thumbnail in title.limit_member" :key="member_thumbnail.id" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                        title="" class="avatar avatar-sm pull-up"
                        :data-bs-original-title="member_thumbnail.nama">
                        <img class="rounded-circle" :src="member_thumbnail.avatar"
                            alt="Avatar">
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-between align-items-end mt-1 pt-25">
                <div class="role-heading">
                    <h5 class="fw-bolder mb-0" style="font-size: 14px;">{{ title.nama }}</h5>
                    <p class="mt-0">{{ title.level }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <span v-if="title.permission_count > 0">{{ title.permission_count }} akses</span>
                    <span v-else style="color: #f57c00;">Belum Ada Akses</span>
                </div>
                <div class="col-4">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <router-link v-if="$can('title-detail')" class="btn btn-primary btn-sm"
                            :to="{ name: 'title.detail', params: { title_id: title.id } }">
                            <small class="fw-bolder">Detail</small>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>

.card {
    border-radius: 8px;
}
</style>