@extends('email.template')

@section('section')

    <!-- TODO : Remove Later -->
    @php
    $member = App\Models\Member::where('nopeg', 580400)->first();
    @endphp

    <div style="margin-bottom: 20px;">
        <p>Kepada Administrator,</p>
        
        <p><strong><i>Berita :</i></strong> Terdapat Anggota yang telah mendaftar di Aplikasi</p>

        <p>Segera Lakukan Verifikasi / Pemeriksaan Terhadap Calon Anggota Bersangkutan.</p>
    </div>

    <div class="grid-container" style="margin-bottom: 20px;">
        <div class="grid-item">
            <img src="https://talentlead.gmf-aeroasia.co.id/images/avatar/{{ $member->nopeg }}.jpg" style="height: 120px; border-radius: 5px;" alt="">
        </div>
        <div class="grid-item" style="padding-left: 20px;">
            <table style="width: 100%">
                <tr style="width: 100%">
                    <td style="width: 40%;">No. Pegawai</td>
                    <td style="width: 6%">:</td>
                    <td>
                        {{ $member->nopeg }}
                    </td>
                </tr>
                @if($member->unit)
                <tr>
                    <td>Dinas / Unit</td>
                    <td>:</td>
                    <td>
                        {{ $member->unit->dinas }} | {{ $member->unit->unit }}
                    </td>
                </tr>
                @endif
                <tr>
                    <td style="width: 30%">Nama</td>
                    <td style="width: 6%">:</td>
                    <td>
                        {{ $member->nama }}
                    </td>
                </tr>
                <tr>
                    <td>E-Mail</td>
                    <td>:</td>
                    <td>
                        {{ $member->email }}
                    </td>
                </tr>
                <tr>
                    <td>Tanggal Daftar</td>
                    <td>:</td>
                    <td>
                        {{ Carbon\Carbon::parse($member->created_at)->diffForHumans() }}
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <a
        class="btn btn-primary"
        href="{{ env('APP_URL') }}"
        target="_blank"
    >
        Verifikasi / Approve Member
    </a>
@endsection