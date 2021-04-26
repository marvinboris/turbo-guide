<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Mail\VerificationLink;
use App\Models\Restaurant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function username()
    {
        return 'token';
    }

    protected function guard()
    {
        return Auth::guard('restaurant');
    }

    public function signup(Request $request)
    {
        $request->validate([
            'owner' => 'required|string',
            'email' => 'required|string|email|unique:restaurants',
            'country' => 'required',
            'phone' => 'required|string',
            'terms' => 'accepted'
        ]);

        $token = Restaurant::ref();
        $password = Restaurant::generatePassword();
        $restaurant = Restaurant::create([
            'owner' => $request->owner,
            'email' => $request->email,
            'phone' => $request->code . $request->phone,
            'country' => $request->country,
            'token' => $token,
            'md5' => md5($token),
            'password' => Hash::make($password),
            'language_id' => 1,
            'slug' => 'temp'
        ]);
        Mail::to($restaurant->email)->send(new VerificationLink([
            'token' => $token,
            'password' => $password,
        ]));

        return response()->json([
            'message' => 'Successfully created restaurant!',
            'email' => $request->email
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:restaurants',
            'password' => 'required|string',
        ]);

        $restaurant = Restaurant::whereToken($request->input('token'))->first();

        if ($restaurant->is_active === 0) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Your account is not active. Please, contact the administrator.'
            ]
        ], 403);

        if (!Hash::check($request->password, $restaurant->password))
            return response()->json([
                'message' => [
                    'type' => 'danger',
                    'content' => 'Incorrect token or password.'
                ]
            ], 401);

        $tokenResult = $restaurant->createToken('Restaurant Personal Access Token');
        $token = $tokenResult->token;
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        if ($restaurant->slug && !$restaurant->qr) $restaurant->qrCode();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'userData' => $restaurant->toArray() + [
                'notifications' => $restaurant->unreadNotifications()->latest()->limit(5)->get(),
                'language' => $restaurant->language->abbr,
            ]
        ]);
    }

    public function forgot(Request $request)
    {
        $request->validate([
            'token' => 'exists:restaurants'
        ]);

        $restaurant = Restaurant::whereToken($request->token)->first();
        $link = url('/auth/reset/' . $restaurant->id) . '/' . Crypt::encryptString($restaurant->toJson());
        // Mail::to($request->token)->send(new ResetLink($link));

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Reset password link successfully sent.'
            ]
        ]);
    }

    public function reset(Request $request, $id, $code)
    {
        $request->validate([
            'password' => 'required|confirmed'
        ]);

        $restaurant = Restaurant::find($id);
        if (Crypt::decryptString($code) === $restaurant->toJson()) {
            $restaurant->password = Hash::make($request->password);
            $restaurant->save();

            return response()->json([
                'message' => [
                    'type' => 'success',
                    'content' => 'Your password has been successfully reset.'
                ]
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Failure.'
            ]
        ]);
    }
}
