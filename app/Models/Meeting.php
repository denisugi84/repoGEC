<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $appends = ['limit_member'];

    public function member()
    {
        return $this->belongsToMany(Member::class)->withPivot('attendance', 'description')->withTimestamps();
    }

    public function created_by()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    public function notulen()
    {
        return $this->belongsTo(Member::class, 'notulen_id');
    }

    protected function getLimitMemberAttribute()
    {
        return $this->member->take(5);
    }
}
