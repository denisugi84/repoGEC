<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-10">
                        <input type="text" @keyup.enter="initData" v-model="table.serverParams.searchTerm" id="searchTerm" class="form-control"
                            placeholder="Enter to Search">
                    </div>
                    <div class="col-md-2">
                        <div class="d-grid">
                            <router-link  v-if="$can('meeting-add')" :to="{ name: 'meeting.add' }" class="btn btn-primary btn-md"><i class="fa fa-plus"></i> Buat Meeting</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin-top: -18px;">
            <div v-if="table.rows.length > 0">
                <div class="row">
                    <div class="col-md-3 mb-2" v-for="meeting in table.rows" :key="meeting.id">
                        <MeetingCard 
                            :meeting="meeting"
                            :show_img="true" 
                            :btn_detail="true" 
                            :show_thumbnail="true" 
                            :button="true" 
                            :index_mode="true"
                            @initData="initData" 
                        />
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
            <NoData v-else />
        </div>

    </div>
</template>

<script>

import Paginate from 'vuejs-paginate';
import MeetingCard from "@/pages/meeting/components/Card.vue";

export default {

    components: {
        Paginate,
        MeetingCard,
    },

    data: () => ({
        table: {
            columns: [
                {
                    label: "",
                    field: "avatar",
                    sortable: false,
                },
                {
                    label: "Deskripsi",
                    field: "description",
                    sortable: true,
                },
                {
                    label: "Nama",
                    field: "nama",
                    sortable: true,
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
                perPage: 24,
            },
        },
    }),

    mounted() {
        this.initData();
    },
    
    methods: {
        initData: function() {
            $.LoadingOverlay("show");

            return new Promise((resolve) => {
                axios.get('/api/meeting', {params: this.table.serverParams})
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
                    $.LoadingOverlay("hide");
                    this.$root.goToTop();
                });
            });
        },
    }
}
</script>

<style>

</style>