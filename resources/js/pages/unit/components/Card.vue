<template>
    <div>
        <div class="card pointer" @click="onClick">
            <div class="card-body">
                <h4 class="mb-0">
                    <i class="fa fa-building"></i> {{ unit.unit }}
                </h4>
                <p class="mt-1">
                    <span class="badge bg-primary">
                    Dinas {{ unit.dinas }}
                    </span>
                </p>
                <span>
                    Terdapat {{ unit.member_count }} member
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['unit'],

    methods: {
        onClick: function() {
            if(this.$can('unit-detail')) {
                this.$router.push({
                    name: 'unit.detail',
                    params: {
                        unit_id: this.unit.id
                    }
                });
            } else {
                toastr.warning('Ooppps!!', 'Anda tidak diizinkan');
            }
        },
    }
}
</script>

<style>

</style>