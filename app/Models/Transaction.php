<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'address', 'restaurant_id', 'amount', 'currency', 'tx_id', 'tx_hash', 'vendor', 'method', 'type', 'status', 'data'
    ];

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function getDataAttribute($value)
    {
        return json_decode($value);
    }
}
