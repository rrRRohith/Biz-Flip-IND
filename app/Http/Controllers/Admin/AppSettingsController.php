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
        if(!$app_settings){
            $app_settings = new AppSettings();
        }
        if ($request->splash_screen) {
            if ($app_settings->splash_screen) {
                Storage::disk('images')->delete($app_settings->splash_screen);
            }
            $app_settings->splash_screen  = $this->uploadFile(file : $request->splash_screen, path : 'app_settings');
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
            $app_settings->app_background  = $this->uploadFile(file : $request->app_background, path : 'app_settings');
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
