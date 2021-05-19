<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Plan extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name', 'slug', 'price', 'meals', 'actions', 'support', 'banners', 'reviews', 'months'
    ];

    protected $appends = [
        'type',
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function getTypeAttribute() {
        return $this->months === 1 ? 'Monthly' : 'Yearly';
    }

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class, 'plan_restaurant')->withPivot(['id', 'expiry_date', 'created_at', 'updated_at']);
    }
}
