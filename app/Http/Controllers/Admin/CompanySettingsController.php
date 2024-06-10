<?php

namespace App\Http\Controllers\Admin;

use App\Models\CompanySettings;
use Illuminate\Http\Request;
use App\Http\Resources\CompanySettingsResource;
use Inertia\Inertia;

class CompanySettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $company_settings = CompanySettings::with('social_settings')->first();
    
        return Inertia::render('Admin/CompanySettings/Index',
                        ['company_settings' => new CompanySettingsResource($company_settings)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CompanySettings $companySettings)
    {
        //

        $company_settings                           = CompanySettings::first();
        $company_settings->facebook_link            = $request->facebook_link;
        $company_settings->instagram_link           = $request->instagram_link;
        $company_settings->linkedin_link            = $request->linkedin_link;
        $company_settings->youtube_link             = $request->youtube_link;
        $company_settings->twitter_link             = $request->twitter_link;
        $company_settings->seo_title                = $request->seo_title;
        $company_settings->seo_description          = $request->seo_description;
        $company_settings->seo_keywords             = $request->seo_keywords;
        $company_settings->email_config_api_url     = $request->email_config_api_url;
        $company_settings->email_config_api_key     = $request->email_config_api_key;
        $company_settings->email_config_api_method  = $request->email_config_api_method;
        $company_settings->save();

        return to_route('admin.company-settings.index')->with('success', "Settings was updated");
    }
}
