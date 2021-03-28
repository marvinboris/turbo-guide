<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Restaurant extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $directory = '/images/restaurants/';

    protected $fillable = [
        'plan_id', 'language_id', 'name', 'owner', 'token', 'md5', 'email', 'photo', 'phone', 'country', 'whatsapp', 'address', 'days', 'hours', 'location', 'balance', 'password', 'is_active',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    protected $appends = [
        'mark',
    ];

    public function type()
    {
        return 'restaurant';
    }

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getMarkAttribute()
    {
        $mark = 0;
        $count = 0;
        foreach ($this->meals as $meal) {
            foreach ($meal->comments as $comment) {
                $mark += $comment->mark;
                $count++;
            }
        }
        return $count > 0 ? $mark / $count : $mark;
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function meals()
    {
        return $this->hasManyThrough(Meal::class, Category::class);
    }

    public function addons()
    {
        return $this->hasMany(Addon::class);
    }

    public function drinks()
    {
        return $this->hasMany(Drink::class);
    }

    public static function generateNewToken()
    {
        $letters = range('A', 'Z');
        $numbers = range(0, 9);
        $chars = array_merge($letters, $numbers);
        $length = count($chars);

        $code = '';

        for ($i = 0; $i < 8; $i++) {
            $index = rand(0, $length - 1);
            $code .= $chars[$index];
        }

        return $code;
    }

    public static function ref()
    {
        $token = self::generateNewToken();
        $restaurant = self::where('token', $token)->first();
        while ($restaurant) {
            $token = self::generateNewToken();
            $restaurant = self::where('token', $token)->first();
        }

        return $token;
    }

    public static function generatePassword()
    {
        $letters = range('a', 'z');
        $numbers = range(0, 9);
        $chars = array_merge($letters, $numbers);
        $length = count($chars);

        $code = '';

        for ($i = 0; $i < 8; $i++) {
            $index = rand(0, $length - 1);
            $code .= $chars[$index];
        }

        return $code;
    }
}
