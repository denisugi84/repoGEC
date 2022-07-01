<template>
    <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto">
                    <router-link class="navbar-brand" :to="{ name: 'home' }">
                        <span class="brand-logo">
                            <!-- Logo put here -->
                            <Logo style="height: 40px;" />
                        </span>
                        <h2 class="brand-text" style="color: #283981; font-size: 12px !important;"><i>GMF Employees<br>Club</i></h2>
                    </router-link>
                </li>
                <li class="nav-item nav-toggle">
                    <a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
                        <i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i
                            class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
                            data-feather="disc" data-ticon="disc"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main mt-1" id="main-menu-navigation" data-menu="menu-navigation">
                <li v-if="$can('dashboard')" class="nav-item" :class="{ 'active': subIsActive('/dashboard') }">
                    <router-link :to="{ name: 'home' }" class="d-flex align-items-center">
                        <i data-feather="home"></i>
                        <span class="menu-title text-truncate" data-i18n="dashboard">Dashboard</span>
                    </router-link>
                </li>
                <li v-if="$bulkCan('meeting-index',)" class=" navigation-header" style="margin-top: 22px;">
                    <span data-i18n="master-data">Menu</span>
                    <i data-feather="more-horizontal"></i>
                </li>
                <li v-if="$can('meeting-index')" class="nav-item" :class="{ 'active': subIsActive('/meeting/') }">
                    <router-link :to="{ name: 'meeting.index' }" class="d-flex align-items-center">
                        <i data-feather="globe"></i>
                        <span class="menu-title text-truncate" data-i18n="title">Meeting</span>
                    </router-link>
                </li>


                <li v-if="$bulkCan(
                    'member-index',
                    'title-index',
                    'unit-index',
                    'meeting-index',
                )" class=" navigation-header" style="margin-top: 22px;">
                    <span data-i18n="master-data">Master Data</span>
                    <i data-feather="more-horizontal"></i>
                </li>

                <li v-if="$bulkCan('member-index', 'member-approval')" class="nav-item has-sub" :class="{ 'open sidebar-group-active': subIsActive('/member/') }" style=""><a class="d-flex align-items-center"
                        href="#">
                        <i data-feather="users"></i>
                        <span class="menu-title text-truncate" data-i18n="Invoice">Member</span></a>
                    <ul class="menu-content">
                        <li v-if="$can('member-index')" :class="{ 'active': subIsActive('/member/index') }">
                            <router-link :to="{ name: 'member.index' }" class="d-flex align-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span class="menu-item text-truncate" data-i18n="List">Terdaftar</span>
                            </router-link>
                        </li>
                        <li v-if="$can('member-approval')" :class="{ 'active': subIsActive('/member/approval') }">
                            <router-link :to="{ name: 'member.approval' }" class="d-flex align-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span class="menu-item text-truncate" data-i18n="Preview">Menunggu Approval</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li v-if="$can('title-index')" class="nav-item" :class="{ 'active': subIsActive('/title/') }">
                    <router-link :to="{ name: 'title.index' }" class="d-flex align-items-center">
                        <i data-feather="briefcase"></i>
                        <span class="menu-title text-truncate" data-i18n="title">Jabatan</span>
                    </router-link>
                </li>
                <li v-if="$can('unit-index')"  class="nav-item" :class="{ 'active': subIsActive('/unit/') }">
                    <router-link :to="{ name: 'unit.index' }" class="d-flex align-items-center">
                        <i data-feather="layers"></i>
                        <span class="menu-title text-truncate" data-i18n="title">Dinas & Unit</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        subIsActive(input) {
            // $(".nav-item").removeClass("active");
            const paths = Array.isArray(input) ? input : [input];

            return paths.some((path) => {
                return this.$route.path.indexOf(path) === 0; // current path starts with this path string
            });
        },
    },
}
</script>

<style>

</style>