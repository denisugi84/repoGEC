<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="title">Judul <Required /></label>
                                    <input type="text" id="title" v-model="form.title" class="form-control"
                                        v-bind:class="{ 
                                            'is-invalid' : Array.isArray(error_validation.title) && (error_validation.title.length > 0),
                                            'is-valid' : !error_validation.title && this.submitted == true 
                                        }">
                                    <div class="invalid-feedback">
                                        <ul class="warning-list" v-for="(txt, i) in error_validation.title" :key="i">
                                            <li>{{ txt }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="location">Lokasi <Required /></label>
                                    <input type="text" id="location" v-model="form.location" class="form-control"
                                        v-bind:class="{ 
                                            'is-invalid' : Array.isArray(error_validation.location) && (error_validation.location.length > 0),
                                            'is-valid' : !error_validation.location && this.submitted == true 
                                        }">
                                    <div class="invalid-feedback">
                                        <ul class="warning-list" v-for="(txt, i) in error_validation.location" :key="i">
                                            <li>{{ txt }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="description">Deskripsi</label>
                                    <input type="text" id="description" v-model="form.description" class="form-control"
                                        v-bind:class="{ 
                                            'is-invalid' : Array.isArray(error_validation.description) && (error_validation.dinas.description > 0),
                                            'is-valid' : !error_validation.description && this.submitted == true 
                                        }">
                                    <div class="invalid-feedback">
                                        <ul class="warning-list" v-for="(txt, i) in error_validation.description"
                                            :key="i">
                                            <li>{{ txt }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="title">Notulen <Required /></label>
                                    <multiselect 
                                        v-bind:class="{ 
                                            'is-invalid' : Array.isArray(error_validation.notulen) && (error_validation.notulen.length > 0),
                                            'is-valid' : !error_validation.notulen && this.submitted == true
                                        }" 
                                        v-model="form.notulen" 
                                        :options="selection.notulen"
                                        :custom-label="notulenLabel"
                                        :allowEmpty="false"
                                        :preserveSearch="true"
                                        track-by="member"
                                        placeholder="Pilih Notulen"
                                        @search-change="debounceNotulen"
                                    />
                                    <div class="invalid-feedback">
                                        <ul class="warning-list" v-for="(txt, i) in error_validation.notulen" :key="i">
                                            <li>{{ txt }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="start">Tanggal Mulai <Required /></label>
                                    <input type="datetime-local" id="start" v-model="form.start" class="form-control"
                                        v-bind:class="{ 
                                            'is-invalid' : Array.isArray(error_validation.start) && (error_validation.start.length > 0),
                                            'is-valid' : !error_validation.start && this.submitted == true 
                                        }">
                                    <div class="invalid-feedback">
                                        <ul class="warning-list" v-for="(txt, i) in error_validation.start" :key="i">
                                            <li>{{ txt }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="end">Tanggal Selesai</label>
                                    <input type="datetime-local" id="end" v-model="form.end" class="form-control"
                                        v-bind:class="{ 
                                            'is-invalid' : Array.isArray(error_validation.end) && (error_validation.end.length > 0),
                                            'is-valid' : !error_validation.end && this.submitted == true 
                                        }">
                                    <div class="invalid-feedback">
                                        <ul class="warning-list" v-for="(txt, i) in error_validation.end"
                                            :key="i">
                                            <li>{{ txt }}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <label for="selected_member">Partisipan <Required /></label>
                                <div class="row">
                                    <!-- <div class="col-md-3">
                                        ok
                                    </div> -->
                                    <div class="col-12">
                                        <div class="row mb-1">
                                            <div class="col-md-5">
                                                <multiselect 
                                                    v-bind:class="{ 
                                                        'is-invalid' : Array.isArray(error_validation.title) && (error_validation.title.length > 0),
                                                        'is-valid' : !error_validation.title && this.submitted == true
                                                    }" 
                                                    v-model="table.serverParams.multiple_dinas" 
                                                    :options="selection.dinas"
                                                    :multiple="true"
                                                />
                                            </div>
                                            <div class="col-md-5">
                                                <div v-if="selection.unit.length > 0">
                                                    <multiselect 
                                                        track-by="id"
                                                        id="multiple-unit"
                                                        v-bind:class="{ 
                                                            'is-invalid' : Array.isArray(error_validation.title) && (error_validation.title.length > 0),
                                                            'is-valid' : !error_validation.title && this.submitted == true
                                                        }" 
                                                        v-model="table.serverParams.multi_unit" 
                                                        :options="selection.unit"
                                                        :multiple="true"
                                                        :custom-label="unitLabel"
                                                    />
                                                </div>
                                                <input class="form-control" type="text" disabled placeholder="Tidak Ada Data Unit. Pilih Dinas" v-else>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="d-grid">
                                                    <button class="btn btn-primary" @click="dinasOnChange">Filter</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="alert alert-primary mb-1" v-if="table.rows.length > 0">
                                            <div class="alert-body">
                                                <span>Memilih {{ table.selectedRows.length }} dari {{ table.rows.length }} member pada Unit. Klik <a href="javascript:void(0)" class="btn btn-sm btn-success" @click="setParticipant">disini</a> untuk {{ table.rows.length != table.selectedRows.length ? 'memilih' : 'menghapus' }} semua anggota / member untuk menjadi Partisipan</span>
                                            </div>
                                        </div>
                                        <div class="alert alert-warning" v-else>
                                            <div class="alert-body">
                                                Silahkan pilih Dinas untuk mencari data member / anggota
                                            </div>
                                        </div>

                                        <div class="table-responsive"  v-if="table.rows.length > 0">
                                            <vue-good-table
                                                ref="member-table"
                                                @on-select-all="setParticipant"
                                                :search-options="{ enabled: true }"
                                                :totalRows="table.totalRows"
                                                :pagination-options="{
                                                    enabled: true,
                                                    mode: 'pages',
                                                    perPage: table.serverParams.perPage,
                                                    position: 'bottom',
                                                    perPageDropdown: table.perPageDropDown,
                                                    dropdownAllowAll: false,
                                                    setCurrentPage: table.serverParams.page,
                                                    nextLabel: 'Next',
                                                    prevLabel: 'Prev',
                                                    rowsPerPageLabel: 'Rows per page',
                                                    ofLabel: 'of',
                                                    pageLabel: 'page', // for 'pages' mode
                                                    allLabel: 'All'
                                                    
                                                }"
                                                @on-selected-rows-change="onCheckboxChanged"
                                                :columns="table.columns"
                                                :rows="table.rows"
                                                styleClass="vgt-table condensed pgTble"
                                                :select-options="{ enabled: true, selectOnCheckboxOnly: true }"
                                            >
                                                <!-- <div slot="table-actions">
                                                    This will show up on the top right of the table. 
                                                </div>-->
                                                <div slot="selected-row-actions">
                                                    <!-- <span v-on:click="massDeleteSiswa()" class="badge badge-danger pointer">
                                                        <i class="fa fa-trash"></i> Hapus Masal Siswa
                                                    </span> -->
                                                </div>

                                                <template
                                                    slot="table-row"
                                                    style="background-color: #c5e1a5"
                                                    slot-scope="props"
                                                >
                                                    <span v-if="props.column.field == 'avatar'">
                                                        <img :src="props.row.avatar" style="height: 30px;" class="img-fluid">
                                                    </span>
                                                    <span v-if="props.column.field == 'nopeg'">
                                                        <router-link :to="{ name: 'member.detail', params: { member_id: props.row.id } }">
                                                            {{ props.row.nopeg }}
                                                        </router-link>
                                                    </span>
                                                    <span v-if="props.column.field == 'title'">
                                                        <span v-if="props.row.title">
                                                            {{ props.row.title.level }} - {{ props.row.title.nama }}
                                                        </span>
                                                        <span v-else style="color: grey;">
                                                            Anggota
                                                        </span>
                                                    </span>
                                                    <span v-if="props.column.field == 'nama'">
                                                        <router-link :to="{ name: 'member.detail', params: { member_id: props.row.id } }">
                                                            {{ props.row.nama }}
                                                        </router-link>
                                                    </span>
                                                    
                                                    <span v-if="props.column.field == 'is_active'">
                                                        <span v-if="props.row.is_active == 'y'" class="badge bg-success">Active</span>
                                                        <span v-else class="badge bg-danger">In-Active</span>
                                                    </span>

                                                    <span v-if="props.column.field == 'user_id'">
                                                        <span v-if="props.row.user_id" class="badge bg-primary">Yes</span>
                                                        <span v-else class="badge bg-danger">No</span>
                                                    </span>

                                                    <span v-if="props.column.field == 'ttl'">
                                                        {{ props.row.tempat_lahir }}, {{ $root.indonesianDate(props.row.tanggal_lahir) }}
                                                    </span>
                                                    <span v-if="props.column.field == 'unit'">
                                                        <span v-if="props.row.unit">
                                                            {{ props.row.unit.unit }} - {{ props.row.unit.dinas }} 
                                                        </span>
                                                        <span v-else>N/A</span>
                                                    </span>
                                                    <span v-if="props.column.field == 'email'">
                                                        {{ props.row.email }} 
                                                    </span>
                                                    <span v-if="props.column.field == 'phone'">
                                                        {{ props.row.phone }} 
                                                    </span>
                                                </template>
                                            </vue-good-table>
                                        </div>
                                    </div>
                                </div>
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
                    <button class="btn btn-primary" @click="proceedData"><i class="fa fa-check"></i> Save Data</button>
                    <button class="btn btn-warning" @click="resetForm" type="button"><i class="fa fa-refresh"></i> Reset Form</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import moment from "moment";
import { VueGoodTable } from 'vue-good-table'
import Multiselect from 'vue-multiselect'
import { debounce } from 'lodash';


import 'vue-good-table/dist/vue-good-table.css'

export default {

    components: {
        VueGoodTable, Multiselect,
    },

    props: [
        'meeting',
    ],

    data: () => ({
        action: 'save',
        url: '/api/meeting',
        form: {
            participants: [],
        },
        submitted: false,
        error_validation: {},

        selection: {
            dinas: [],
            unit: [],
            notulen: [],
        },

        selected: {
            multiple_dinas: "",
            unit: "",
        },

        notulenParams: {
            trashed: 'n',
            dinas: '',
            unit: '',
            multiple_dinas: [],
            multiple_unit: "",
            multi_unit: "",
            status: '',
            searchTerm: '',
            page: -1,
            perPage: 10,
            all_data: 'y',
        },

        table: {
            columns: [
                {
                    label: "",
                    field: "avatar",
                    sortable: false,
                },
                {
                    label: "Nopeg",
                    field: "nopeg",
                    sortable: true,
                },
                {
                    label: "Nama",
                    field: "nama",
                    sortable: true,
                },
                {
                    label: "Jabatan",
                    field: "title",
                    sortable: false,
                },
                {
                    label: "Unit",
                    field: "unit",
                    sortable: false,
                },
            ],
            rows: [],
            last_page: 0,
            totalRows: 0,
            selectedRows: [],
            serverParams: {
                trashed: 'n',
                dinas: '',
                unit: '',
                multiple_dinas: [],
                multiple_unit: "",
                multi_unit: "",
                status: '',
                searchTerm: '',
                page: 1,
                perPage: 10,
                all_data: 'y',
            },
        },
    }),

    
    created() {
        this.debounceNotulen = debounce(this.searchNotulen, 1000);
    },

    mounted() {
        this.checkAction();
        this.getDinas();
        // this.getMember().then( data => {
        // });
    },

    methods: {

        notulenLabel: function({nama, nopeg, avatar}) {
            return `${nama} - ${nopeg}`;
        },

        unitLabel: function({unit}) {
            return `${unit}`;
        },

        getMember: function() {

            $.LoadingOverlay("show");

            if(this.table.serverParams.multi_unit) {
                let units = this.table.serverParams.multi_unit.map(data => data.id);

                this.table.serverParams.multiple_unit = units;
            }

            return new Promise((resolve) => {
                axios.get(`/api/member`, {params: this.table.serverParams})
                .then( res => {
                    this.table.rows = res.data;
                    // this.table.totalRows = res.data.total;
                    // this.table.last_page = res.data.last_page;

                    resolve(res.data);
                })
                .catch(e => {
                    console.log("Error: " + e.response);
                    resolve(e.response);
                })
                .then( () => {
                    $.LoadingOverlay("hide");
                })
            });
        },

        searchNotulen(query) {
            this.notulenParams.searchTerm = query;

            if(query) {
                $.LoadingOverlay("show");
                axios.get('/api/member', {params: this.notulenParams})
                .then( res => {
                    this.selection.notulen = res.data;
                })
                .catch( e => {
                    console.log(e.response);
                })
                .then(() => {
                    $.LoadingOverlay("hide");
                });
            }
            // this.isLoading = true
            // ajaxFindCountry(query).then(response => {
            //     this.countries = response
            //     this.isLoading = false
            // })
        },

        checkAction: function() {
            if(this.meeting) {
                this.action = 'update';
                this.url += `/${this.$route.params.meeting_id}`;
                this.getMeeting();
            }
        },

        getMeeting: function() {
            axios.get(`/api/meeting/${this.$route.params.meeting_id}`)
            .then( res => {
                this.form = res.data;
                this.form.start = moment(this.form.start).format('yyyy-MM-DDTHH:mm');
                this.form.end = this.form.end ? moment(this.form.end).format('yyyy-MM-DDTHH:mm') : "";
                this.table.rows = this.form.member;
                this.setParticipant();
                this.initSelectedRows()
            });
        },

        getDinas: function() {
            axios.get('/api/dinas')
            .then( res => {
                this.selection.dinas = res.data;
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                // Always executed
            });
        },

        dinasOnChange: function() {
            $.LoadingOverlay("show");
            this.error_validation = {};
            this.submitted = false;

            // this.selected.multiple_dinas = dinas;

            this.selection.unit = [];

            axios.get('/api/unit', { params: this.table.serverParams })
            .then( res => {
                this.selection.unit = res.data;
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                // Always executed
                $.LoadingOverlay("hide");
            });

            this.getMember();
        },

        request: async function() {
            if(this.meeting) {
                return await axios.put(this.url, this.form);
            } else {
                return await axios.post(this.url, this.form);
            }
        },

        initSelectedRows: function() {
            
            let user_id = this.table.rows.map(el => {
                return el.id;
            });
            console.log(user_id);
            this.table.selectedRows = user_id;
        },

        onCheckboxChanged: function(params) {
            
            if(params) {
                let user_id = params.selectedRows.map(el => {
                    return el.id;
                });
                console.log(user_id);
            }
            this.table.selectedRows = params.selectedRows;
        },

        setParticipant: function() {
            this.table.rows.forEach(item => {
                if (item.vgtSelected) {
                    this.$set(item, 'vgtSelected', false);
                } else {
                    this.$set(item, 'vgtSelected', true);
                }
            }, this);

            // here
        },

        proceedData: async function () {

            this.form.participants = this.table.selectedRows.map(el => el.id);

            swal({
                title: `Anda akan ${this.action == 'save' ? 'menambahkan' : 'memperbaharui'} data meeting`,
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
                            if(this.$route.params.meeting_id) {
                                this.$emit('initData');
                            } else {
                                this.$router.push({ name: 'meeting.index' });
                            }
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
                        this.submitted = true;
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

        // Vue-Good-Table Handler
        fitlerToggle: function () {
            if (this.is_filtered == false) {
                this.is_filtered = true;
            } else {
                this.is_filtered = false;
            }
        },

        selectionChanged(params) {
            this.selectionRow = params;

            this.table.selectedRows = [];

            for (let i = 0; i < params.selectedRows.length; i++) {
                this.table.selectedRows.push(params.selectedRows[i].id);
            }
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.getMember();
        },

        onPageChange(params) {
            this.updateParams({ page: params.currentPage });
            this.getMember();
        },

        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.getMember();
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field,
            });
            this.updateParams({ page: 1 });
            this.getMember();
        },

        onColumnFilter(params) {
            let col_filter = params.columnFilters;
            // this.updateParams(params)
            let new_params = {
                page: 1,
                // new
            };
            this.updateParams(new_params);
            this.getMember();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.getMember();
        },

        // load items is what brings back the rows from server
        loadItems() {
            this.handleDatatableChange(this.table.serverParams).then(() => {
                // this.loading.isLoading = false
            });
        },

        updateParams(newProps) {
            this.table.serverParams = Object.assign(
                {},
                this.table.serverParams,
                newProps
            );
        },
        // Vue-Good-Table Handler
    }
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style scoped>
</style>