<template>
    <div>
        <form @submit.prevent="saveData">
            <div class="row">
                <div class="col-md-8 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="host">SMTP Host <Required /></label>
                                <input type="text" v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.host) && (error_validation.host.length > 0),
                                    'is-valid' : !error_validation.unit && this.submitted == true 
                                }" placeholder="Example: smtp.mail.com" class="form-control" id="host" v-model="smtp.host"/>
                            
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.host" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="smtp_auth">Auth <Required /></label>
                                <select name="smtp_auth" id="smtp_auth" v-model="smtp.smtp_auth" class="form-control">
                                    <option :value="1">True</option>
                                    <option :value="0">False</option>
                                </select>
                            
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.smtp_auth" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="form-group" v-if="smtp.smtp_auth">
                                <label for="smtp_auth">Username <Required /></label>
                                <input v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.username) && (error_validation.username.length > 0),
                                    'is-valid' : !error_validation.username && this.submitted == true 
                                }" type="text" placeholder="username@mail.com" class="form-control" id="username" v-model="smtp.username"/>
                            
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.username" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="form-group" v-if="smtp.smtp_auth">
                                <label for="password">Password <Required /></label>
                                <input v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.password) && (error_validation.password.length > 0),
                                    'is-valid' : !error_validation.password && this.submitted == true 
                                }" type="password" placeholder="Your Secret Password" class="form-control" id="password" v-model="smtp.password"/>
                            
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.password" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="port">Port <Required /></label>
                                <input v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.port) && (error_validation.port.length > 0),
                                    'is-valid' : !error_validation.port && this.submitted == true 
                                }" type="number" placeholder="587" class="form-control" id="port" v-model="smtp.port"/>
                            
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.port" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="protocol">Protocol <Required /></label>
                                <select v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.smtp_secure) && (error_validation.smtp_secure.length > 0),
                                    'is-valid' : !error_validation.smtp_secure && this.submitted == true 
                                }" name="protocol" id="protocol" v-model="smtp.smtp_secure" class="form-control">
                                    <option value="tls">TLS</option>
                                    <option value="ssl">SSL</option>
                                </select>
                            
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.smtp_secure" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="alert alert-warning" role="alert">
                        <h4 class="alert-heading"><i class="fa fa-exclamation-triangle"></i> Instruction</h4>
                        <div class="alert-body">
                            <ul class="warning-list">
                                <li>Form with
                                    <Required /> is should be filled / can't let blank</li>
                                <li>Please fill form with correct data and do it with your own responsibility</li>
                                <li>Click Save button below this after you finished filled all necessary form</li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-grid gap-1">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-check"></i> Save Data</button>
                        <button class="btn btn-warning" @click="resetForm" type="button"><i class="fa fa-refresh"></i> Reset
                            Form</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        smtp: {
            host: '',
            smtp_auth: true,
            username: '',
            password: '',
            smtp_secure: 'tls',
            port: 587,
        },

        error_validation: {},

        submitted: false,
    }),

    mounted() {
        this.$root.setPageHeader('Pengaturan Email Client', 'SMTP Client');
        this.initData();
    },

    methods: {
        initData: function() {
            $.LoadingOverlay("show");
            axios.get('/api/setting/email')
            .then( res => {
                this.smtp = res.data
            })
            .catch(e => {
                console.log(e);
            })
            .then(() => {
                $.LoadingOverlay("hide");
            })
        },

        saveData: function() {
            swal({
                title: `Anda akan memperbaharui Pengaturan SMTP Client / Email`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    
                    this.submitted = true;
                    $.LoadingOverlay("show");
                    axios.post('/api/setting/email', this.smtp)
                    .then(res => {
                        if(res.data.status == true) {
                            this.initData();
                            toastr.success(res.data.message, "Success!");
                        } else {
                            swal("Please check your input", res.data.message, "warning");
                            this.error_validation = res.data.data;
                            this.submitted = false;
                            this.applyValidator(res.data.data);
                        }
                    })
                    .catch ( e => {
                        console.log(e.response);
                    })
                    .then(() => {
                        $.LoadingOverlay("hide");
                    });
                }
            });
        },

        resetForm: function() {
            this.initData();
        },

        applyValidator: function(error_validation) {
            this.error_validation = error_validation;
            let obj = error_validation;
            Object.keys(this.error_validation).forEach(function (key) {


            });
        },
    }
}
</script>

<style>

</style>