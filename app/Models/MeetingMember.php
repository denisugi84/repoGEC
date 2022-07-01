<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeetingMember extends Model
{
    use HasFactory;

    protected $table = 'meeting_member';

    protected $fillable = [
        'meeting_id', 'member_id', 'attendance', 'description'
    ];
}
