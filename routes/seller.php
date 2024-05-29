<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['middleware' => ['userType:seller','auth', 'verified'], 'prefix'=>'seller', 'as' => 'seller.','namespace' => 'App\Http\Controllers\Seller'], function(){
    Route::get('/', function () {return Inertia::render('Seller/Dashboard');})->name('index');

    Route::get('/properties', function () {return Inertia::render('Seller/Properties');})->name('properties.index');
    Route::get('/properties/create', function () {return Inertia::render('Seller/PropertyForm');})->name('properties.create');
    Route::get('/leads', function () {return Inertia::render('Seller/Leads');})->name('leads.index');
    
    //Route::get('/settings', function () {return Inertia::render('Seller/Settings');})->name('settings.index');

    Route::resource('/profile', App\Http\Controllers\Seller\ProfileController::class, [
        'only' => ['index', 'store']
    ])->parameters([
        'profiles' => 'profile'
    ]);

    Route::resource('/settings', App\Http\Controllers\Seller\SettingsController::class, [
        'only' => ['index', 'store']
    ]);

    // Route::resource('profile', [App\Http\Controllers\Seller\ProfileController::class]);
});
