<?php

use App\Http\Controllers\UtilController;
use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('resend', 'AuthController@resend')->name('resend');
    Route::post('verify', 'AuthController@verify')->name('verify');

    Route::middleware('auth:admin')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::prefix('admins')->name('admins.')->group(function () {
            Route::get('{admin}', 'AdminController@show')->name('show');
        });

        Route::name('cms.')->prefix('cms')->namespace('CMS')->group(function () {
            Route::patch('global', 'GlobalController@patch')->name('global');
            Route::patch('general', 'GeneralController@patch')->name('general');
            Route::patch('components', 'ComponentsController@patch')->name('components');
            Route::patch('frontend', 'FrontendController@patch')->name('frontend');
            Route::patch('backend', 'BackendController@patch')->name('backend');
            Route::patch('auth', 'AuthController@patch')->name('auth');

            Route::name('index')->get('', function () {
                $jsonString = file_get_contents(base_path('cms.json'));
                $cms = json_decode($jsonString, true);

                return response()->json([
                    'cms' => $cms,
                    'languages' => Language::all(),
                ]);
            });
        });

        Route::prefix('features')->name('features.')->group(function () {
            Route::get('{feature}', 'FeatureController@show')->name('show');
        });

        Route::prefix('languages')->name('languages.')->group(function () {
            Route::get('{language}', 'LanguageController@show')->name('show');
        });

        Route::prefix('roles')->name('roles.')->group(function () {
            Route::get('info', 'RoleController@info')->name('info');
            Route::get('{role}', 'RoleController@show')->name('show');
        });

        Route::prefix('users')->name('users.')->group(function () {
            Route::get('info', 'UserController@info')->name('info');
            Route::get('{user}', 'UserController@show')->name('show');
        });



        Route::apiResources([
            'admins' => 'AdminController',
            'users' => 'UserController',
            'roles' => 'RoleController',
            'features' => 'FeatureController',
            'languages' => 'LanguageController',


        ]);
    });
});

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('forgot', 'AuthController@forgot')->name('forgot');
    Route::post('reset/{id}/{code}', 'AuthController@reset')->name('reset');

    Route::middleware('auth:api')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::middleware('permission')->group(function () {
            Route::name('cms.')->prefix('cms')->namespace('CMS')->group(function () {
                Route::patch('global', 'GlobalController@patch')->name('global');
                Route::patch('general', 'GeneralController@patch')->name('general');
                Route::patch('components', 'ComponentsController@patch')->name('components');
                Route::patch('frontend', 'FrontendController@patch')->name('frontend');
                Route::patch('backend', 'BackendController@patch')->name('backend');
                Route::patch('auth', 'AuthController@patch')->name('auth');

                Route::name('index')->get('', function () {
                    $jsonString = file_get_contents(base_path('cms.json'));
                    $cms = json_decode($jsonString, true);

                    return response()->json([
                        'cms' => $cms,
                        'languages' => Language::all(),
                    ]);
                });
            });

            Route::prefix('features')->name('features.')->group(function () {
                Route::get('{feature}', 'FeatureController@show')->name('show');
            });

            Route::prefix('languages')->name('languages.')->group(function () {
                Route::get('{language}', 'LanguageController@show')->name('show');
            });

            Route::prefix('roles')->name('roles.')->group(function () {
                Route::get('info', 'RoleController@info')->name('info');
                Route::get('{role}', 'RoleController@show')->name('show');
            });

            Route::prefix('users')->name('users.')->group(function () {
                Route::get('info', 'UserController@info')->name('info');
                Route::get('{user}', 'UserController@show')->name('show');
            });

            Route::prefix('methods')->name('methods.')->group(function () {
                Route::get('info', 'MethodController@info')->name('info');
                Route::get('{method}', 'MethodController@show')->name('show');
            });

            Route::prefix('recharges')->name('recharges.')->group(function () {
                Route::get('info', 'RechargeController@info')->name('info');
                Route::get('{recharge}', 'RechargeController@show')->name('show');
            });

            Route::prefix('plans')->name('plans.')->group(function () {
                Route::get('info', 'PlanController@info')->name('info');
                Route::get('bought', 'PlanController@bought')->name('bought');
                Route::get('{plan}', 'PlanController@show')->name('show');
            });

            Route::prefix('restaurants')->name('restaurants.')->group(function () {
                Route::namespace('Restaurants')->prefix('{restaurant}/edit')->name('edit.')->group(function () {
                    Route::get('dashboard', 'DashboardController@index')->name('dashboard');

                    Route::prefix('meals')->name('meals.')->group(function () {
                        Route::get('info', 'MealController@info')->name('info');
                        Route::get('{meal}', 'MealController@show')->name('show');
                    });

                    Route::prefix('addons')->name('addons.')->group(function () {
                        Route::get('{addon}', 'AddonController@show')->name('show');
                    });

                    Route::prefix('categories')->name('categories.')->group(function () {
                        Route::get('{category}', 'CategoryController@show')->name('show');
                    });

                    Route::prefix('settings')->name('settings.')->group(function () {
                        Route::patch('restaurant', 'SettingsController@restaurant')->name('restaurant');
                        Route::patch('account', 'SettingsController@account')->name('account');
                        Route::patch('cms', 'SettingsController@cms')->name('cms');
                        Route::patch('translatable', 'SettingsController@translatable')->name('translatable');
                        Route::patch('language', 'SettingsController@language')->name('language');
                        Route::get('', 'SettingsController@index')->name('index');
                    });

                    Route::prefix('plans')->name('plans.')->group(function () {
                        Route::post('auto-renew', 'PlanController@autoRenew')->name('auto-renew');
                        Route::get('info', 'PlanController@info')->name('info');
                    });

                    Route::prefix('recharges')->name('recharges.')->group(function () {
                        Route::get('info', 'RechargeController@info')->name('info');
                    });



                    Route::apiResources([
                        'categories' => 'CategoryController',
                        'addons' => 'AddonController',
                        'meals' => 'MealController',
                        'comments' => 'CommentController',
                        'plans' => 'PlanController',
                        'recharges' => 'RechargeController',
                    ]);
                });

                Route::get('info', 'RestaurantController@info')->name('info');
                Route::get('{restaurant}', 'RestaurantController@show')->name('show');
            });



            Route::apiResources([
                'users' => 'UserController',
                'roles' => 'RoleController',
                'features' => 'FeatureController',
                'languages' => 'LanguageController',

                'methods' => 'MethodController',
                'recharges' => 'RechargeController',
                'plans' => 'PlanController',
                'restaurants' => 'RestaurantController',
            ]);
        });
    });
});

Route::namespace('Restaurant')->prefix('restaurant')->name('restaurant.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('signup', 'AuthController@signup')->name('signup');

    Route::middleware('auth:restaurant')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::prefix('meals')->name('meals.')->group(function () {
            Route::get('info', 'MealController@info')->name('info');
            Route::get('{meal}', 'MealController@show')->name('show');
        });

        Route::prefix('addons')->name('addons.')->group(function () {
            Route::get('{addon}', 'AddonController@show')->name('show');
        });

        Route::prefix('categories')->name('categories.')->group(function () {
            Route::get('{category}', 'CategoryController@show')->name('show');
        });

        Route::prefix('settings')->name('settings.')->group(function () {
            Route::patch('restaurant', 'SettingsController@restaurant')->name('restaurant');
            Route::patch('account', 'SettingsController@account')->name('account');
            Route::patch('cms', 'SettingsController@cms')->name('cms');
            Route::patch('translatable', 'SettingsController@translatable')->name('translatable');
            Route::patch('language', 'SettingsController@language')->name('language');
            Route::get('', 'SettingsController@index')->name('index');
        });

        Route::prefix('plans')->name('plans.')->group(function () {
            Route::get('info', 'PlanController@info')->name('info');
        });

        Route::prefix('recharges')->name('recharges.')->group(function () {
            Route::get('info', 'RechargeController@info')->name('info');
        });

        Route::post('auto-renew', 'AuthController@autoRenew')->name('auto-renew');



        Route::apiResources([
            'categories' => 'CategoryController',
            'addons' => 'AddonController',
            'meals' => 'MealController',
            'comments' => 'CommentController',
            'plans' => 'PlanController',
            'recharges' => 'RechargeController',
        ]);
    });
});

Route::middleware('auth:admin,restaurant,api')->group(function () {
    Route::get('logout', 'UtilController@logout')->name('logout');
    Route::get('user', 'UtilController@user')->name('user');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', 'UtilController@notification')->name('show');
        Route::get('', 'UtilController@notifications')->name('index');
    });

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });

    Route::prefix('content')->name('content.')->group(function () {
        Route::get('language/{language}', function ($id) {
            $user = UtilController::get(request());

            $jsonString = file_get_contents(base_path('cms.json'));
            $cmsFile = json_decode($jsonString, true);

            $language = Language::find($id);
            if (!$language) return response()->json([
                'message' => UtilController::message($cmsFile['pages'][$user->language->abbr]['messages']['languages']['not_found'], 'danger')
            ]);

            $user->update([
                'language_id' => $id
            ]);

            $cms = [
                'global' => $cmsFile['global'],
                'pages' => $cmsFile['pages'][$language->abbr],
            ];

            return response()->json([
                'language' => $language->toArray(),
                'cms' => $cms,
            ]);
        })->name('language');
    });
});

Route::prefix('restaurants')->name('restaurants.')->group(function () {
    Route::post('{restaurant}/meals/{meal}/comment', 'FrontendController@comment')->name('comment');
    Route::get('{restaurant}/meals/{meal}', 'FrontendController@meal')->name('meal');
    Route::get('{restaurant}', 'FrontendController@show')->name('show');
});

Route::prefix('content')->name('content.')->group(function () {
    Route::get('{language}', function ($lang) {
        $jsonString = file_get_contents(base_path('cms.json'));
        $cmsFile = json_decode($jsonString, true);

        $abbr = $lang;
        if (Language::whereAbbr($lang)->count() === 0) $abbr = env('MIX_DEFAULT_LANG', 'en');

        $cms = [
            'global' => $cmsFile['global'],
            'pages' => $cmsFile['pages'][$abbr],
        ];
        $languages = Language::all();

        return response()->json([
            'cms' => $cms,
            'languages' => $languages,
        ]);
    })->name('cms');
});

Route::namespace('Method')->group(function () {
    Route::get('monetbil/notify', 'MonetbilController@notify')->name('monetbil.notify.get');
    Route::post('monetbil/notify', 'MonetbilController@notify')->name('monetbil.notify.post');
    
    Route::get('cinetpay/notify', 'CinetpayController@notify')->name('cinetpay.notify.get');
    Route::post('cinetpay/notify', 'CinetpayController@notify')->name('cinetpay.notify.post');
});
