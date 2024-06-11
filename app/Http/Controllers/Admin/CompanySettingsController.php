<?php

namespace App\Http\Controllers\Admin;

use App\Models\{CompanySettings,SocailLink};
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
        $userId = auth()->user()->type == 'admin' ? auth()->user()->id : auth()->user()->parent_id;
        $socialLinks = SocailLink::where('user_id', $userId)->get();
        $formattedSocialLinks = $socialLinks->map(function($link) {
            return [
                'key' => $link->site,
                'label' => ucfirst($link->site),
                'url' => $link->link ?? '',
            ];
        });
       
        return Inertia::render('Admin/CompanySettings/Index',
                        ['company_settings' => new CompanySettingsResource($company_settings),'socialLinks' => $formattedSocialLinks]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CompanySettings $companySettings)
    {
        //

        return to_route('admin.company-settings.index')->with('success', "Settings was updated");
    }

    public function EmailConfig(Request $request)
    {
        
        $company_settings                           = CompanySettings::first();
        if(!$company_settings){
            $company_settings   =  new CompanySettings();
        }
        
        $company_settings->email_config_api_url     = $request->email_config_api_url;
        $company_settings->email_config_api_key     = $request->email_config_api_key;
        $company_settings->email_config_api_method  = $request->email_config_api_method;
        $company_settings->save();
        return to_route('admin.company-settings.index')->with('success', "Settings was updated");
        
    }
    public function SocialLinks(Request $request)
    {
        $userId = auth()->user()->type == 'admin' ? auth()->user()->id : auth()->user()->parent_id;
    
        // Delete existing social links for the user
        SocailLink::where('user_id', $userId)->delete();
    
        // Iterate over the social links array and create new entries
        foreach ($request->socialmedia_links as $socialLinkData) {
            $socialLink = new SocailLink();
            $socialLink->user_id = $userId;
            $socialLink->site = $socialLinkData['key']; // Assuming 'key' represents the site (e.g., 'facebook', 'twitter')
            $socialLink->link = $socialLinkData['url']; // 'url' represents the link
            $socialLink->status = 1;
            $socialLink->save();
        }
    
        return to_route('admin.company-settings.index')->with('success', "Settings were updated");
    }
    

    public function Seo(Request $request)
    {
        $company_settings                           = CompanySettings::first();
        if(!$company_settings){
            $company_settings   =  new CompanySettings();
        }
        $company_settings->seo_title                = $request->seo_title;
        $company_settings->seo_description          = $request->seo_description;
        $company_settings->seo_keywords             = $request->seo_keywords;
        $company_settings->save();
        return to_route('admin.company-settings.index')->with('success', "Settings was updated");
    }
    
    
    
}
