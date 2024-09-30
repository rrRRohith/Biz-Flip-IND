<?php

use App\Http\Controllers\SetupController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Mews\Captcha\Captcha;

Route::get('captcha', [Captcha::class, 'create'])->name('captcha.create');
Route::get('/refresh-captcha', function() {
    return response()->json(['captcha' => captcha_img()]);
});
// Route::get('buckets', function(){
//     $disk = 's3';
//     $heroImage = Storage::get('hero.png');
//     $uploadedPath = Storage::disk($disk)->put('hero.png', $heroImage);
//     return Storage::disk($disk)->url($uploadedPath);
// });


Route::get('/', 'App\Http\Controllers\Controller@home')->name('index');
Route::get('/pricing', 'App\Http\Controllers\Controller@pricing')->name('pricing');

Route::get('/ads/map', 'App\Http\Controllers\AdController@map')->name('ads.map');
Route::resource('/ads', App\Http\Controllers\AdController::class, [
    'only' => ['index', 'update', 'show']
])->parameters(['ads' => 'ad:slug']);



// Route::resource('/agents', App\Http\Controllers\AgentController::class, [
//     'only' => ['show', 'update']
// ])->parameters(['agents' => 'seller:slug']);

Route::get('/agents', 'App\Http\Controllers\AgentController@index')->name('agents.index');
Route::get('/agents/{agent:slug}', 'App\Http\Controllers\AgentController@show')->name('agents.show');
Route::put('/agents/{agent:slug}', 'App\Http\Controllers\AgentController@update')->name('agents.update');

Route::get('/agent', function () {
    return view('agent');
});

Route::get('/listing', function () {
    return view('listing');
});


Route::get('/contact', 'App\Http\Controllers\Controller@contactShow')->name('contact.index');
Route::post('/contact', 'App\Http\Controllers\Controller@contact')->name('contact.store');
Route::post('/subscribe', 'App\Http\Controllers\Controller@subscribe')->name('subscribe.store');


Route::get('/sign-up', function () {
    return view('auth.sign-up')->withProvinces(\App\Models\Province::all());
});

Route::post('/sign-up', 'App\Http\Controllers\Auth\RegisteredUserController@register');


// Route::get('/auth', function () {
//     return view('auth.index');
// });

// Route::get('/auth/seller', function () {
//     return view('auth.seller');
// });

// Route::get('/auth/customer', function () {
//     return view('auth.customer');
// });

Route::get('pending-review', function () {
    return view('auth.pendingReview');
});

// Route::post('/auth/seller', 'App\Http\Controllers\Auth\RegisteredUserController@seller');
// Route::post('/auth/agent', 'App\Http\Controllers\Auth\RegisteredUserController@agent');
// Route::post('/auth/customer', 'App\Http\Controllers\Auth\RegisteredUserController@customer');

// Route::get('/auth/agent', function () {
//     return view('auth.agent');
// });

Route::get('import-permissions', function () {
    return '<form action="' . route('uploadPermissions') . '" method="POST" enctype="multipart/form-data">
                ' . csrf_field() . '
                <input type="file" name="excel_file">
                <button type="submit">Upload Excel</button>
            </form>';
});

Route::post('uploadExcel', [SetupController::class, 'upload'])->name('uploadPermissions');


// Route::group(['middleware' => ['userType:customer','auth', 'verified'], 'prefix'=>'customer', 'as' => 'customer.','namespace' => 'App\Http\Controllers\Customer'], function(){
    
//     Route::get('/', 'App\Http\Controllers\Customer\ChatController@index')->name('index');

//     Route::resource('/profile', App\Http\Controllers\Customer\ProfileController::class, [
//         'only' => ['index', 'store']
//     ])->parameters([
//         'profiles' => 'profile'
//     ]);
//     Route::get('/password', 'App\Http\Controllers\Customer\ProfileController@password')->name('password.index');
//     Route::post('/password', 'App\Http\Controllers\Customer\ProfileController@changePassword')->name('password.store');

//     Route::get('/chats/{chat}', 'App\Http\Controllers\Customer\ChatController@show')->name('chats.show');
//     Route::put('/chats/{chat}', 'App\Http\Controllers\Customer\ChatController@update')->name('chats.update');
// });


require __DIR__.'/auth.php';
require __DIR__.'/seller.php';
require __DIR__.'/admin.php';


// Route::get('/login', function () {
//     return view('auth.login');
// });

Route::get('/{page:slug}', 'App\Http\Controllers\Controller@page')->name('page');

// Route::get('/{slug}', function () {
//     return view('page');
// });