<?php

namespace App\Http\Controllers\Admin;

use App\Models\AppSettings;
use Illuminate\Http\Request;
use App\Http\Resources\AppSettingsResource;
use Inertia\Inertia;

class AppSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $app_settings = AppSettings::first();
       
        return Inertia::render('Admin/AppSettings/Index',['app_settings' => new AppSettingsResource($app_settings),'success' => session('success'),'error' => session('error')]);

    }

    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AppSettings $appSettings)
    {
        //
    }

}
