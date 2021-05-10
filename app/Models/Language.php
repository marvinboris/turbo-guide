<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'abbr', 'flag',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function admins()
    {
        return $this->hasMany(Admin::class);
    }

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class, 'language_restaurant')->withPivot(['main']);
    }
}
