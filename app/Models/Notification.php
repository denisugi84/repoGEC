<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'action',
        'referal_id',
        'description',
        'is_viewed',
    ];

    public function member()
    {
        return $this->belongsTo(Member::class, 'referal_id');
    }
}
