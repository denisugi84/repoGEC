<template>
    <div>
        <Form />
    </div>
</template>

<script>

import Form from "@/pages/meeting/components/Form";

export default {
    components: {
        Form,
    },

    mounted() {
        this.$root.setPageHeader('Buat Meeting Baru', 'Form Pembuatan Meeting Baru');
    },
}
</script>

<style>

</style>