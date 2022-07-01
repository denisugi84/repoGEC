/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import store from '@/store'
import router from '@/router/index.js'

import Permissions from "@/mixin/Permission";

import setPageHeader from "@/lib/set_pageheader";
import indonesianDate from "@/lib/date";
import checkImage from "@/lib/image";
import Vue from 'vue';

window.Vue = require('vue').default;


// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-layout', require('@/components/Layout.vue').default);

// Reuseable Components
Vue.component('Logo', require("@/components/partials/Logo.vue").default);
Vue.component('NoData', require("@/components/errors/NoData.vue").default);
Vue.component('Required', require('@/components/alert/Required.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.mixin(Permissions);

var mixin = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    
}


const app = new Vue({
    el: '#app',
    router, store,
    methods: {
        setPageHeader,
        indonesianDate,
        checkImage,
        goToTop: function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    }
})