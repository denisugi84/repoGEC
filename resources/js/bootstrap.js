// window._ = require('lodash');
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')
window.toastr = require('toastr')

import store from '@/store'
toastr.options = {
    newestOnTop: true,
    closeButton: false,
    progressBar: true,
    preventDuplicates: false,
    showMethod: 'slideDown',
    timeOut: 4000, //default timeout,
}
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // console.log(error.response)

    // Exclude Error code that will be redirected to login page
    let error_codes = [500, 422, 404, 200, 401];

    if (!error_codes.includes(error.response.status)) {
        toastr.error(error.response.data.message + '<br> Something Wrong', 'Oopps!')

        store.dispatch('logout')
        .then(() => {
            window.location.href = "/login"
        })

        setTimeout(function () {
            window.location = '/';
        }, 3000);


    } else {
        return Promise.reject(error);
    }
});

if (localStorage.getItem('token')) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

window.axios.interceptors.response.use((response) => response, (error) => {
    let error_response = error.response;

    let error_message = error_response.data.message ? error_response.data.message : "Something Wrong";
    let error_status = error_response.status === 500 ? "error" : "warning";

    console.error(`Code:  ${error_response.status}`,  error_message);
// whatever you want to do with the error
    throw error;
});