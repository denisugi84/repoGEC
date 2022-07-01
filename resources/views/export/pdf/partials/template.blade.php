<style>

    .content {
        font-family: Arial, Helvetica, sans-serif;
    }
    table {
        font-family: sans-serif;
        width: 100%;
    }

    th,
    td {
        padding: 0.25em 0.5em;
        text-align: left;
    }

    .td-color {
        background-color: #eee;
    }

    th {
        background-color: #e2e2e2;
        /* color: #fff; */
    }

    .zigzag {
        border-collapse: separate;
        /* border-spacing: 0.25em 1em; */
    }

    .page-break {
        page-break-after: always;
    }

</style>



<div class="content">
    @include('export.pdf.partials.header')
    @yield('content')
</div>

@include('export.pdf.partials.footer')
