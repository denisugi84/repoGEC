<template>
    <div>
        <div class="card" style="margin-bottom: 15px;">
            <div class="card-body">
                <div class="row g-3 align-items-center">
                    
                    <div class="col-md-2">
                        <input type="text" @keyup.enter="applyFilter" v-model="table.serverParams.searchTerm" id="searchTerm" class="form-control"
                            placeholder="Enter to Search" :disabled="view_mode == 'table'">
                    </div>
                    <div class="col-md-2">
                        <select name="dinas" id="dinas" v-model="table.serverParams.dinas" @change="dinasOnChange" class="form-control">
                            <option value="">-- All Dinas --</option>
                            <option v-for="(d, index) in dinas" :key="index" :value="d">{{ d }}</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select name="units" id="units" v-model="table.serverParams.unit" @change="applyFilter" class="form-control">
                            <option value="">-- All Unit --</option>
                            <option v-for="(u, index) in units" :key="index" :value="u.id">{{ u.unit }}</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select name="status" id="status" v-model="table.serverParams.status" @change="applyFilter" class="form-control">
                            <option value="">-- All Status --</option>
                            <option value="n">In-Active</option>
                            <option value="y">Active</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <div class="float-end">
                            <div class="btn-group">

                                <button class="btn btn-sm btn-secondary" @click="changeView">
                                    <span v-if="view_mode == 'card'"><i class="fa fa-table"></i> Table</span>
                                    <span v-else><i class="fa fa-th"></i> Card</span>
                                </button>
                                <button class="btn btn-sm btn-danger" v-if="table.serverParams.trashed != 'y'" @click="seeTrashed"><i class="fa fa-trash"></i></button>
                                <button class="btn btn-sm btn-warning" @click="resetFilter"><i class="fa fa-refresh"></i> Reset</button>
                                <!-- <router-link :to="{ name: 'member.add' }" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> Add Member</router-link> -->
                                <button  v-if="$can('member-add')" class="btn btn-sm btn-primary dropdown-toggle waves-effect waves-float waves-light"
                                    type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Add Member
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <router-link class="dropdown-item" :to="{ name: 'member.add' }">Buat Member</router-link>
                                    <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#importModal">Import XLSX</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="alert alert-primary" v-if="table.serverParams.trashed == 'y'">
            <div class="alert-body">
                <i class="fa fa-info-circle"></i> Menampilkan Data Member Yang Sudah Dihapus
            </div>
        </div>

        <div v-if="view_mode == 'card'">
            <div v-if="table.rows.length > 0">
                <div class="row">
                    <div class="col-md-3 mb-2" v-for="member in table.rows" :key="member.id">
                        <MemberCard :member="member" :button="true" @approveMember="approveMember" />
                    </div>
                </div>

                <paginate
                    v-model="table.serverParams.page"  
                    :page-count="table.last_page"
                    :container-class="'pagination pagination-primary justify-content-end'"
                    :prev-class="'page-item prev'"
                    :prev-link-class="'page-link'"
                    
                    :next-class="'page-item next'"
                    :next-link-class="'page-link'"
                    :page-class="'page-item'"
                    :page-link-class="'page-link'"
                    :active-class="'active'"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :click-handler="initData">
                </paginate>
            </div>
            <NoData :desc="'Tidak ada Data pada halam ini. Coba Reset Filter pada tombol dibawah ini'" v-else>
                <template v-slot:button>
                    <button class="btn btn-primary" @click="resetFilter"><i class="fa fa-refresh"></i> Reset Filter</button>
                </template>
            </NoData>
        </div>

        <div v-else-if="view_mode == 'table'">
            <vue-good-table
                :search-options="{
                    enabled: true,
                    trigger: 'enter',
                    skipDiacritics: true,
                    placeholder: 'Type and enter to search'
                }"
                mode="remote"
                @on-selected-rows-change="selectionChanged"
                @on-search="onColumnSearch"
                @on-page-change="onPageChange"
                @on-sort-change="onSortChange"
                @on-column-filter="onColumnFilter"
                @on-per-page-change="onPerPageChange"
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
                :columns="table.columns"
                :rows="table.rows"
                styleClass="vgt-table condensed pgTble"
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

        <ImportModal @initData="initData" />

    </div>
</template>

<script>

import { VueGoodTable } from 'vue-good-table'
import Paginate from 'vuejs-paginate';

import MemberCard from "@/pages/member/components/Card";
import ImportModal from "@/pages/member/components/ImportModal";

import 'vue-good-table/dist/vue-good-table.css'

export default {

    props: [
        'approval' // if value is true(bool) show awaiting member for approval from admin
    ],

    components: {
        'paginate': Paginate,
        ImportModal,
        MemberCard, 
        VueGoodTable
    },
    
    data: () => ({
        view_mode: 'card',
        laravelData: {},
        
        paginate: {
            last: 0,
            total: 0,
            total_page: 0,
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
                {
                    label: "Aktif",
                    field: "is_active",
                    sortable: true,
                },
                {
                    label: "Login",
                    field: "user_id",
                    sortable: true,
                },
                // {
                //     label: "TTL",
                //     field: "ttl",
                //     sortable: false,
                // },
                {
                    label: "Email",
                    field: "email",
                    sortable: false,
                },
                {
                    label: "Phone",
                    field: "phone",
                    sortable: false,
                },
            ],
            rows: [],
            last_page: 0,
            totalRows: 0,
            serverParams: {
                trashed: 'n',
                dinas: '',
                unit: '',
                status: '',
                searchTerm: '',
                page: 1,
                approval: false,
                perPage: 12,
            },
        },
        dinas: [],
        units: [],
    }),

    mounted() {
        this.initData();
        this.getDinas();
    },

    methods: {

        initData: function() {
            $.LoadingOverlay("show");

            return new Promise((resolve) => {

                this.table.serverParams.approval =  this.approval == true ? 'y': 'n',

                axios.get('/api/member', {params: this.table.serverParams})
                .then( res => {
                    this.table.rows = res.data.data;
                    this.table.totalRows = res.data.total;
                    this.table.last_page = res.data.last_page;

                    this.$root.setPageHeader(
                        'Management Member' + this.approval == true ? ' (Menunggu Konfirmasi)': '', 
                        `Fetched ${this.table.rows.length} from total ${this.table.totalRows} ${(this.table.serverParams.trashed == 'y' ? 'trashed' : '')} data(s)`
                    )
                })
                .catch ( e => {
                    console.log(e.response);
                })
                .then(() => {
                    $.LoadingOverlay("hide");
                    this.$root.goToTop();
                });
            });
        },

        applyFilter: function() {
            this.initData();
        },

        approveMember: function(member) {
            swal({
                title: `Harap memeriksa terlebih dahulu Informasi Calon Anggota sebelum melakukan Approval`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/member/${member.id}/approve`)
                    .then(res => {
                        if(res.data.status == true) {
                            toastr.success(res.data.message, "Success!");
                            this.initData();
                        } else if(res.data.status == false) {
                            this.error_validation = res.data.data;
                            swal("Gagal", res.data.message, "warning");
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

        multiApproval: function() {
            
        },

        resetFilter: function() {
            this.table.serverParams = {
                trashed: 'n',
                dinas: '',
                unit: '',
                status: '',
                searchTerm: '',
                page: 1,
                approval: this.approval == true ? 'y': 'n',
                perPage: 12,
            };
            this.initData();
        },

        seeTrashed: function() {
            this.table.serverParams = {
                trashed: 'y',
                dinas: '',
                unit: '',
                status: '',
                searchTerm: '',
                page: 1,
                approval: this.approval == true ? 'y': 'n',
                perPage: 12,
            };
            this.initData();
        },

        getDinas: function() {
            axios.get('/api/dinas')
            .then( res => {
                this.dinas = res.data;
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                // Always executed
            });
        },

        dinasOnChange: function() {
            this.table.serverParams.unit = "";
            this.units = [];

            axios.get('/api/unit', { params: this.table.serverParams })
            .then( res => {
                this.units = res.data;
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                // Always executed
            });

            this.initData();
        },

        changeView: function() {
            this.view_mode = this.view_mode == 'table' ? 'card' : 'table';
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
                this.table.selectedRows.push(params.selectedRows[i].pg_id);
            }
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.initData();
        },

        onPageChange(params) {
            this.updateParams({ page: params.currentPage });
            this.initData();
        },

        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.initData();
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field,
            });
            this.updateParams({ page: 1 });
            this.initData();
        },

        onColumnFilter(params) {
            let col_filter = params.columnFilters;
            // this.updateParams(params)
            let new_params = {
                page: 1,
                // new
            };
            this.updateParams(new_params);
            this.initData();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.initData();
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

<style scoped>

</style>