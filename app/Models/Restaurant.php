<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Cviebrock\EloquentSluggable\Sluggable;

class Restaurant extends Authenticatable
{
    use Notifiable, HasApiTokens, Sluggable;

    protected $directory = '/images/restaurants/';

    protected $fillable = [
        'plan_id', 'language_id', 'name', 'owner', 'token', 'md5', 'slug', 'qr', 'logo', 'email', 'photo', 'phone', 'country', 'whatsapp', 'address', 'days', 'hours', 'location', 'balance', 'password', 'is_active', 'currency', 'position', 'banner1', 'banner2', 'banner3'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    protected $appends = [
        'mark', 'plan',
    ];

    public function type()
    {
        return 'restaurant';
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function getQrAttribute($value)
    {
        return $value ? $this->directory . 'qr/' . $value : null;
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getBanner1Attribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getBanner2Attribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getBanner3Attribute($value)
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

    public function getPlanAttribute()
    {
        $plan = $this->plans()->whereDate('expiry_date', '>=', Carbon::now())->orderBy('expiry_date', 'DESC')->first();

        return $plan;
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

    public function plans()
    {
        return $this->belongsToMany(Plan::class, 'plan_restaurant')->withPivot(['id', 'expiry_date', 'created_at', 'updated_at']);
    }

    public function recharges()
    {
        return $this->hasMany(Recharge::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
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
