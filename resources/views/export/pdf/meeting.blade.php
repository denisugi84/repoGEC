@extends('export.pdf.partials.template')

@section('content')

<style>
.note {
    border-style: solid;
    border-color: grey;
    min-height: 400px;
    padding: 8px;
}
</style>

<table style="margin-bottom: 20px;">
    <tr>
        <td>Nama Pertemuan</td>
        <td>:</td>
        <td>{{ $meeting->title }}</td>
    </tr>
    <tr>
        <td>Hari / Tanggal</td>
        <td>:</td>
        <td>{{ Carbon\Carbon::parse($meeting->start)->format('d M Y H:i') }} - {{ Carbon\Carbon::parse($meeting->end)->format('d M Y H:i') }}</td>
    </tr>
</table>

<table class="zigzag">
    <thead>
        <tr>
            <th class="header">Tanggal</th>
            <th class="header">Jabatan</th>
            {{-- <th class="header">Unit</th> --}}
            <th class="header">Kehadiran</th>
            <!-- <th class="header">Total</th> -->
        </tr>
    </thead>
    <tbody>
        @forelse($meeting->member as $member)
        <tr>
            <td class="td-color">
                <p style="margin: 0; font-weight: bold;">
                    {{ $member->nama }}
                </p>
                <span style="margin: 0;">No. Anggota : {{ $member->no_anggota }}</span>
            </td>
            <td class="td-color">
                @if ($member->title)
                    <span>{{ $member->title->nama }}</span>
                @else
                    <span style="color: grey">N/A</span>
                @endif
            </td>
            {{-- <td class="td-color">
                {{ $member->unit->dinas }} - {{ $member->unit->unit }}
            </td> --}}
            <td class="td-color">
                @if($member->pivot->attendance)
                    <span style="color: green;">
                        {{ Carbon\Carbon::parse($member->pivot->attendance) }}
                    </span>
                @else
                    <span style="color: grey;">
                        N/A
                    </span>
                @endif
            </td>
        </tr>
        @empty
            <tr>
                <td class="td-color" colspan="3">
                    <center>
                        Tidak Ada Data
                    </center>
                </td>
            </tr>
        @endforelse
    </tbody>
</table>

<div class="page-break"></div>
@include('export.pdf.partials.header')
<center>
    <h4>
        Notulen Rapat
    </h4>
</center>


<table style="margin-bottom: 20px;">

    @if($meeting->notulen)
    <tr>
        <td>Notulen</td>
        <td>:</td>
        <td>{{ $meeting->notulen->nama }} ({{ $meeting->notulen->no_anggota }})</td>
    </tr>
    @endif
    <tr>
        <td>Hari / Tanggal</td>
        <td>:</td>
        <td>{{ Carbon\Carbon::parse($meeting->start)->format('d M Y H:i') }} - {{ Carbon\Carbon::parse($meeting->end)->format('d M Y H:i') }}</td>
    </tr>
</table>

<div class="note">
    {!! $meeting->note ? $meeting->note : 'N/A' !!}
</div>
@endsection