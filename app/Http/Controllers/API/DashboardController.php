<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{
    Member, 
    Title, 
    Unit, 
    Meeting
};

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $dinas = isset($request->dinas) ? $request->dinas : null;
        $unit = isset($request->unit) ? $request->unit : null;

        return response()->json([
            'count' => $this->getCount(),
            'activity_logs' => $this->getActivityLog(10),
        ]);
    }

    private function getCount() {
        return [
            'meeting' => $this->getMeetingCount(),
            'member' => $this->getMemberCount(),
            'unit' => $this->getUnitCount(),
            'title' => $this->getTitleCount(),
        ];
    }

    private function getMeetingCount()
    {
        $meeting = Meeting::query();

        return $meeting->count();
    }

    private function getActivityLog() {
        return [];
    }

    private function getMemberCount()
    {
        $member = Member::query();

        return $member->count();
    }

    private function getUnitCount()
    {
        $unit = Unit::query();

        return $unit->count();
    }

    private function getTitleCount()
    {
        $title = Title::query();

        return $title->count();
    }


}
