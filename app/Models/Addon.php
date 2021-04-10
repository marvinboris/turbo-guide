<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addon extends Model
{
    use HasFactory;

    protected $directory = '/images/addons/';

    protected $fillable = [
        'restaurant_id', 'name', 'reference', 'description', 'photo', 'price', 'is_active',
    ];

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function meals()
    {
        return $this->belongsToMany(Meal::class, 'meal_addon');
    }
}
