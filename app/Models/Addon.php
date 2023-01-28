<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addon extends Model
{
    use HasFactory;

    protected $table = "addons";

    protected $directory = '/images/addons/';

    protected $fillable = [
        'restaurant_id', 'name', 'reference', 'description', 'photo', 'price', 'is_active',
    ];

    public function translatable($value)
    {
        $data = null;
        if (!UtilController::isJson($value)) {
            $data = [];
            foreach ($this->restaurant->languages as $language) {
                $data[$language->abbr] = $value;
            }
            return $data;
        }

        return json_decode($value, true);
    }

    public function getNameAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getDescriptionAttribute($value)
    {
        return $this->translatable($value);
    }

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
