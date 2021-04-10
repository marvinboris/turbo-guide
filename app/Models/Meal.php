<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $directory = '/images/meals/';

    protected $fillable = [
        'category_id', 'name', 'reference', 'views', 'time', 'description', 'photo', 'price', 'is_active',
    ];

    protected $appends = [
        'mark',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getMarkAttribute()
    {
        $comments = $this->comments;
        $mark = 0;

        $count = count($comments);
        if ($count === 0) return $mark;

        foreach ($comments as $comment) {
            $mark += $comment->mark;
        }

        return $mark / $count;
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function addons()
    {
        return $this->belongsToMany(Addon::class, 'meal_addon');
    }
}
