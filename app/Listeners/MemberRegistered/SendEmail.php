<?php

namespace App\Listeners\MemberRegistered;

use App\Events\MemberRegistered;
use App\Models\Member;
use App\Models\Permission;
use App\Models\PermissionTitle;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmail
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

        $recepients = $this->getRecepient([
            'member-approval'
        ]);

        $notifications_data = [];

        foreach ($recepients as $recepient) {
            $temp = [
                'member_id' => $recepient->id,
                'recepient_email' => $recepient->email,
                'action' => 'member-approval',
                'referal_id' => $member->id,
                'description' => "$member->nama baru saja melakukan pendaftaran. Mohon ulas",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];

            array_push($notifications_data, $temp);
        }

        $this->sendEmail($notifications_data);
    }

    // Get member_id from attached permissions (array)
    private function getRecepient($permissions)
    {
        $permission_id = Permission::whereIn('slug', $permissions)->pluck('id')->unique()->toArray();

        // Load all title
        $title_id = PermissionTitle::whereIn('permission_id', $permission_id)->pluck('title_id')->unique()->toArray();

        // Load all member by fetched title_id
        $member_id = Member::where('email', '!=', null)->whereIn('title_id', $title_id);

        return $member_id;
    }

    // Send email action
    private function sendEmail($datas)
    {
        foreach ($datas as $data) {
            Mail::to($datas['recepient_email'])->send(new MemberRegistered($data));
        }
    }
}
