<template>
    <div>
        <!-- BEGIN: Header-->
        <Header />
        <!-- END: Header-->


        <!-- BEGIN: Main Menu-->
        <Menu />
        <!-- END: Main Menu-->

        <!-- BEGIN: Content-->
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <!-- Dashboard Analytics Start -->
                    <router-view></router-view>
                    <!-- Dashboard Analytics end -->
                </div>
            </div>
        </div>
        <!-- END: Content-->

        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>

        <!-- BEGIN: Footer-->
        <Footer />
        <!-- END: Footer-->
    </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
import Menu from "@/components/partials/Menu.vue";
export default {
    components: {
        Header,
        Footer,
        Menu,
    },

    mounted() {
        this.setStyle();
    },

    methods: {
        setStyle: function() {
            $('body').removeClass('blank-page');
        },
    }

}
</script>

<style>

</style>