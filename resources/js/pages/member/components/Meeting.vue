<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>Judul</td>
                    <td>Notulen</td>
                    <td>Tanggal</td>
                    <td>Kehadiran</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="m in meeting" :key="m.id">
                    <td>{{ m.title }}</td>
                    <td>{{ m.notulen.nama }}</td>
                    <td>{{ $root.indonesianDate(m.start) }} - {{ $root.indonesianDate(m.end) }}</td>
                    <td>{{ m.pivot.attendance ? $root.indonesianDate(m.pivot.attendance, 'datetime') : 'Tidak Hadir' }}</td>
                    <!-- <td>{{ m.judul }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['meeting']
}
</script>

<style>

</style>