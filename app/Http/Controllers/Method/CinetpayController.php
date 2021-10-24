<?php

namespace App\Http\Controllers\Method;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Method;
use App\Models\Recharge;
use App\Models\Restaurant;
use App\Models\Transaction;
use App\Notifications\RestaurantRecharge;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class CinetpayController extends Controller
{
    protected static $settings;

    public function __construct()
    {
        self::$settings = [
            'vendor' => 'cinetpay',
            'payment_url' => 'https://api-checkout.cinetpay.com/v2/payment',
            'apikey' => env('CINETPAY_APIKEY'),
            'siteId' => env('CINETPAY_SITE_ID'),
        ];
    }

    /**
     * Generate data necessary for the widget
     * @param Array
     * @return Array
     */
    public static function generateWidgetData($input)
    {
        $payload = [
            'status' => 'success',
            'link' => null
        ];

        $restaurant = UtilController::get(request());

        $transaction_id = time() . '_' . $restaurant->id;
        $amount = 5 * round($input['amount'] * 604 / 5);

        $json = [
            'apikey' => self::$settings['apikey'],
            'site_id' => self::$settings['siteId'],
            'transaction_id' => $transaction_id,
            'amount' => $amount,
            'currency' => 'XAF',
            'description' => $input['description'],
            'customer_id' => $restaurant->id,
            'customer_name' => $restaurant->name,
            'notify_url' => route('cinetpay.notify.post'),
            'return_url' => route('cinetpay.notify.post'),
            'channels' => 'ALL',
            'lang' => !in_array($restaurant->language->abbr, ['fr', 'en']) ? $restaurant->language->abbr : 'en',
            'metadata' => json_encode([
                'restaurant_id' => $restaurant->id,
                'dollar_amount' => $input['amount'],
            ]),
        ];

        $client = new Client();

        $response = $client->request('POST', self::$settings['payment_url'], [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json
        ]);

        $response = json_decode($response->getBody()->getContents());

        if ('201' === $response->code) {
            // User will be redirected to complete their payment
            $payload['link'] = $response->data->payment_url;
        } else {
            $payload['status'] = 'failure';
            $payload['link'] = 'Error during the process, please retry.';
        }

        return $payload;
    }

    /**
     * Get notified about the transaction
     * @param Request
     * @return \Illuminate\Http\Response
     */
    public function notify(Request $request)
    {
        $input = $request->all();
        foreach ($input as $key => $value) {
            $input[$key] = htmlspecialchars($value);
        }

        $transaction_id = $input['transaction_id'];
        $token = $input['token'];

        $json = [
            'apikey' => env('CINETPAY_APIKEY'),
            'site_id' => env('CINETPAY_SITE_ID'),
            'transaction_id' => $transaction_id,
        ];

        // Check payment status
        $client = new Client();

        $checkUrl = "https://api-checkout.cinetpay.com/v2/payment/check";

        $response = $client->request('POST', $checkUrl, [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json
        ]);

        $response = json_decode($response->getBody()->getContents());

        $data = $response->data;
        $metadata = json_decode($data->metadata);

        $restaurant = Restaurant::find($metadata->restaurant_id);
        $recharge = null;

        if (!$restaurant) {
            error_log('No restaurant found !');
            die('No restaurant found !');
        }

        $transaction = Transaction::where("tx_id", $transaction_id)->first();

        if (!$transaction) {
            $transaction = Transaction::create([
                'amount' => $data->amount,
                'tx_id' => $transaction_id,
                'tx_hash' => $token,
                'vendor' => 'cinetpay',
                'method' =>  $data->payment_method ? $data->payment_method : 'MTN',
                'type' => 'payment',
                'status' => 'pending',
                'currency' => $data->currency ? $data->currency : 'XAF',
                'address' => $restaurant->phone,
            ]);
            $restaurant->transactions()->save($transaction);
            $recharge = Recharge::create([
                'restaurant_id' => $restaurant->id,
                'method_id' => Method::whereSlug('mobile')->first()->id,
                'amount' => $metadata->dollar_amount,
                'status' => 0,
                'fees' => 0,
                'data' => json_encode([
                    'transaction_id' => $transaction->id,
                ])
            ]);
        }

        if ($data->currency) $transaction->currency = $data->currency;
        if ($token) $transaction->tx_hash = $token;

        $transaction->vendor = self::$settings['vendor'];

        if ($data->payment_method) $transaction->method = $data->payment_method;
        $transaction->address = $restaurant->phone;
        if ($data->amount) $transaction->amount = $data->amount;

        if (!$recharge) $recharge = Recharge::where('data->transaction_id', $transaction->id)->first();

        if ('00' === $response->code && $recharge->status !== 2) {
            $recharge->update([
                'status' => 2,
            ]);
            $restaurant->notify(new RestaurantRecharge($recharge));
            $restaurant->update([
                'balance' => $restaurant->balance + $recharge->amount
            ]);
            $transaction->status = 'completed';
        } else {
            if ($recharge) $recharge->update([
                'status' => 1,
            ]);
            $transaction->status = $response->message;
        }

        $transaction->save();

        if ('ACCEPTED' === $data->status)
            return redirect('/restaurant/recharges?status=1&amount=' . $recharge->amount);

        return redirect('/restaurant/recharges');
    }
}
