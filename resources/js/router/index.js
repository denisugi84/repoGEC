import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import store from "@/store";
import setPageHeader from "@/lib/set_pageheader";

// User router
Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        
        {
            path: "/",
            redirect: "/dashboard",
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            name: 'layout',
            component: () => import("@/components/partials/App.vue"),
            children: [
                {
                    path: "dashboard",
                    name: "home",
                    component: () => import("@/pages/Home.vue"),
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "setting/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "mail",
                            name: "setting.mail",
                            component: () => import("@/pages/settings/mail/Index.vue"),
                            meta: {
                                title: "Pengaturan E-Mail / SMTP Client",
                                sub_title: null
                            }
                        },
                    ]
                },
                {
                    path: "member/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "index",
                            name: "member.index",
                            component: () => import("@/pages/member/Index.vue"),
                            meta: {
                                title: "Manajemen Member",
                                sub_title: null
                            }
                        },
                        {
                            path: "approval",
                            name: "member.approval",
                            component: () => import("@/pages/member/Approval.vue"),
                            meta: {
                                title: "Manajemen Member (Menunggu Approval)",
                                sub_title: null
                            }
                        },
                        {
                            path: "detail/:member_id",
                            name: "member.detail",
                            component: () => import("@/pages/member/Detail.vue"),
                            meta: {
                                title: '-',
                                sub_title: "Detail Member"
                            },
                        },
                        {
                            path: "add",
                            name: "member.add",
                            component: () => import("@/pages/member/Add.vue"),
                            meta: {
                                title: "Add Member",
                                sub_title: null
                            }
                        },
                    ]
                },
                {
                    path: "title/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "index",
                            name: "title.index",
                            component: () => import("@/pages/title/Index.vue"),
                            meta: {
                                title: "Title Management",
                                sub_title: null
                            }
                        },
                        {
                            path: "detail/:title_id",
                            name: "title.detail",
                            component: () => import("@/pages/title/Detail.vue"),
                            meta: {
                                title: "Detail Jabatan",
                                sub_title: null
                            }
                        },
                    ]
                },
                
                {
                    path: "unit/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "index",
                            name: "unit.index",
                            component: () => import("@/pages/unit/Index.vue"),
                            meta: {
                                unit: "UnitManagement",
                                sub_unit: null
                            }
                        },
                        {
                            path: "add",
                            name: "unit.add",
                            component: () => import("@/pages/unit/Add.vue"),
                            meta: {
                                unit: "Buat Unit",
                                sub_unit: null
                            }
                        },
                        {
                            path: "detail/:unit_id",
                            name: "unit.detail",
                            component: () => import("@/pages/unit/Detail.vue"),
                            meta: {
                                unit: "Detail Unit",
                                sub_unit: null
                            }
                        },
                    ]
                },
                {
                    path: "notification/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "index",
                            name: "notification.index",
                            component: () => import("@/pages/notification/Index.vue"),
                            meta: {
                                title: "Notification",
                                sub_title: null
                            }
                        },
                    ]
                },
                
                {
                    path: "profile/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "index",
                            name: "profile.index",
                            component: () => import("@/pages/profile/Index.vue"),
                            meta: {
                                title: "Profile",
                                sub_title: null
                            }
                        },
                    ]
                },
                {
                    path: "meeting/",
                    component: () => import("@/pages/Template"),
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: "index",
                            name: "meeting.index",
                            component: () => import("@/pages/meeting/Index.vue"),
                            meta: {
                                title: "Meeting",
                                sub_title: null
                            }
                        },
                        {
                            path: "add",
                            name: "meeting.add",
                            component: () => import("@/pages/meeting/Add.vue"),
                            meta: {
                                title: "Buat Meeting",
                                sub_title: null
                            }
                        },
                        {
                            path: "detail/:meeting_id",
                            name: "meeting.detail",
                            component: () => import("@/pages/meeting/Detail.vue"),
                            meta: {
                                title: "Meeting",
                                sub_title: null
                            }
                        },
                    ]
                },
            ],
        },
        
        {
            path: '/auth',
            name: 'auth',
            component: () => import("@/components/partials/Auth.vue"),
            children: [
                {
                    path: "/login",
                    name: "login",
                    component: () => import("@/pages/auth/Login.vue"),
                    meta: {
                        layout: 'AuthLayout',
                        requiresAuth: false
                    }
                },
                {
                    path: "/register",
                    name: "register",
                    component: () => import("@/pages/auth/Register.vue"),
                    meta: {
                        requiresAuth: false
                    }
                },
            ]
        },
        
    ]
});

var vm = this;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {

        setPageHeader(null, null);
        if (store.getters.isLoggedIn) {
            function errorResponseHandler(error) {
                // check for errorHandle config
                if (
                    error.config.hasOwnProperty("errorHandle") &&
                    error.config.errorHandle === false
                ) {
                    return Promise.reject(error);
                }

                // if has response show the error
                if (error.response) {
                    if (error.response.data.message == "Unauthenticated.") {
                        store.dispatch("logout").then(() => {
                            window.location.href = "/login";
                        });
                    }
                }
            }

            // apply interceptor on response
            axios.interceptors.response.use(
                response => response,
                errorResponseHandler
            );

            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeResolve((to, from, next) => {
    if (to.path) {
        // window.confirm('Do you really want to leave? you have unsaved changes!')
        // if (window.confirm("Do you really want to leave?")) {
        // }
    }
    next();
});

router.afterEach((to, from, next) => {
    // pace.done()
});

export default router;
