<template>
    <div>
        <AdminDashboard v-if="$can('dashboard')" />
    </div>
</template>

<script>

import AdminDashboard from "@/pages/dashboard/components/Admin";

export default {

    components: {
        AdminDashboard,
    }

}
</script>

<style>

</style>