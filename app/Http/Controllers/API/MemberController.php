<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\MemberRequest;
use App\Imports\MemberImport;
use Maatwebsite\Excel\Facades\Excel;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Member;
use App\Models\Rejection;
use App\Models\Unit;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $member = Member::with(['unit', 'title', 'rejection']);

        if ($request->approval == 'y') {
            $member->where('is_approved', 'n');
        } else {
            $member->where('is_approved', 'y');
        }

        if (isset($request->dinas)) {
            if (isset($request->unit)) {
                $member->where('unit_id', $request->unit);
            } else {
                // Fetch unit_id by selected dinas;
                $escaped_dinas = "%$request->dinas%";
                $unit_id = Unit::where('dinas', 'LIKE', trim($escaped_dinas))->pluck('id');
                $member->whereIn('unit_id', $unit_id);
            }
        }

        if (isset($request->searchTerm)) {
            $escaped_str = "%$request->searchTerm%";
            // $member->where();
            $member->where(function ($query) use ($escaped_str) {
                $query->where('nama', 'LIKE', $escaped_str);
                $query->orWhere('nopeg', 'LIKE', $escaped_str);
                $query->orWhere('no_anggota', 'LIKE', $escaped_str);
                $query->orWhere('tempat_lahir', 'LIKE', $escaped_str);
                $query->orWhere('email', 'LIKE', $escaped_str);
            });
        }

        if (isset($request->multiple_dinas)) {
            if (isset($request->multiple_unit)) {
                $member->whereIn('unit_id', $request->multiple_unit);
            } else {
                $unit_id = Unit::whereIn('dinas', $request->multiple_dinas)->pluck('id');
                $member->whereIn('unit_id', $unit_id);
            }
        }


        if (isset($request->status)) {
            $member->where('is_active', $request->status);
        }


        if (isset($request->sort_type) && isset($request->sort_field)) {
            if ($request->sort_type !== 'none') {
                $member->orderBy($request->sort_field, $request->sort_type);
            }
        } else {
            $member->orderBy('is_active', 'asc');
        }

        if ($request->doesnt_have_title == 'y') {
            $member->where('title_id', null);
        }

        if ($request->doesnt_have_unit == 'y') {
            $member->where('unit_id', null);
        }

        if (isset($request->meeting_participant)) {
            $member->whereIn('id', $request->meeting_participants);
        }

        if ($request->trashed == 'y') {
            $member->onlyTrashed();
        }

        if ($request->all_data == 'y') {
            return $member->get();
        }


        return response()->json($member->paginate(isset($request->perPage) ? $request->perPage : 20));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MemberRequest $request)
    {
        $member = new Member;
        $member->rfid = $request->rfid;
        $member->no_anggota = $this->generateNoAnggota();
        $member->unit_id = isset($request->unit) ? $request->unit['id'] : null;
        $member->title_id = isset($request->title) ? $request->title['id'] : null;
        $member->nopeg = $request->nopeg;
        $member->is_active = $request->is_active ? $request->is_active : 'y';
        $member->is_kpk = $request->is_kpk;
        $member->nama = $request->nama;
        $member->email = $request->email;
        $member->phone = $request->phone;
        $member->tanggal_daftar = $request->tanggal_daftar;
        $member->tanggal_lahir = $request->tanggal_lahir;
        $member->tempat_lahir = $request->tempat_lahir;

        if ($member->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil membuat Member Baru',
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $member = Member::withTrashed()
            ->with(['unit', 'title', 'user', 'meeting.notulen', 'rejection.member', 'rejection.rejected_by'])
            ->findOrFail($id);

        return response()->json($member, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(MemberRequest $request, $id)
    {
        $member = Member::findOrFail($id);
        $member->rfid = $request->rfid;
        $member->is_active = $request->is_active;
        $member->unit_id = isset($request->unit) ? $request->unit['id'] : null;
        $member->title_id = isset($request->title) ? $request->title['id'] : null;
        $member->nopeg = $request->nopeg;
        $member->is_kpk = $request->is_kpk;
        $member->is_active = $request->is_active ? $request->is_active : 'y';
        $member->nama = $request->nama;
        $member->email = $request->email;
        $member->phone = $request->phone;
        $member->tanggal_daftar = $request->tanggal_daftar;
        $member->tanggal_lahir = $request->tanggal_lahir;
        $member->tempat_lahir = $request->tempat_lahir;

        if ($member->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil memperbaharui Data Member'
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $member = Member::findOrFail($id);

        if ($member->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus anggota',
            ]);
        }
    }

    public function permanentDelete($id)
    {
        $member = Member::withTrashed()->findOrFail($id);

        if ($member->forceDelete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus anggota secara Permanent',
            ]);
        }
    }

    public function importXlsx(Request $request)
    {
        ini_set('max_execution_time', 300);

        try {
            Excel::import(new MemberImport, request()->file('file'));

            return response()->json([
                'status' => true,
                'message' => 'Berhasil import data anggota',
                'data' => [],
            ]);
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed',
                'data' => $e->failures(),
            ], 200);
        }
    }

    /**
     * Restore the specified resource from soft delete.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $member = Member::withTrashed()->findOrFail($id);
        if ($member->trashed()) {

            $member->restore();

            return response()->json([
                'status' => true,
                'message' => 'Berhasil restore Anggota',
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Gagal restore Anggota',
            ]);
        }
    }

    /**
     * Attach / Detach the specified resource from user instance.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function applyLogin($id, Request $request)
    {
        if (isset($request->action)) {


            if ($request->action == 'attach') {

                $member = Member::findOrFail($id);

                $user = new User;
                $user->username = $member->nopeg;
                $user->password = bcrypt($member->nopeg);

                if ($user->save()) {

                    $member->user_id = $user->id;
                    $member->save();

                    return response()->json([
                        'status' => true,
                        'message' => 'Berhasil membuat akses login untuk member ' . $member->nama,
                    ]);
                }
            } else if ($request->action == 'detach') {


                $member = Member::findOrFail($id);

                $user = User::findOrFail($member->user_id);
                if ($user->delete()) {
                    return response()->json([
                        'status' => true,
                        'message' => 'Berhasil menghapus akses login untuk member ' . $member->nama,
                    ]);
                }
            }
        }
    }

    public function approve($id, Request $request)
    {
        $member = Member::findOrFail($id);
        $member->no_anggota = $this->generateNoAnggota();
        $member->is_approved = 'y';

        if ($member->save()) {
            // Create user login;
            return response()->json([
                'status' => true,
                'message' => "Berhasil melakukan Approval pada Member $member->nama",
            ]);
        }
    }

    public function reject($id, Request $request)
    {
        $member = Member::findOrFail($id);
        $member->no_anggota = null;
        $member->is_approved = 'n';

        if ($member->save()) {

            // Create reject reason
            if (isset($request->reason)) {
                $rejection = new Rejection;
                $rejection->member_id = $member->id;
                $rejection->rejected_by = auth()->user()->member->id;
                $rejection->reason = $request->reason;
                $rejection->save();
            }

            return response()->json([
                'status' => true,
                'message' => "Berhasil melakukan penolakan pada Member $member->nama",
            ]);
        }
    }

    /**
     * Attach / Detach the specified resource from user instance.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, Request $request)
    {
        if (isset($request->action)) {

            $member = Member::findOrFail($id);

            if ($request->action == 'activate') {

                $member->is_active = 'y';

                if ($member->save()) {
                    return response()->json([
                        'status' => true,
                        'message' => 'Berhasil mengaktifkan member ' . $member->nama
                    ]);
                }
            } else if ($request->action == 'deactivate') {
                $member->is_active = 'n';
                if ($member->save()) {
                    return response()->json([
                        'status' => true,
                        'message' => 'Berhasil menonaktifkan member ' . $member->nama
                    ]);
                }
            }
        }
    }

    public function generateNoAnggota()
    {

        $next_no = Member::whereYear('created_at', date('Y'))->count();
        $next_no += 1;

        $no_anggota = date('y') . sprintf("%04d", $next_no);

        return (int) $no_anggota;
    }
}
