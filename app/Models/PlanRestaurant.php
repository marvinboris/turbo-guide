<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class PlanRestaurant extends Pivot
{
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }
}
