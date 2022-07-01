<template>
    <div>
        <!-- <App  /> -->
        <router-view/>
        <!-- <Login v-else /> -->
    </div>
</template>

<script>

import App from "@/components/partials/App";
import Login from "@/pages/auth/Login";
export default {
    components: {
        App,
        Login,
    },

    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn;
        },

        user: function () {
            return JSON.parse(localStorage.getItem("user"));
        },

        today_date: function () {
            let raw_date = new Date();
            let month = raw_date.getMonth() + 1;
            let today_date =
                raw_date.getUTCFullYear() +
                "-" +
                month +
                "-" +
                raw_date.getUTCDate();

            return today_date;
        },
    },
}
</script>

<style>

</style>