<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recharge extends Model
{
    use HasFactory;

    protected $fillable = [
        'restaurant_id', 'method_id', 'amount', 'fees', 'comments', 'status', 'type', 'data',
    ];

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function method()
    {
        return $this->belongsTo(Method::class);
    }

    public function getDataAttribute($value)
    {
        return json_decode($value);
    }
}
