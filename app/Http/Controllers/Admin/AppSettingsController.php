<?php

namespace App\Http\Controllers\Admin;

use App\Models\AppSettings;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
        $app_settings = AppSettings::first();
        
        if ($request->splash_screen) {
            if ($app_settings->splash_screen) {
                Storage::disk('images')->delete($app_settings->splash_screen);
            }
            $imageName = Str::random(20) . '.' . $request->splash_screen->getClientOriginalExtension();
            $imagePath = $request->splash_screen->storeAs('app_settings', $imageName, 'images');
            $app_settings->splash_screen  = $imagePath;
        }
           // Handle image removal
           if ($request->remove_image2) {
            if ($app_settings->app_background) {
                Storage::disk('images')->delete($app_settings->app_background);
                $app_settings->app_background = null;
            }
        }

        if ($request->app_background) {
            if ($app_settings->app_background) {
                Storage::disk('images')->delete($app_settings->app_background);
            }
            $imageName = Str::random(20) . '.' . $request->app_background->getClientOriginalExtension();
            $imagePath = $request->app_background->storeAs('app_settings', $imageName, 'images');
            $app_settings->app_background  = $imagePath;
        }

        $app_settings->apiKey = $request->apiKey;
        $app_settings->authDomain = $request->authDomain;
        $app_settings->databaseURL = $request->databaseURL;
        $app_settings->projectId = $request->projectId;
        $app_settings->storageBucket = $request->storageBucket;
        $app_settings->messagingSenderId = $request->messagingSenderId;
        $app_settings->appId = $request->appId;
        $app_settings->measurementId = $request->measurementId;
        $app_settings->save();

        return to_route('admin.app-settings.index')->with('success', "Settings was updated");

    }

}
