<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
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
        'language_id', 'name', 'owner', 'token', 'slug', 'qr', 'logo', 'email', 'photo', 'phone', 'country', 'whatsapp', 'address', 'days', 'hours', 'location', 'balance', 'password', 'is_active', 'currency', 'position', 'banner1', 'banner2', 'banner3', 'auto_renew', 'caution', 'must_read', 'disclaimer',
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true
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
        'mark', 'plan', 'main_language',
    ];

    public function type()
    {
        return 'restaurant';
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'language_restaurant')->withPivot(['main']);
    }

    public function translatable($value)
    {
        $data = null;
        if (!UtilController::isJson($value)) {
            $data = [];
            foreach ($this->languages as $language) {
                $data[$language->abbr] = $value;
            }
            return $data;
        }

        return json_decode($value, true);
    }

    public function getAddressAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getCautionAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getMustReadAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getDisclaimerAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getDaysAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getHoursAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getQrAttribute($value)
    {
        return $value ? $this->directory . 'qr/' . $value : null;
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getLogoAttribute($value)
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
        $plan = $this->plans()->wherePivot('expiry_date', '>=', Carbon::now())->orderBy('plan_restaurant.created_at', 'DESC')->first();

        return $plan;
    }

    public function getMainLanguageAttribute()
    {
        $language = $this->languages()->wherePivot('main', 1)->first();

        return $language ? $language->abbr : Language::first()->abbr;
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

    public function qrCode()
    {
        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://qrcode-monkey.p.rapidapi.com/qr/custom",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "{\r\n    
                \"data\": \"" . env('APP_URL') . "/restaurants/" . $this->slug . "\",\r\n    
                \"config\": {\r\n    
                    \"body\": \"circle-zebra-vertical\",\r\n    
                    \"eye\": \"frame1\",\r\n    
                    \"eyeBall\": \"ball14\",\r\n    
                    \"erf1\": [\"fh\"],\r\n    
                    \"erf2\": [],\r\n    
                    \"erf3\": [\"fv\",\"fh\"],\r\n    
                    \"brf1\": [],\r\n    
                    \"brf2\": [],\r\n    
                    \"brf3\": [],\r\n    
                    \"bodyColor\": \"#0277BD\",\r\n    
                    \"bgColor\": \"#FFFFFF\",\r\n    
                    \"eye1Color\": \"#075685\",\r\n    
                    \"eye2Color\": \"#075685\",\r\n    
                    \"eye3Color\": \"#075685\",\r\n    
                    \"eyeBall1Color\": \"#0277BD\",\r\n    
                    \"eyeBall2Color\": \"#0277BD\",\r\n    
                    \"eyeBall3Color\": \"#0277BD\",\r\n    
                    \"gradientColor1\": \"#e98809\",\r\n    
                    \"gradientColor2\": \"#000000\",\r\n    
                    \"gradientType\": \"linear\",\r\n    
                    \"gradientOnEyes\": true,\r\n    
                    \"logo\": \"https://qrmenu.briluce.com/images/logo.png\",\r\n    
                    \"logoMode\": \"clean\"\r\n    
                },\r\n    
                \"size\": 600,\r\n    
                \"download\": false,\r\n    
                \"file\": \"png\"\r\n
            }",
            CURLOPT_HTTPHEADER => [
                "content-type: application/json",
                "x-rapidapi-host: qrcode-monkey.p.rapidapi.com",
                "x-rapidapi-key: " . env('RAPID_API_KEY')
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return response()->json([
                'message' => UtilController::message("cURL Error #:" . $err, 'danger'),
            ]);
        } else {
            $qrName = $this->slug . '.png';
            file_put_contents(public_path('images/restaurants/qr/' . $qrName), $response);
            $this->update([
                'qr' => $qrName,
            ]);
        }
    }
}
