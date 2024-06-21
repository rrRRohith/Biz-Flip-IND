<?php

use App\Http\Controllers\SetupController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin', function () {return Inertia::render('Admin/Dashboard');})->middleware(['auth', 'verified'])->name('admin');

Route::group(['middleware' => ['userType:admin', 'auth', 'verified'], 'prefix'=>'admin', 'as' => 'admin.','namespace' => 'App\Http\Controllers\Admin'], function(){
 
    Route::get('/', 'Controller@Dashboard')->name('index');
    Route::get('ads/pending-approvel', 'AdsController@pendingApprovel')->name('ads.pendingApprovel');
    Route::get('sellers/pending/approvel', 'VendorController@pendingApprovel')->name('sellers.pendingApprovel');
    Route::post('sellers/status/update/{id}', 'VendorController@statusUpdate')->name('sellers.status-update');
    
    Route::post('category/position-update', 'CategoryController@positionUpdate')->name('category.position-update');
    Route::post('category/position-update', 'BusinessCategoryController@positionUpdate')->name('business-category.position-update');

    Route::resources([
        'category'          => CategoryController::class,
        'features'          => FeaturesController::class,
        'feature-label'     => FeatureLabelController::class,
        'facilities'        => FacilityController::class,
        'country'           => CountryController::class,
        'province'          => ProvinceController::class,
        'city'              => CityController::class,
        'subscribers'       => NewsSubscriberController::class,
        'banners'           => BannerController::class,
        'testimonial'       => TestimonialController::class,
        'content-page'      => ContentPageController::class,
        'navigation-menu'   => NavigationMenuController::class,
        'support-tickets'   => TicketController::class,
        'ads'               => AdsController::class,
        'sellers'           => VendorController::class,
        'role-responsibilities'=> RoleController::class,
        'staff'             => StaffController::class,
        'business-category' => BusinessCategoryController::class,
        
    ]);

    Route::resource('/profile', ProfileController::class, [
        'only' => ['index', 'store']
    ])->parameters([
        'profiles' => 'profile'
    ]);

    Route::get('provinces/{countryId}', 'CityController@getProvincesByCountry');
    Route::get('contact-messages', 'EnquiryController@contact_index')->name('contact_index');
    Route::get('contact-leads/{id}', 'EnquiryController@contact_show')->name('contact_show');
    Route::delete('contact-leads/{id}', 'EnquiryController@contact_delete')->name('contact_delete');
    Route::get('property-leads', 'EnquiryController@propery_leads_index')->name('propery_leads_index');
    Route::get('property-leads/{id}', 'EnquiryController@propery_lead_show')->name('propery_lead_show');
    Route::delete('property-leads/{id}', 'EnquiryController@propery_lead_delete')->name('propery_lead_delete');
    
    Route::post('support-tickets/close/{id}', 'TicketController@close')->name('support-tickets.close-ticket');
    
    Route::get('app-settings', 'AppSettingsController@index')->name('app-settings.index');
    Route::post('app-settings/{id}', 'AppSettingsController@index')->name('app-settings.update');
    
    Route::get('company-settings', 'CompanySettingsController@index')->name('company-settings.index');
    
    Route::post('company-settings/email-config', 'CompanySettingsController@EmailConfig')->name('company-settings.email-config');
    Route::post('company-settings/social-links', 'CompanySettingsController@SocialLinks')->name('company-settings.social-link');
    Route::post('company-settings/seo', 'CompanySettingsController@Seo')->name('company-settings.seo');
  

});

Route::get('/', 'App\Http\Controllers\Controller@home')->name('index');

Route::get('/ads/map', 'App\Http\Controllers\AdController@map')->name('ads.map');
Route::resource('/ads', App\Http\Controllers\AdController::class, [
    'only' => ['index', 'update', 'show']
])->parameters(['ads' => 'ad:slug']);



// Route::resource('/agents', App\Http\Controllers\AgentController::class, [
//     'only' => ['show', 'update']
// ])->parameters(['agents' => 'seller:slug']);

Route::get('/agents/{agent:slug}', 'App\Http\Controllers\AgentController@show')->name('agents.show');
Route::post('/agents/{agent:slug}', 'App\Http\Controllers\AgentController@update')->name('agents.update');

Route::get('/agent', function () {
    return view('agent');
});

Route::get('/listing', function () {
    return view('listing');
});


Route::get('/contact', function () {
    return view('contact');
});
Route::post('/contact', 'App\Http\Controllers\Controller@contact')->name('contact.store');
Route::post('/subscribe', 'App\Http\Controllers\Controller@subscribe')->name('subscribe.store');

Route::get('/auth', function () {
    return view('auth.index');
});

Route::get('/auth/seller', function () {
    return view('auth.seller');
});

Route::post('/auth/seller', 'App\Http\Controllers\Auth\RegisteredUserController@seller');
Route::post('/auth/agent', 'App\Http\Controllers\Auth\RegisteredUserController@agent');

Route::get('/auth/agent', function () {
    return view('auth.agent');
});



Route::get('import-permissions', function () {
    return '<form action="' . route('uploadPermissions') . '" method="POST" enctype="multipart/form-data">
                ' . csrf_field() . '
                <input type="file" name="excel_file">
                <button type="submit">Upload Excel</button>
            </form>';
});

Route::post('uploadExcel', [SetupController::class, 'upload'])->name('uploadPermissions');


require __DIR__.'/auth.php';
require __DIR__.'/seller.php';

// Route::get('/login', function () {
//     return view('auth.login');
// });

Route::get('/{page:slug}', 'App\Http\Controllers\Controller@page')->name('page');

// Route::get('/{slug}', function () {
//     return view('page');
// });