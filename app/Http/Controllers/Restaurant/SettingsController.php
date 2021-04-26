<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function index()
    {
        $restaurant = UtilController::get(request());

        return response()->json([
            'restaurant' => $restaurant->toArray(),
        ]);
    }

    public function restaurant(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $input = $request->validate([
            'name' => 'required|string',
            'owner' => 'required|string',
            'phone' => 'nullable|string',
            'whatsapp' => 'nullable|string',
            'location' => 'nullable',
            'address' => 'nullable|string',
            'currency' => 'nullable|string',
            'position' => 'nullable|integer',
        ]);

        $restaurant_name = $restaurant->name;

        $restaurant->update($input);

        if ($request->name !== $restaurant_name || !is_file(public_path($restaurant->qr))) {
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
                            \"data\": \"" . env('APP_URL') . "/restaurants/" . $restaurant->slug . "\",\r\n    
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
                $qrName = $restaurant->slug . '.png';
                file_put_contents(public_path('images/restaurants/qr/' . $qrName), $response);
                $restaurant->update([
                    'qr' => $qrName,
                ]);
            }
        }

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['restaurant'], 'success'),
        ]);
    }

    public function account(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $request->validate([
            'email' => 'required|string|email',
            'country' => 'required|string',
            'photo' => 'nullable|file|image',
            'password' => 'nullable',
            'new_password' => 'nullable|confirmed',
        ]);

        $input = $request->except(['password', 'new_password', 'new_password_confirmation']);
        if ($request->password) {
            if (Hash::check($request->password, $restaurant->password)) $input['password'] = Hash::make($request->new_password);
            else return response()->json([
                'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['password'], 'success'),
            ]);
        }

        if ($file = $request->file('photo')) {
            if ($restaurant->photo && is_file(public_path($restaurant->photo))) unlink(public_path($restaurant->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/restaurants', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['account'], 'success'),
        ]);
    }

    public function cms(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $input = $request->validate([
            'banner1' => 'nullable|file|image',
            'banner2' => 'nullable|file|image',
            'banner3' => 'nullable|file|image',
        ]);

        if ($file = $request->file('banner1')) {
            if ($restaurant->banner1 && is_file(public_path($restaurant->banner1))) unlink(public_path($restaurant->banner1));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/restaurants', $fileName);
            $input['banner1'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('banner2')) {
            if ($restaurant->banner2 && is_file(public_path($restaurant->banner2))) unlink(public_path($restaurant->banner2));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/restaurants', $fileName);
            $input['banner2'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('banner3')) {
            if ($restaurant->banner3 && is_file(public_path($restaurant->banner3))) unlink(public_path($restaurant->banner3));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/restaurants', $fileName);
            $input['banner3'] = htmlspecialchars($fileName);
        }

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ]);
    }

    public function calendar(Request $request)
    {
        $cms = UtilController::cms();
        $restaurant = UtilController::get(request());

        $input = $request->validate([
            'days' => 'required|string',
            'hours' => 'required|string',
        ]);

        $restaurant->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$restaurant->language->abbr]['messages']['settings']['cms'], 'success'),
        ]);
    }
}
