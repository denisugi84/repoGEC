<template>
    <div>
        <form @submit.prevent="proceedData">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="unit">Unit <Required /></label>
                                <input type="text" id="unit" v-model="form.unit" class="form-control" 
                                v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.unit) && (error_validation.unit.length > 0),
                                    'is-valid' : !error_validation.unit && this.submitted == true 
                                }">
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.unit" :key="i">
                                        <li>{{ txt }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="dinas">Dinas <Required /></label>
                                <input type="text" id="dinas" v-model="form.dinas" class="form-control" 
                                v-bind:class="{ 
                                    'is-invalid' : Array.isArray(error_validation.dinas) && (error_validation.dinas.length > 0),
                                    'is-valid' : !error_validation.dinas && this.submitted == true 
                                }">
                                <div class="invalid-feedback">
                                    <ul class="warning-list" v-for="(txt, i) in error_validation.dinas" :key="i">
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
                                <li>Form with <Required /> is should be filled / can't let blank</li>
                                <li>Please fill form with correct data and do it with your own responsibility</li>
                                <li>Click Save button below this after you finished filled all necessary form</li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-grid gap-1">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-check"></i> Save Data</button>
                        <button class="btn btn-warning" @click="resetForm" type="button"><i class="fa fa-refresh"></i> Reset Form</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: [
        'unit',
    ],

    data: () => ({
        action: 'save',
        url: '/api/unit',
        form: {},
        submitted: false,
        error_validation: {},
    }),

    mounted() {
        this.checkAction();
    },

    methods: {
        checkAction: function() {
            if(this.unit) {
                this.action = 'update';
                this.url += `/${this.$route.params.unit_id}`;
                this.getUnit();
            }
        },

        getUnit: function() {
            axios.get(`/api/unit/${this.$route.params.unit_id}`)
            .then( res => {
                this.form = res.data;
            });
        },

        request: async function() {
            if(this.unit) {
                return await axios.put(this.url, this.form);
            } else {
                console.log('ok');
                return await axios.post(this.url, this.form);
            }
        },

        proceedData: async function () {

            swal({
                title: `Anda akan ${this.action == 'save' ? 'menambahkan' : 'memperbaharui'} data Unit`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    this.request()
                    .then(res => {
                        if(res.data.status == true) {
                            this.$router.push({ name: 'unit.index' });
                            this.submitted = true;
                            toastr.success(res.data.message, "Success!");
                        } else {
                            swal("Please check your input", res.data.message, "warning");
                            this.error_validation = res.data.data;
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

        applyValidator: function(error_validation) {
            this.error_validation = error_validation;
            let obj = error_validation;
            Object.keys(this.error_validation).forEach(function (key) {


            });
        },
        
        resetForm: function() {
            this.checkAction();
        },
    }
}
</script>

<style>

</style>