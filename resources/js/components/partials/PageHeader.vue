<template>
    <div class="bookmark-wrapper d-flex align-items-center">
        <div class="is-mobile">
            <h4 class="header-text"><span id="header-text-value">{{ $route.params.title }}</span><br><small class="header-subtext" id="header-subtext-value">{{ $route.params.sub_title }}</small></h4>
        </div>
        <ul class="nav navbar-nav d-xl-none">
            <li class="nav-item"><a class="nav-link menu-toggle" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu ficon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a></li>
          </ul>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    data: () => ({
        page: {
            title: '',
            sub_title: '',
        }
    }),

    methods: {
        changePageTitle: function($event) {
            alert('emit');
            this.title = $title
        },
    },
}
</script>


<style scoped>

</style>