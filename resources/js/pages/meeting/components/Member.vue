<template>
    <vue-good-table
        :search-options="{ enabled: true }"
        :columns="table.columns"
        :rows="members"
        :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 10,
            position: 'bottom',
            perPageDropdown: [10, 20, 50, 100],
            dropdownAllowAll: false,
            setCurrentPage: 1,
            jumpFirstOrLast : true,
            firstLabel : 'First Page',
            lastLabel : 'Last Page',
            nextLabel: 'next',
            prevLabel: 'prev',
            rowsPerPageLabel: 'Rows per page',
            ofLabel: 'of',
            pageLabel: 'page', // for 'pages' mode
            allLabel: 'All',
        }"
        styleClass="vgt-table condensed pgTble"
    >
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
                <span v-else style="color: grey;">
                    Anggota
                </span>
            </span>
            <span v-if="props.column.field == 'nama'">
                <router-link :to="{ name: 'member.detail', params: { member_id: props.row.id } }">
                    {{ props.row.nama }}
                </router-link>
            </span>
            
            <span v-if="props.column.field == 'attendance'">
                <span v-if="props.row.pivot.attendance" class="badge bg-success">
                    {{ $root.indonesianDate(props.row.pivot.attendance, 'datetime') }}
                </span>
                <span v-else class="badge bg-warning">
                    Tidak Ada Absensi
                </span>
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
</template>

<script>

import { VueGoodTable } from 'vue-good-table';
import MemberCard from "@/pages/member/components/Card";

import 'vue-good-table/dist/vue-good-table.css'

export default {

// add to component
    components: {
        VueGoodTable,
        MemberCard
    },

    props: ['members'],

    data: () => ({
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
                    sortable: true,
                },
                {
                    label: "Unit",
                    field: "unit",
                    sortable: false,
                },
                {
                    label: "Kehadiran",
                    field: "attendance",
                    sortable: true,
                },
                // {
                //     label: "TTL",
                //     field: "ttl",
                //     sortable: false,
                // },
                // {
                //     label: "Email",
                //     field: "email",
                //     sortable: true,
                // },
                {
                    label: "Phone",
                    field: "phone",
                    sortable: false,
                },
            ],
        }
    }),

    methods: {
        deleteMemberFromMeeting: function(member) {
            swal({
                title: `Anda akan menghapus ${member.nama} dari meeting`,
                text: "Lanjutkan?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((value) =>{
                if (value) {
                    $('#addMemberModal').modal('hide');
                    $.LoadingOverlay("show");
                    axios.put(`/api/meeting/${this.$route.params.meeting_id}/delete_member`, {
                        member_id: member.id
                    })
                    .then(res => {
                        if(res.data.status == true) {
                            this.$emit('initData');
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
    },
}
</script>

<style>

</style>