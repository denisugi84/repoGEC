<template>
    <div>

        <div class="row">
            <div class="col-md-4">
                <div class="border p-2 mb-2">
                    <h5 class="mb-0">Nama Unit</h5>
                    <p class="mt-1">{{ unit.unit }}</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border p-2 mb-2">
                    <h5 class="mb-0">Nama Dinas</h5>
                    <p class="mt-1">{{ unit.dinas }}</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border p-2 mb-2">
                    <h5 class="mb-0">Jumlah Anggota</h5>
                    <p class="mt-1">{{ member_length }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['unit', 'member_length'],
}
</script>

<style>

</style>