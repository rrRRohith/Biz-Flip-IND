<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['middleware' => ['userType:seller','auth', 'verified'], 'prefix'=>'seller', 'as' => 'seller.','namespace' => 'App\Http\Controllers\Seller'], function(){
    
    Route::get('/', 'App\Http\Controllers\Seller\Controller@dashboard')->name('index');
    Route::get('/graph', 'App\Http\Controllers\Seller\Controller@graph')->name('graph');
    Route::get('/ads/search', 'App\Http\Controllers\Seller\AdController@search')->name('ads.search');
    Route::put('/ads/{ad}/status', 'App\Http\Controllers\Seller\AdController@status')->name('ads.status');
    
    Route::resource('/ads', App\Http\Controllers\Seller\AdController::class, [
        'except' => ['show']
    ]);

    Route::get('/leads/search', 'App\Http\Controllers\Seller\LeadController@search')->name('leads.search');
    Route::resource('/leads', App\Http\Controllers\Seller\LeadController::class, [
        'only' => ['index', 'update', 'destroy']
    ]);
    

    Route::resource('/profile', App\Http\Controllers\Seller\ProfileController::class, [
        'only' => ['index', 'store']
    ])->parameters([
        'profiles' => 'profile'
    ]);
    Route::get('/password', 'App\Http\Controllers\Seller\ProfileController@password')->name('password.index');
    Route::post('/password', 'App\Http\Controllers\Seller\ProfileController@changePassword')->name('password.store');

    Route::resource('/settings', App\Http\Controllers\Seller\SettingsController::class, [
        'only' => ['index', 'store']
    ])->middleware("can:Settings");
    
    Route::get('/tickets/search', 'App\Http\Controllers\Seller\TicketController@search')->name('tickets.search');
    Route::resource('/tickets', App\Http\Controllers\Seller\TicketController::class, [
        'only' => ['index', 'show', 'update', 'create', 'store']
    ]);

    Route::get('/staffs/roles/search', 'App\Http\Controllers\Seller\RoleController@search')->name('roles.search');
    Route::resource('/staffs/roles', App\Http\Controllers\Seller\RoleController::class);

    Route::get('/staffs/search', 'App\Http\Controllers\Seller\StaffController@search')->name('staffs.search');
    Route::resource('/staffs', App\Http\Controllers\Seller\StaffController::class);
});
