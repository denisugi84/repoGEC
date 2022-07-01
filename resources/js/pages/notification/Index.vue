<template>
    <div>
        <div class="row mt-1">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title"><i class="fa fa-filter"></i> Filter</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="start">Tanggal Mulai</label>
                                    <input type="date" id="start" v-model="table.serverParams.start" class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="end">Tanggal Selesai</label>
                                    <input type="date" id="end" v-model="table.serverParams.end" class="form-control">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="status">Status</label>
                                <select name="status" id="status" v-model="table.serverParams.status" class="form-control">
                                    <option value="">-- Semua Status --</option>
                                    <option value="y">Sudah Dibaca</option>
                                    <option value="n">Belum Dibaca</option>
                                </select>
                            </div>
                        </div>

                        <div class="d-grid mt-2">
                            <button class="btn btn-primary mb-1"  @click="applyFilter"><i class="fa fa-check"></i> Terapkan Filter</button>
                            <button class="btn btn-warning" @click="resetFilter"><i class="fa fa-refresh"></i> Reset Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class=" mb-1"  v-for="notification in table.rows" :key="notification.id">
                    <NotificationCard :notification="notification" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NotificationCard from "./components/Card";

export default {

    components: {
        NotificationCard,
    },

    data: () => ({
        table: {
            rows: [],
            last_page: 0,
            totalRows: 0,
            serverParams: {
                start: '',
                end: '',
                status: '',
            },
        }
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function() {
            $.LoadingOverlay("show");
            axios.get('/api/notification', {params: this.table.serverParams})
            .then( res => {
                this.$root.setPageHeader(
                    'Notifikasi Anda', 
                    `Fetched ${this.table.rows.length} from total ${this.table.totalRows}`
                )
                this.table.rows = res.data.data;
                this.table.totalRows = res.data.total;
            })
            .catch(e => {
                console.log(e);
            })
            .then(() => {
                $.LoadingOverlay("hide");
            })
        },

        resetFilter: function() {
            this.table.serverParams = {
                start: '',
                end: '',
                status: '',
            }

            this.initData();
        },

        applyFilter: function() {
            if(this.table.serverParams.start) {
                if(this.table.serverParams.end === '') {
                    toastr.warning('Batas Akhir Tidak Boleh Kosong', 'Oooppss!');
                    return false;
                }
            }
            
            this.initData();
        },
    }
}
</script>
