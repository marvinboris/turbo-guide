<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'location', 'address', 'phone', 'restaurant_id', 'method_id', 'option', 'note', 'items', 'due_amount', 'order_no', 'status',
    ];

    public static function generateNo()
    {
        $last_order = self::orderBy('id', 'DESC')->first();
        $order_no = 10000;
        if ($last_order) $order_no = $last_order->order_no + 1;

        return $order_no;
    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function method()
    {
        return $this->belongsTo(Method::class);
    }

    public function getItemsAttribute($value)
    {
        return $value ? json_decode($value) : null;
    }
}
