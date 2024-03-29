<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $directory = '/images/categories/';

    protected $table = "categories";

    protected $fillable = [
        'restaurant_id', 'name', 'description', 'photo', 'is_active',
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

    public function meals()
    {
        return $this->hasMany(Meal::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
