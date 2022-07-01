<template>
    <div>
        <Form :member="null" />
    </div>
</template>

<script>

import Form from "@/pages/member/components/Form"

// import member_format from "@/pages/member/components/member"

export default {

    data: () => ({
        // form: member_format
    }),

    components: {   
        Form
    },

    methods: {

    },
}
</script>