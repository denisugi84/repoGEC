<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Http\Requests\TitleRequest;
use Illuminate\Http\Request;

use App\Models\Title;

class TitleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $titles = Title::withCount(['member', 'permission'])->with(['permission']);
        // $titles->where('level', '!=', 'SUPERADMIN');

        if (isset($request->level)) {
            $titles->whereIn('level', $request->level);
        }

        if (isset($request->searchTerm)) {
            $escaped_str = "%$request->searchTerm%";
            $titles->where('nama', 'LIKE', $escaped_str);
        }

        if ($request->form_member == 'y') {
            $titles->where('multiple_member', 'y');
            $titles->orWhereDoesntHave('member');
        }

        // TODO : Below code will work if dbms is mysql
        // $titles->orderByRaw("FIELD(nama , '%Ketua%', '%Wakil%', '%Sekretaris%') ASC");

        if ($request->page == -1) {
            $response = [
                'data' => $titles->get()
            ];

            return response()->json($response, 200);
        } else {
            $response = $titles->paginate($request->perPage);

            return response()->json($response, 200);
        }
    }

    public function getLevel()
    {
        $data = Title::groupBy('level')->pluck('level');

        return response()->json($data, 200);
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
    public function store(TitleRequest $request)
    {
        Title::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Jabatan berhasil dibuat',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $title = Title::with(['member.unit', 'member.title', 'member.user', 'permission'])->findOrFail($id);

        return response()->json($title, 200);
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
    public function update(TitleRequest $request, $id)
    {
        $title = Title::findOrFail($id);

        if ($title->member->count() >= 2 && $request->multiple_member == 'n') {
            return response()->json([
                'status' => false,
                'message' => 'Tidak dapat mengganti Status Multiple Member karena Jabatan ini terdapat ' . $title->member->count() . ' anggota',
            ]);
        }


        $title->nama = $request->nama;
        $title->level = strtoupper($request->level);
        $title->multiple_member = $request->multiple_member;

        if ($title->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Jabatan berhasil diubah',
            ]);
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
        $title = Title::findOrFail($id);

        if ($title->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Jabatan',
                'data' => []
            ]);
        }
    }

    public function addMember(Request $request, $id)
    {
        $title = Title::findOrFail($id);

        if ($title->multiple_member == 'n' && count($title->member) >= 1) {
            return response()->json([
                'status' => false,
                'message' => 'Jabatan ini tidak bisa memiliki banyak member',
            ]);
        }

        $member = Member::findOrFail($request->member_id);
        $member->title_id = $title->id;

        if ($member->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menambahkan Member ke Jabatan ' . $title->nama,
            ]);
        }
    }

    public function deleteMmember(Request $request, $id)
    {
        $title = Title::findOrFail($id);

        $member = Member::findOrFail($request->member_id);
        $member->title_id = null;

        if ($member->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Member dari Jabatan ' . $title->nama,
            ]);
        }
    }

    public function getPermission($id)
    {
        $title = Title::findOrFail($id);

        return response()->json($title->permission->pluck('id'));
    }

    public function updatePermission(Request $request, $id)
    {
        $title = Title::findOrFail($id);

        $title->permission()->detach();
        $title->permission()->attach($request->permission_id);

        return response()->json([
            'status' => true,
            'message' => 'Berhasil memasang ' . count($request->permission_id) . ' akses pada jabatan ' . $title->nama,
        ]);
    }
}
