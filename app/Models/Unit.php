<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    // 22-04-2022 | Define fillable column to enable mass insert (Unit::insert($data))
    protected $fillable = [
        'unit',
        'dinas',
    ];

    protected $table = 'units';

    // 22-04-2022 | Attach relation to employee
    public function employee()
    {
        return $this->hasMany(Employee::class);
    }

    public function member()
    {
        return $this->hasMany(Member::class);
    }
}
