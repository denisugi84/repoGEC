<template>
    <div>
        <!-- TODO : Harus diganti, tampilan nya jadi dilihat per LEVEL dulu baru nama jabata nya -->
        <AdminInfo v-if="$can('title-detail')" />

        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" v-if="$can('title-edit')">
                        <a class="nav-link active" id="access-tab" data-bs-toggle="tab" href="#access"
                            aria-controls="access" role="tab" aria-selected="false"><i class="fa fa-list"></i> Daftar Akses ({{ title.permission.length }})</a>
                    </li>
                    <li v-if="$can('title-detail')" class="nav-item">
                        <a class="nav-link" id="anggota-tab" data-bs-toggle="tab" href="#anggota"
                            aria-controls="profile" role="tab" aria-selected="false"><i class="fa fa-users"></i> Member / Anggota ({{ title.member.length }})</a>
                    </li>
                    <li v-if="$can('title-edit')" class="nav-item">
                        <a class="nav-link" id="edit-tab" data-bs-toggle="tab" href="#edit"
                            aria-controls="edit" role="tab" aria-selected="false"><i class="fa fa-pencil"></i> Edit</a>
                    </li>
                    <li v-if="$can('title-delete')" class="nav-item">
                        <a class="nav-link" id="delete-tab" data-bs-toggle="tab" href="#delete"
                            aria-controls="delete" role="tab" aria-selected="false"><i class="fa fa-trash"></i> Hapus</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div v-if="$can('title-edit')" class="tab-pane active" id="access" aria-labelledby="access-tab" role="tabpanel">
                        <Permission :title="title" />
                    </div>
                    <div v-if="$can('title-detail')" class="tab-pane" id="anggota" aria-labelledby="anggota-tab" role="tabpanel">
                        <div class="alert alert-warning" v-if="title.multiple_member != 'y'">
                            <div class="alert-body">
                                <i class="fa fa-exclamation-triang"></i>
                                Maksimal Anggota pada Jabatan ini hanya 1 anggota
                            </div>
                        </div>
                        
                        <div class="card border border-2" v-if="title.multiple_member == 'y'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input type="text"  @keyup.enter="initData" class="form-control" placeholder="Enter to Search">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="float-end">
                                            <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#addMemberModal" @click="loadMember">
                                                <i class="fa fa-plus"></i> Tambah Member
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="title.member && (title.member.length > 0)">
                            <div class="col-md-4" v-for="member in title.member" :key="member.id">
                                <MemberCard 
                                    :member="member" 
                                    :button="false" 
                                    styles="parent-style" 
                                    :from_title="true" 
                                    @clicked="deleteMemberTitle"
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
                    <div v-if="$can('title-edit')" class="tab-pane" id="edit" aria-labelledby="edit-tab" role="tabpanel">
                        <EditMember v-on:initData="initData" />
                    </div>
                    <div v-if="$can('title-delete')" class="tab-pane" id="delete" aria-labelledby="delete-tab" role="tabpanel">
                        <DeleteMember :title="title" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Member Modal-->
        <div class="modal fade" id="addMemberModal" tabindex="-1" aria-labelledby="addMemberModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addMemberModalLabel">Tambah Anggota Baru pada {{ title.nama }}</h5>
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
                                    <div class="badge bg-primary pointer" @click="addMemberTitle(props.row)"><i class="fa fa-plus"></i> Tambah Anggota</div>
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
import AdminInfo from "@/components/partials/AdminInfo";
import MemberCard from "@/pages/member/components/Card";
import Permission from "@/pages/title/components/Permission";
import DeleteMember from "@/pages/title/components/DeleteMember";
import EditMember from "@/pages/title/components/EditMember";

import 'vue-good-table/dist/vue-good-table.css'

export default {

    components: {
        VueGoodTable,
        AdminInfo, MemberCard, Permission, DeleteMember, EditMember,
    },

    data: () => ({
        title: {
            permission: [],
            member: [],
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
                    label: '',
                    field: 'action',
                    sortable: false,
                }
            ],
            rows: [],
            last_page: 0,
            totalRows: 0,
            serverParams: {
                doesnt_have_title: 'y',
                trashed: 'n',
                dinas: '',
                unit: '',
                status: '',
                searchTerm: '',
                page: 1,
                perPage: 10,
            },
        },

    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: async function() {
            $.LoadingOverlay("show");
            await axios.get(`/api/title/${this.$route.params.title_id}`)
            .then( res => {
                this.title = res.data;
                this.$root.setPageHeader(this.title.nama, this.title.level);
                setTimeout(() => {
                    $(".banner").css("height", "110px");
                }, 2000);
            })
            .catch ( e => {
                console.log(e.response);
            })
            .then(() => {
                $.LoadingOverlay("hide");
            });

        },

        loadMember: function() {

            return new Promise((resolve) => {
                axios.get('/api/member', {params: this.table.serverParams})
                .then( res => {
                    this.table.rows = res.data.data;
                    this.table.totalRows = res.data.total;
                    this.table.last_page = res.data.last_page;

                    this.$root.setPageHeader('Management Member', `Fetched ${this.table.rows.length} from total ${this.table.totalRows} ${(this.table.serverParams.trashed == 'y' ? 'trashed' : '')} data(s)`)
                })
                .catch ( e => {
                    console.log(e.response);
                })
                .then(() => {
                });
            });
        },

        addMemberTitle: function(member) {
            swal({
                title: `Anda akan menambahkan ${member.nama} pada ${this.title.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $('#addMemberModal').modal('hide');
                    $.LoadingOverlay("show");
                    axios.put(`/api/title/${this.title.id}/add_member`, {
                        member_id: member.id
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            this.initData();
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

        deleteMemberTitle: function(member) {
            swal({
                title: `Anda akan menghapus ${member.nama} dari ${this.title.nama}`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $('#addMemberModal').modal('hide');
                    $.LoadingOverlay("show");
                    axios.put(`/api/title/${this.title.id}/delete_member`, {
                        member_id: member.id
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            this.initData();
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
    }
}
</script>

<style scoped>


</style>