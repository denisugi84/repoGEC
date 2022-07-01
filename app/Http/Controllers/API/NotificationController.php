<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $notification = Notification::with(['member'])->where('member_id', auth()->user()->member->id);

        $notification->orderBy('id', 'DESC');

        if ($request->preview == 'y') {
            $notification->where('is_viewed', 'n');

            return response()->json($notification->take(10)->get(), 200);
        }

        if ($request->status == 'y') {
            $notification->where('is_viewed', 'y');
        } else if ($request->status == 'n') {
            $notification->where('is_viewed', 'n');
        }

        if (isset($request->start) && isset($request->end)) {
            $notification->whereBetween('created_at', [$request->start, $request->end]);
        }

        $notification->orderBy('id', 'DESC');

        return response()->json($notification->paginate($request->perPage));
    }

    /**
     * Set Notification to Viewed after user clicked a notification.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function setViewed($id, Request $request)
    {
        $notification = Notification::findOrFail($id);

        $notification->is_viewed = 'y';

        if ($notification->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Notification viewed',
            ]);
        }
    }

    public function getCount(Request $request)
    {

        $notification = Notification::where('member_id', auth()->user()->member->id);

        if (isset($request->is_viewed)) {
            if ($request->is_viewed == 'y') {
                $notification->where('is_viewed', 'y');
            } else if ($request->is_viewed == 'n') {
                $notification->where('is_viewed', 'n');
            }
        }

        return response()->json($notification->count(), 200);
    }
}
