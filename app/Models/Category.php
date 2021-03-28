<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $directory = '/images/categories/';

    protected $fillable = [
        'restaurant_id', 'name', 'description', 'photo', 'is_active',
    ];

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function meals()
    {
        return $this->hasMany(Meal::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
