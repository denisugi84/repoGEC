<template>
    <div>
        <div>
            <AdminInfo />
            <div class="card" style="margin-bottom: 15px;">
                <div class="card-body">
                    <div class="row g-3 align-items-center">
                        <div class="col-4">
                            <input type="text" @keyup.enter="applyFilter" v-model="table.serverParams.searchTerm"
                                id="searchTerm" class="form-control" placeholder="Enter to Search">
                        </div>
                        <div class="col-4">
                            <multiselect v-model="table.serverParams.level" :options="selection.level" :multiple="true"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Pilih satu atau lebih" :preselect-first="true">
                            </multiselect>
                        </div>
                        <div class="col-4">
                            <div class="float-end">
                                <button class="btn btn-warning btn-sm" @click="resetFilter"><i class="fa fa-refresh"></i> Reset</button>
                                <button class="btn btn-primary btn-sm" @click="initData"><i class="fa fa-check"></i> Terapkan</button>
                                <button v-if="$can('title-add')" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#newData"><i class="fa fa-plus"></i> Tambah Jabatan</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="table.rows.length > 0">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6" v-for="title in table.rows" :key="title.id">
                        <TitleCard :title="title" />
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
                    <button  class="btn btn-primary" @click="resetFilter"><i class="fa fa-refresh"></i> Reset Filter</button>
                </template>
            </NoData>

            <Modal @newData="newData" />
        </div>
    </div>
    
</template>

<script>

import Paginate from 'vuejs-paginate';
import Multiselect from 'vue-multiselect'

import AdminInfo from "@/components/partials/AdminInfo";
import TitleCard from "@/pages/title/components/Card.vue";
import Modal from "@/pages/title/components/Modal";

export default {

    components: {
        'multiselect': Multiselect,
        'paginate': Paginate,
        TitleCard, Modal, AdminInfo,
    },

    computed: {
    },

    data: () => ({
        selection: {
            level: []
        },
        table: {
            rows: [],
            last_page: 0,
            totalRows: 0,
            serverParams: {
                level: '',
                searchTerm: '',
                page: 1,
                perPage: 20,
            },
        },
    }),

    mounted() {
        this.getLevel();
        this.initData();
    },

    methods: {
        initData: function() {
            $.LoadingOverlay("show");

            return new Promise((resolve) => {
                axios.get('/api/title', {params: this.table.serverParams})
                .then( res => {
                    this.table.rows = res.data.data;
                    this.table.totalRows = res.data.total;
                    this.table.last_page = res.data.last_page;

                    this.$root.setPageHeader('Manajemen Jabatan', `Fetched ${this.table.rows.length} from total ${this.table.totalRows} ${(this.table.serverParams.trashed == 'y' ? 'trashed' : '')} data(s)`)
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

        getLevel: function() {
            axios.get('/api/title/get/level')
            .then( res => {
                this.selection.level = res.data;
            })
        },

        applyFilter: function() {
            this.initData();
        },

        resetFilter: function() {
            this.table.serverParams = {
                level: '',
                searchTerm: '',
                page: 1,
                perPage: 15,
            };
            this.initData();
        },

        newData: function(title) {
            this.initData();
        },
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
