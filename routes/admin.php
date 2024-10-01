<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/admin', function () {return Inertia::render('Admin/Dashboard');})->middleware(['auth', 'verified'])->name('admin');

Route::group(['middleware' => ['userType:admin', 'auth', 'verified'], 'prefix'=>'admin', 'as' => 'admin.','namespace' => 'App\Http\Controllers\Admin'], function(){
 
    Route::get('/', 'Controller@Dashboard')->name('index');
    Route::get('ads/pending-approvel', 'AdsController@pendingApprovel')->name('ads.pendingApprovel');
    Route::get('users/pending/approvel', 'VendorController@pendingApprovel')->name('sellers.pendingApprovel');
    Route::post('users/status/update/{id}', 'VendorController@statusUpdate')->name('sellers.status-update');
    
    Route::post('category/position-update', 'CategoryController@positionUpdate')->name('category.position-update');
    Route::post('category/position-update', 'BusinessCategoryController@positionUpdate')->name('business-category.position-update');

    // Route::get('category/{category}/form', 'CategoryController@form')->name('category.form');
    // Route::post('category/{category}/form', 'CategoryController@updateForm')->name('category.form.update');

    Route::resources([
        'category'          => CategoryController::class,
        'features'          => FeaturesController::class,
        'feature-label'     => FeatureLabelController::class,
        'facilities'        => FacilityController::class,
        'ad_types'          => AdTypeController::class,
        'ad_purposes'       => AdPurposeController::class,
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
        // 'sellers'           => VendorController::class,
        'role-responsibilities'=> RoleController::class,
        'staff'             => StaffController::class,
        'business-category' => BusinessCategoryController::class,
        'app-settings'      => AppSettingsController::class,
    ]);

    Route::get('support-tickets/{ticket}/reopen', 'TicketController@reopen')->name('support-tickets.reopen');

    Route::resource('users', VendorController::class)
    ->names([
        'index'   => 'sellers.index',
        'create'  => 'sellers.create',
        'store'   => 'sellers.store',
        'show'    => 'sellers.show',
        'edit'    => 'sellers.edit',
        'update'  => 'sellers.update',
        'destroy' => 'sellers.destroy',
    ]);

    
    // Route::get('customers', 'CustomerController@index')->name('customers.index');
    
    Route::get('backups', 'BackupController@index')->name('backups.index');
    Route::post('backups/update-database', 'BackupController@updateDatabase')->name('backups.update-db');
    Route::post('backups/update-images', 'BackupController@updateImages')->name('backups.update-images');
    Route::post('backups/download', 'BackupController@download')->name('backups.download');
    
    Route::get('subscription-plans', 'SubscriptionPlansController@plans')->name('subscription.index');
    Route::post('subscription-plans', 'SubscriptionPlansController@plansStore')->name('subscription.create');
    Route::get('subscription-plans/{id}', 'SubscriptionPlansController@plansEdit')->name('subscription.edit');
    Route::post('subscription-plans/{id}', 'SubscriptionPlansController@plansUpdate')->name('subscription.update');
    Route::post('subscription-plans/{id}/delete', 'SubscriptionPlansController@plansDelete')->name('subscription.delete');


    
    Route::get('subscribed-agents', 'SubscriptionPlansController@subscribedAgents')->name('subscription.subscribed-agents');
    Route::post('free-plan-agents', 'SubscriptionPlansController@freePlanAgents')->name('subscription.free-plan-agents');
    Route::get('subscription-invoices', 'SubscriptionPlansController@subscriptionInvoices')->name('subscription.subscription-invoices');
    Route::post('subscription-invoices/{id}', 'SubscriptionPlansController@subscriptionInvoicesShow')->name('subscription.subscription-invoices.show');


    Route::resource('/profile', \ProfileController::class, [
        'only' => ['index', 'store']
    ])->parameters([
        'profiles' => 'profile'
    ]);

    Route::get('leads', 'EnquiryController@contact_index')->name('leads');
    Route::get('provinces/{countryId}', 'CityController@getProvincesByCountry');
    Route::get('contact-messages', 'EnquiryController@contact_index')->name('contact_index');
    Route::get('contact-leads/{id}', 'EnquiryController@contact_show')->name('contact_show');
    Route::delete('contact-leads/{id}', 'EnquiryController@contact_delete')->name('contact_delete');
    Route::get('property-leads', 'EnquiryController@propery_leads_index')->name('propery_leads_index');
    Route::get('property-leads/{id}', 'EnquiryController@propery_lead_show')->name('propery_lead_show');
    Route::delete('property-leads/{id}', 'EnquiryController@propery_lead_delete')->name('propery_lead_delete');
    
    Route::any('support-tickets/close/{id}', 'TicketController@close')->name('support-tickets.close-ticket');
    
    // Route::get('app-settings', 'AppSettingsController@index')->name('app-settings.index');
    // Route::post('app-settings/{id}', 'AppSettingsController@index')->name('app-settings.update');
    
    Route::get('company-settings', 'CompanySettingsController@index')->name('company-settings.index');
    
    Route::post('company-settings/email-config', 'CompanySettingsController@EmailConfig')->name('company-settings.email-config');
    Route::post('company-settings/social-links', 'CompanySettingsController@SocialLinks')->name('company-settings.social-link');
    Route::post('company-settings/seo', 'CompanySettingsController@Seo')->name('company-settings.seo');

});
