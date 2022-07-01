<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['nama', 'level', 'multiple_member'];

    protected $appends = ['limit_member'];

    public function member()
    {
        return $this->hasMany(Member::class);
    }

    protected function getLimitMemberAttribute() {
        return Member::where('title_id', $this->id)->take(5)->get();
    }

    public function permission()
    {
        return $this->belongsToMany(Permission::class);
    }
}
