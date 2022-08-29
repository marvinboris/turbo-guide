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

    public static function encryptIt($q)
    {
        // Store the cipher method
        $ciphering = "AES-128-CTR";

        // Use OpenSSl Encryption method
        $options = 0;

        // Non-NULL Initialization Vector for encryption
        $encryption_iv = '1234567891011121';

        // Store the encryption key
        $encryption_key = 'qJB0rGtIn5UB1xG03efyCp';

        // Use openssl_encrypt() function to encrypt the data
        return openssl_encrypt($q, $ciphering, $encryption_key, $options, $encryption_iv);
    }

    public static function decryptIt($q)
    {
        // Store the cipher method
        $ciphering = "AES-128-CTR";

        // Non-NULL Initialization Vector for decryption
        $decryption_iv = '1234567891011121';

        // Use OpenSSl Decryption method
        $options = 0;

        // Store the decryption key
        $decryption_key = 'qJB0rGtIn5UB1xG03efyCp';

        // Use openssl_decrypt() function to decrypt the data
        return openssl_decrypt($q, $ciphering, $decryption_key, $options, $decryption_iv);
    }
}
