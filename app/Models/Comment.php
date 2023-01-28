<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = "comments";

    protected $fillable = [
        'meal_id', 'name', 'body', 'mark', 'country'
    ];

    public function meal() {
        return $this->belongsTo(Meal::class);
    }
}
