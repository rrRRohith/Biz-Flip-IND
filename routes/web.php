<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/', function () {
//     return redirect()->intended(route('login'));
// });

Route::get('/dashboard', function () {return Inertia::render('Seller/Dashboard');})->name('dashboard');

Route::get('/admin', function () {return Inertia::render('Admin/Dashboard');})->middleware(['auth', 'verified'])->name('admin');

Route::group(['middleware' => ['auth', 'verified'],'prefix'=>'admin', 'as' => 'admin.','namespace' => 'App\Http\Controllers\Admin'], function(){
    Route::get('/', function () {return Inertia::render('Admin/Dashboard');})->name('index');

    Route::resource('category', CategoryController::class);
    Route::resource('features', FeaturesController::class);
    Route::resource('feature-label', FeatureLabelController::class);
    Route::resource('facilities', FacilityController::class);
    Route::resource('country', CountryController::class);
    Route::resource('province', ProvinceController::class);
    Route::get('provinces/{countryId}', 'CityController@getProvincesByCountry');
    Route::resource('city', CityController::class);
    Route::resource('subscribers', NewsSubscriberController::class);
    Route::resource('banners', BannerController::class);

    Route::resource('testimonial', TestimonialController::class);
    Route::resource('content-page', ContentPageController::class);
    Route::resource('contact-messages', EnquiryController::class);
    Route::resource('property-leads', EnquiryController::class);
    Route::resource('navigation-menu', NavigationMenuController::class);

    Route::get('sellers', 'VendorController@index')->name('sellers');
    Route::get('seller-approvel', function () {return view('Admin.index');})->name('seller-approvel');
    Route::get('company-settings', function () {return view('Admin.index');})->name('company-settings');
    Route::get('app-settings', function () {return view('Admin.index');})->name('app-settings');
    Route::get('role-permissions', function () {return view('Admin.index');})->name('role-permissions');
    Route::get('support-tickets', function () {return view('Admin.index');})->name('support-tickets');


});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::group(['middleware' => [],'prefix'=>'seller', 'as' => 'seller.','namespace' => 'App\Http\Controllers\Seller'], function(){
    Route::get('/', function () {return Inertia::render('Seller/Dashboard');})->name('index');

    Route::get('/properties', function () {return Inertia::render('Seller/Properties');});
    Route::get('/leads', function () {return Inertia::render('Seller/Leads');});
    Route::get('/profile', function () {return Inertia::render('Seller/Profile');});
    Route::get('/settings', function () {return Inertia::render('Seller/Settings');});
});


Route::get('/', function () {
    return view('welcome');
});


Route::get('/search', function () {
    return view('search');
});


Route::get('/agent', function () {
    return view('agent');
});

Route::get('/listing', function () {
    return view('listing');
});


Route::get('/contact', function () {
    return view('contact');
});

Route::get('/auth', function () {
    return view('auth.index');
});

Route::get('/auth/customer', function () {
    return view('auth.customer');
});

Route::get('/auth/agent', function () {
    return view('auth.agent');
});

Route::get('/login', function () {
    return view('auth.login');
});

Route::get('/{slug}', function () {
    return view('page');
});

require __DIR__.'/auth.php';
