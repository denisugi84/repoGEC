<template>
    <div>

        <AdminInfo />

        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" v-if="$can('unit-detail')">
                        <a class="nav-link active" id="info-tab" data-bs-toggle="tab" href="#info" aria-controls="info"
                            role="tab" aria-selected="true"><i class="fa fa-info-circle"></i> Informasi</a>
                    </li>
                    <li v-if="$can('unit-edit')" class="nav-item">
                        <a class="nav-link" id="member-tab" data-bs-toggle="tab" href="#member"
                            aria-controls="member" role="tab" aria-selected="false"><i class="fa fa-users"></i> Member ({{ members.length }})</a>
                    </li>
                    
                    <li v-if="$can('unit-edit')" class="nav-item">
                        <a class="nav-link" id="edit-tab" data-bs-toggle="tab" href="#edit"
                            aria-controls="edit" role="tab" aria-selected="false"><i class="fa fa-pencil"></i> Edit</a>
                    </li>
                    <li v-if="$can('unit-delete')" class="nav-item">
                        <a class="nav-link" id="delete-tab" data-bs-toggle="tab" href="#delete" aria-controls="delete"
                            role="tab" aria-selected="false"><i class="fa fa-trash"></i> Hapus</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div v-if="$can('unit-detail')" class="tab-pane active" id="info" aria-labelledby="info-tab" role="tabpanel">
                        <InfoUnit :unit="unit" :member_length="members.length" />
                    </div>
                    <div v-if="$can('unit-edit')" class="tab-pane" id="member" aria-labelledby="member-tab" role="tabpanel">
                        <div class="card border border-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-10">
                                        <input type="text" style="width: 100%" @keyup.enter="getMember" v-model="searchMember.searchTerm" class="form-control"
                                                    placeholder="Enter to Search">
                                    </div>
                                    <div class="col-2">
                                        <div class="float-end">
                                            <button class="btn btn-outline-dark" data-bs-toggle="modal"
                                                data-bs-target="#addMemberModal" @click="loadMember">
                                                <i class="fa fa-plus"></i> Tambah Member
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="members && (members.length > 0)">
                            <div class="col-md-3 mb-2" v-for="member in members" :key="member.id">
                                <MemberCard 
                                    :member="member" 
                                    :button="false" 
                                    :from_unit="true" 
                                    @deleteMemberFromUnit="deleteMemberFromUnit"
                                />
                            </div>
                        </div>
                        <NoData :desc="'Tidak ada Data Member pada Jabatan. Tambahkan Member dengan klik tombol dibawah ini'" v-else>
                            <template v-slot:button>
                                <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#addMemberModal" @click="loadMember">
                                    <i class="fa fa-plus"></i> Tambah Member
                                </button>
                            </template>
                        </NoData>
                    </div>
                    <div  v-if="$can('unit-edit')" class="tab-pane" id="edit" aria-labelledby="edit-tab" role="tabpanel">
                        <Form :unit="unit" />
                    </div>
                    <div v-if="$can('unit-delete')" class="tab-pane" id="delete" aria-labelledby="delete-tab" role="tabpanel">
                        <DeleteUnit :unit="unit" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Member Modal-->
        <div class="modal fade" id="addMemberModal" tabindex="-1" aria-labelledby="addMemberModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addMemberModalLabel">Tambah Anggota Baru pada {{ unit.unit }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <vue-good-table :search-options="{
                            enabled: true,
                            trigger: 'enter',
                            skipDiacritics: true,
                            placeholder: 'Type and enter to search'
                        }" mode="remote" @on-selected-rows-change="selectionChanged" @on-search="onColumnSearch"
                            @on-page-change="onPageChange" @on-sort-change="onSortChange"
                            @on-column-filter="onColumnFilter" @on-per-page-change="onPerPageChange"
                            :totalRows="table.totalRows" :pagination-options="{
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
                        }" :columns="table.columns" :rows="table.rows" styleClass="vgt-table condensed pgTble">
                            <!-- <div slot="table-actions">
                            This will show up on the top right of the table. 
                        </div>-->
                            <div slot="selected-row-actions">
                                <!-- <span v-on:click="massDeleteSiswa()" class="badge badge-danger pointer">
                                <i class="fa fa-trash"></i> Hapus Masal Siswa
                            </span> -->
                            </div>

                            <template slot="table-row" style="background-color: #c5e1a5" slot-scope="props">
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
                                    <span v-else>
                                        N/A
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

                                <span v-if="props.column.field == 'ttl'">
                                    {{ props.row.tempat_lahir }}, {{ $root.indonesianDate(props.row.tanggal_lahir) }}
                                </span>
                                <span v-if="props.column.field == 'unit'">
                                    <span v-if="props.row.unit">
                                        {{ props.row.unit.unit }} - {{ props.row.unit.dinas }}
                                    </span>
                                    <span v-else>N/A</span>
                                </span>
                                <span v-if="props.column.field == 'action'">
                                    <div class="badge bg-primary pointer" @click="addMemberToUnit(props.row)"><i class="fa fa-plus"></i> Tambah Anggota</div>
                                </span>
                            </template>
                        </vue-good-table>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Add Member Modal -->
    </div>
</template>

<script>

import { VueGoodTable } from 'vue-good-table'

import InfoUnit from "@/pages/unit/components/Info.vue";
import MemberCard from "@/pages/member/components/Card";
import Form from "@/pages/unit/components/Form";
import DeleteUnit from "@/pages/unit/components/DeleteUnit";
import AdminInfo from "@/components/partials/AdminInfo";

import 'vue-good-table/dist/vue-good-table.css'

export default {

    components: {
        VueGoodTable, AdminInfo,
        MemberCard, InfoUnit, Form, DeleteUnit
    },

    data: () => ({
        unit: {
            id: '',
            unit: '',
            dinas: '',
        },

        
        members: [],

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
                    label: '',
                    field: 'action',
                    sortable: false,
                }
            ],
            rows: [],
            last_page: 0,
            totalRows: 0,
            serverParams: {
                doesnt_have_unit: 'y',
                trashed: 'n',
                dinas: '',
                unit: '',
                status: '',
                searchTerm: '',
                page: 1,
                perPage: 10,
            },
        },

        searchMember: {
            all_data: 'y',
            dinas: '',
            unit: '',
        }
    }),

    mounted() {
        this.initData().then((data) => {
            this.searchMember.unit = data.id;
            this.searchMember.dinas = data.dinas;
            this.getMember();
        });
    },

    methods: {
        initData: function() {

            $.LoadingOverlay("show");

            return new Promise((resolve) => {
                axios.get(`/api/unit/${this.$route.params.unit_id}`, {params: this.table.serverParams})
                .then( res => {
                    this.unit = res.data;

                    this.$root.setPageHeader(this.unit.unit, `Dinas ${this.unit.dinas}`);
                    resolve(res.data);
                })
                .catch(e => {
                    console.log("Error: " + e);
                    resolve(e.response);
                })
                .then( () => {
                    $.LoadingOverlay("hide");
                })
            });
        },

        getMember: function() {
            let params = this.searchMember;
            axios.get('/api/member', {
                    params: params
                })
                .then(res => {
                    console.log("Hei, i got member from ", res.data);
                    this.members = res.data;
                })
                .catch(e => {
                    console.log(e.response);
                })
                .then(() => {
                    $.LoadingOverlay("hide");
                });
        },


        loadMember: function () {

            axios.get('/api/member', {
                    params: this.table.serverParams
                })
                .then(res => {
                    this.table.rows = res.data.data;
                    this.table.totalRows = res.data.total;
                    this.table.last_page = res.data.last_page;

                    setTimeout(() => {
                        $(".banner").css("height", "110px");
                    }, 2000);
                })
                .catch(e => {
                    console.log(e.response);
                })
                .then(() => {
                    $.LoadingOverlay("hide");
                });
        },

        addMemberToUnit: function(member) {
            swal({
                title: `Anda akan menambahkan ${member.nama} pada ${this.unit.unit}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $('#addMemberModal').modal('hide');
                    $.LoadingOverlay("show");
                    axios.put(`/api/unit/${this.unit.id}/add_member`, {
                        member_id: member.id
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            this.getMember();
                            toastr.success(res.data.message, "Success!");
                        } else {
                            swal("Please check your input", res.data.message, "warning");
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

        deleteMemberFromUnit: function(member) {
            swal({
                title: `Anda akan menghapus ${member.nama} dari ${this.unit.unit}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $.LoadingOverlay("show");
                    axios.put(`/api/unit/${this.unit.id}/delete_member`, {
                        member_id: member.id
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            this.getMember();
                            toastr.success(res.data.message, "Success!");
                        } else if(res.data.status == false) {
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

            this.loadMember();
        },

        onPageChange(params) {
            this.updateParams({ page: params.currentPage });
            this.loadMember();
        },

        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.loadMember();
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field,
            });
            this.updateParams({ page: 1 });
            this.loadMember();
        },

        onColumnFilter(params) {
            let col_filter = params.columnFilters;
            // this.updateParams(params)
            let new_params = {
                page: 1,
                // new
            };
            this.updateParams(new_params);
            this.loadMember();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });

            this.loadMember();
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
    },
}
</script>

<style scoped>
table {
    border-spacing: 30px;
}

</style>