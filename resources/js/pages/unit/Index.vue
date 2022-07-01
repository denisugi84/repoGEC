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
                            <multiselect v-model="table.serverParams.multiple_dinas" :options="selection.dinas" :multiple="true"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Pilih satu atau lebih" :preselect-first="true">
                            </multiselect>
                        </div>
                        <div class="col-4">
                            <div class="float-end">
                                <button class="btn btn-warning btn-sm" @click="resetFilter"><i class="fa fa-refresh"></i> Reset</button>
                                <button class="btn btn-primary btn-sm" @click="initData"><i class="fa fa-check"></i> Terapkan</button>
                                <router-link v-if="$can('unit-add')" :to="{ name: 'unit.add' }" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Buat Unit</router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="table.rows.length > 0">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6" v-for="unit in table.rows" :key="unit.id">
                        <UnitCard :unit="unit" />
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
    </div>
    
</template>

<script>

import Paginate from 'vuejs-paginate';
import Multiselect from 'vue-multiselect'

import AdminInfo from "@/components/partials/AdminInfo";
import UnitCard from "@/pages/unit/components/Card";

export default {

    components: {
        'multiselect': Multiselect,
        'paginate': Paginate,
        AdminInfo, UnitCard,
    },

    computed: {
        isAdmin: function() {
            let user = JSON.parse(this.$store.getters.user);

            console.log(user.role);
            if(user.role) {
                if(user.role == 'SUPERADMIN') {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }

            
        },
    },

    data: () => ({
        selection: {
            dinas: []
        },
        table: {
            rows: [],
            last_page: 0,
            totalRows: 0,
            serverParams: {
                paginate: 'y',
                multiple_dinas: '',
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
                axios.get('/api/unit', {params: this.table.serverParams})
                .then( res => {
                    this.table.rows = res.data.data;
                    this.table.totalRows = res.data.total;
                    this.table.last_page = res.data.last_page;

                    this.$root.setPageHeader('Manajemen Unit & Dinas', `Fetched ${this.table.rows.length} from total ${this.table.totalRows} ${(this.table.serverParams.trashed == 'y' ? 'trashed' : '')} data(s)`)
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
            axios.get('/api/dinas')
            .then( res => {
                this.selection.dinas = res.data;
            })
        },

        applyFilter: function() {
            this.initData();
        },

        resetFilter: function() {
            this.table.serverParams = {
                paginate: 'y',
                level: '',
                multiple_dinas: '',
                searchTerm: '',
                page: 1,
                perPage: 20,
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
