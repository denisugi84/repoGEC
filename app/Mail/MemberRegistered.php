<?php

namespace App\Mail;

use App\Models\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MemberRegistered extends Mailable
{
    use Queueable, SerializesModels;

    public $members; // Refer to members;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Member $members)
    {
        $this->members = $members;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.member_registered', [
            'member' => $this->member
        ]);
    }
}
