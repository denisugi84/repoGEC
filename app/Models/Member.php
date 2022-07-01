<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'unit_id',
        'title_id',
        'rfid',
        'nopeg',
        'is_active',
        'nama',
        'email',
        'phone',
        'is_kpk',
        'tanggal_daftar',
        'tanggal_lahir',
        'tempat_lahir'
    ];

    protected $appends = ['avatar'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function title()
    {
        return $this->belongsTo(Title::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function created_meeting()
    {
        return $this->hasMany(Meeting::class);
    }

    public function rejection()
    {
        return $this->hasMany(Rejection::class);
    }

    public function meeting()
    {
        return $this->belongsToMany(Meeting::class)->withPivot('attendance', 'description')->withTimestamps();
    }

    public function getAvatarAttribute()
    {
        // return 'https://avatars.githubusercontent.com/u/8235099?v=4';
        $avatar_url = 'https://talentlead.gmf-aeroasia.co.id/images/avatar/' . $this->nopeg . '.jpg';

        return $avatar_url;

        if (getimagesize($avatar_url)) {
            return $avatar_url;
        } else {
            return $avatar_url = '/assets/img/avatar.jpg';
        }
    }
}
