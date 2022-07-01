<?php

namespace App\Listeners\MemberRegistered;

use App\Models\Member;
use App\Models\Notification;
use App\Models\Permission;
use App\Models\PermissionTitle;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $member = $event->member;

        $members_id = $this->getMemberId([
            'member-approval'
        ]);

        $notifications_data = [];

        foreach ($members_id as $member_id) {
            $temp = [
                'member_id' => $member_id,
                'action' => 'member-approval',
                'referal_id' => $member->id,
                'description' => "$member->nama baru saja melakukan pendaftaran. Mohon ulas",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];

            array_push($notifications_data, $temp);
        }

        Notification::insert($notifications_data);
    }

    // Get member_id from attached permissions (array)
    private function getMemberId($permissions)
    {
        $permission_id = Permission::whereIn('slug', $permissions)->pluck('id')->unique()->toArray();

        // Load all title
        $title_id = PermissionTitle::whereIn('permission_id', $permission_id)->pluck('title_id')->unique()->toArray();

        // Load all member by fetched title_id
        $member_id = Member::whereIn('title_id', $title_id)->pluck('id')->unique()->toArray();

        return $member_id;
    }
}
