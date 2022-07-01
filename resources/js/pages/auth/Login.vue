<template>
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-cover">
                    <div class="auth-inner row m-0">
                        <!-- Left Text-->
                        <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                            <div class="w-100 d-lg-flex align-items-center justify-content-center px-5"><img
                                    class="img-fluid"
                                    src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/pages/login-v2.svg"
                                    alt="Login V2" /></div>
                        </div>
                        <!-- /Left Text-->
                        <!-- Login-->
                        <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                            <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                <h2 class="card-title fw-bold mb-1" style="text-align: center;">
                                    <Logo style="height: 140px;" />
                                </h2>
                                <form class="auth-login-form mt-2" @submit.prevent="doLogin">
                                    <div class="mb-1">
                                        <label class="form-label" for="login-username">Username</label>
                                        <input class="form-control" id="login-username" v-model="form.username" type="text" name="login-username"
                                            placeholder="58xxxx" aria-describedby="login-username"
                                            autofocus="" tabindex="1" required />
                                    </div>
                                    <div class="mb-1">
                                        <div class="d-flex justify-content-between">
                                            <label class="form-label" for="login-password">Password</label><a
                                                href="auth-forgot-password-cover.html"><small>Forgot
                                                    Password?</small></a>
                                        </div>
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input class="form-control form-control-merge" v-model="form.password" id="login-password"
                                                type="password" name="login-password" placeholder="············"
                                                aria-describedby="login-password" tabindex="2" /><span
                                                class="input-group-text cursor-pointer"><i
                                                    data-feather="eye"></i></span>
                                        </div>
                                    </div>
                                    <!-- <div class="mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input" id="remember-me" type="checkbox"
                                                tabindex="3" />
                                            <label class="form-check-label" for="remember-me"> Remember Me</label>
                                        </div>
                                    </div> -->
                                    <button class="btn btn-primary w-100" tabindex="4">Sign in</button>
                                    <p class="text-center mt-2"><span>Belum punya akun?</span><router-link :to="{ name: 'register' }"><span>&nbsp;Daftar Disini</span></router-link></p>
                                    
                                </form>
                                <!-- <p class="text-center mt-2"><span>New on our platform?</span><a
                                       ><span>&nbsp;Create an account</span></a></p>
                                <div class="divider my-2">
                                    <div class="divider-text">or</div>
                                </div>
                                <div class="auth-footer-btn d-flex justify-content-center"><a
                                        class="btn btn-facebook" href="#"><i data-feather="facebook"></i></a><a
                                        class="btn btn-twitter white" href="#"><i data-feather="twitter"></i></a><a
                                        class="btn btn-google" href="#"><i data-feather="mail"></i></a><a
                                        class="btn btn-github" href="#"><i data-feather="github"></i></a>
                                </div> -->
                            </div>
                        </div>
                        <!-- /Login-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            username: "admin",
            password: "gec2022@",
        },
    }),

    mounted() {
        this.setStyle();
    },

    methods: {
        async doLogin() {
            if (this.form.username == "") {
                alert("Username can't be empty");
            } else if (this.form.password == "") {
                alert("Password can't be empty");
            } else {
                this.$store
                    .dispatch("login", this.form)
                    .then((res) => {
                        if (res.status == 200) {
                            swal(res.data.message, "Selamat Datang");

                            window.location = "/";
                            // this.$router.push({ name: "home" });
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                        if (error) {

                            if (error.response.status == 422) {
                                toastr.warning(Array.isArray(error.response.data) ? error.response.data[0] : error.response.data.message, "Please Check Your Input");
                            } else {
                                toastr.error(error.response.statusText, `Error Code : ${error.response.status}`);
                            }
                        }
                    });
            }
        },

        setStyle: function () {
            // class="auth-page" style="background-image: url('assets/images/p-1.png'); background-size: cover; background-position: center center;"
            $("body").addClass("auth-page");
            $("body").css({
                "background-image": "url('/assets/images/p-1.png')",
                "background-size": "cover",
                "background-position": "center center",
            });
        },
    },
};
</script>

<style scoped>
</style>