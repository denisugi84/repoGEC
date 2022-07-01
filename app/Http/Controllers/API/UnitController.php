<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UnitRequest;
use Illuminate\Http\Request;

use App\Models\{Unit, Member};

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $unit = Unit::whereHas('member')->withCount(['member']);

        if(isset($request->dinas))
        {
            $unit->where('dinas', $request->dinas);
        }

        if(isset($request->multiple_dinas))
        {
            $unit->whereIn('dinas', $request->multiple_dinas);
        }

        if(isset($request->searchTerm))
        {
            $escaped_str = "%$request->searchTerm%";
            $unit->where('unit', 'LIKE', $escaped_str);
        }
        
        $unit->orderBy('member_count', 'DESC');

        if($request->paginate == 'y') {
            return response()->json($unit->paginate($request->perPage), 200);
        } else {
            return response()->json($unit->get(), 200);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UnitRequest $request)
    {
        $unit = Unit::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil menambahkan Unit ' . $request->unit
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $unit = Unit::query();

        return response()->json($unit->where('id', $id)->first(), 200);
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
    public function update(UnitRequest $request, $id)
    {
        $unit_data = Unit::findOrFail($id);

        $unit_data->unit = $request->unit;
        $unit_data->dinas = $request->dinas;

        if($unit_data->save())
        {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil memperbaharui data Unit',
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
        $unit = Unit::findOrFail($id);

        if($unit->delete())
        {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Unit',
            ]);
        }
    }

    public function addMember(Request $request, $id) 
    {
        $unit = Unit::findOrFail($id);

        $member = Member::findOrFail($request->member_id);
        $member->unit_id = $unit->id;

        if($member->save())
        {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menambahkan Member ke Unit ' . $unit->nama,
            ]);
        }
    }

    public function deleteMmember(Request $request, $id) 
    {
        $unit = Unit::findOrFail($id);

        $member = Member::findOrFail($request->member_id);
        $member->unit_id = null;

        if($member->save())
        {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Member dari Unit ' . $unit->unit,
            ]);
        }
    }
}
