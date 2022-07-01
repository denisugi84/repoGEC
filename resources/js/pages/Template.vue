<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Template',
    data: () => ({
        title: '',
        sub_title: '',
    }),
}
</script>
