<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rejection extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'rejected_by',
        'reason'
    ];

    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function rejected_by()
    {
        return $this->belongsTo(Member::class, 'rejected_by');
    }
}
