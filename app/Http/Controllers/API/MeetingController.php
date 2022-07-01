<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\MeetingRequest;
use App\Http\Requests\RFIDTapRequest;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;


use App\Models\{
    Meeting,
    MeetingMember,
    Member
};
use Carbon\Carbon;
use DateTime;

class MeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $meetings = Meeting::with(['created_by', 'notulen'])
            ->withCount(['member']);

        if (isset($request->searchTerm)) {
            $escaped_str = "%$request->searchTerm%";

            $meetings->where('title', 'LIKE', $escaped_str);
            $meetings->orWhere('description', 'LIKE', $escaped_str);
        }

        if (isset($request->start)) {
            $meetings->where('start', '>=', $request->start);
        }

        if (isset($request->end)) {
            $meetings->where('end', '<=', $request->end);
        }

        if ($request->page == -1) {
            return response()->json($meetings->get(), 200);
        }

        $meetings->orderBy('start', 'DESC');

        return response()->json(
            $meetings->paginate(isset($request->perPage) ? $request->perPage : 24)
        );
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
    public function store(MeetingRequest $request)
    {

        $meeting = new Meeting;
        $meeting->member_id = auth()->user()->member->id;
        $meeting->notulen_id = $request->notulen['id'];
        $meeting->location = $request->location;
        $meeting->title = $request->title;
        $meeting->description = $request->description;
        $meeting->absence_start = Carbon::parse($request->start)->subMinutes(30);
        $meeting->start = $request->start;
        $meeting->end = $request->end;

        if ($meeting->save()) {
            $meeting->member()->attach($request->participants);

            return response()->json([
                'status' => true,
                'message' => 'Berhasil membuat meeting baru',
            ]);
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
        $meeting = Meeting::with(['created_by', 'member.unit', 'member.title', 'notulen'])->findOrFail($id);

        return response()->json($meeting, 200);
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
    public function update(MeetingRequest $request, $id)
    {
        $meeting = Meeting::findOrFail($id);
        $meeting->member_id = auth()->user()->member->id;
        $meeting->notulen_id = $request->notulen['id'];
        $meeting->location = $request->location;
        $meeting->title = $request->title;
        $meeting->description = $request->description;
        $meeting->absence_start = Carbon::parse($request->start)->subMinutes(30);
        $meeting->start = $request->start;
        $meeting->end = $request->end;

        if ($meeting->save()) {
            $meeting->member()->detach();
            $meeting->member()->attach($request->participants);

            return response()->json([
                'status' => true,
                'message' => 'Berhasil membuat meeting baru',
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
        $meeting = Meeting::findOrFail($id);

        $this->deleteNoteImageFolder($meeting);

        if ($meeting->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Meeting',
            ]);
        }
    }

    public function export($meeting_id, $extension = 'pdf')
    {

        $meeting = Meeting::with(['created_by', 'member.unit', 'member.title', 'notulen'])->findOrFail($meeting_id);

        if ($extension == 'pdf') {
            $pdf = PDF::loadView('export.pdf.meeting', [
                'meeting' => $meeting,
            ]);

            return $pdf->stream();
        }
    }

    public function rfidTap(RFIDTapRequest $request)
    {

        $rfid_request = $request->rfid;

        // 0. Find RFID to member
        $member = Member::where('rfid', $rfid_request)->first();

        if (!$member) {
            return response()->json([
                'status' => false,
                'message' => 'Kartu RFID tidak terintegrasi dengan Anggota',
                'data' => null
            ]);
        }

        // 1. Find closest meeting based current time
        $closest_meeting = $this->closestMeeting($member);

        if (!$closest_meeting) {
            return response()->json([
                'status' => true,
                'message' => "Halo $member->nama. Anda tidak memiliki Jadwal Meeting"
            ], 200);
        }

        // 2. Assign attendance time on the meeting
        $meeting_member = MeetingMember::query()
            ->where('meeting_id', $closest_meeting->id)
            ->where('member_id', $member->id)
            ->first();

        $meeting_member->attendance = Carbon::now();

        if ($meeting_member->save()) {
            return response()->json([
                'satus' => true,
                'message' => "Berhasil absensi meeting $closest_meeting->title."
            ], 201);
        }

        // 3. Success

    }

    private function closestMeeting($member)
    {
        $current_datetime = Carbon::now()->toDateTimeString();

        $meeting = Meeting::query()
            ->where('absence_start', '<=', $current_datetime)->where('end', '>=', $current_datetime)
            ->whereHas('member', function ($query) use ($member) {
                return $query->where('member_id', $member->id);
            })
            ->first();

        return $meeting;
    }

    public function editMember(Request $request, $id)
    {
        $meeting = Meeting::findOrFail($id);

        $meeting->member()->detach();
        $meeting->member()->attach($request->member);

        return response()->json([
            'status' => true,
            'message' => 'Berhasil mengatur anggota pada meeting ' . $meeting->title,
        ]);
    }

    public function deleteMember(Request $request, $id)
    {
        $meeting = Meeting::findOrFail($id);
        $member_id = $request->member_id;
        $meeting->member()->detach($member_id);

        return response()->json([
            'status' => true,
            'message' => 'Berhasil menghapus member dari meeting',
        ]);
    }

    public function updateNote(Request $request, $id)
    {
        $meeting = Meeting::findOrFail($id);
        $meeting->note = $request->note;

        if ($meeting->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil memperbaharui catatan meeting ' . $meeting->title
            ]);
        }
    }

    public function uploadNoteImage(Request $request)
    {

        if ($request->file('file')) {

            $meeting_id = $request->meeting_id;
            $upload_dir = '/upload/meeting/note/' . $meeting_id;

            $image = $request->file('file');
            $name = time() . $image->getClientOriginalName();
            $image->move(public_path() . $upload_dir, $name);

            $full_url = $upload_dir . '/' . $name;

            return response()->json([
                'status' => true,
                'message' => 'Berhasil mengupload Gambar',
                'filePath' => $full_url,
            ]);
        }

        return $request->all();
    }

    private function deleteNoteImageFolder(Meeting $meeting)
    {
        $note_path = "/upload/meeting/note/";
        $directory = $note_path + $meeting->id;

        File::deleteDirectory(public_path($directory));
    }
}
