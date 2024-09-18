<?php

namespace App\Http\Controllers\Admin;

use App\Models\ContactEnquiry;
use App\Models\LeadEnquiry;
use Illuminate\Http\Request;
use App\Http\Resources\ContactEnquiryResource;
use App\Http\Resources\LeadEnquiryResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function contact_index()
    {
        $contactLeads = ContactEnquiry::query()->paginate(100);
        $adLeads = LeadEnquiry::with('ad','ad.seller')->get();

        return Inertia::render('Admin/ContactEnquiry/Index',
                        ['contactLeads' => ContactEnquiryResource::collection($contactLeads),
                        'adLeads' => LeadEnquiryResource::collection($adLeads)
                        ]);
    }

    /**
     * Display the specified resource.
     */

    public function contact_show($id)
    {
        //  
        $inquiry = ContactEnquiry::where('id',$id)->first();
        return new ContactEnquiryResource($inquiry);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request,$id)
    {
        //
        $category = ContactEnquiry::where('id',$id)->first() ?? abort(404);
        $category->status= $request->status;
        $category->save();

        return to_route('admin.contact_index')
            ->with('success', "inquiry  was updated");

    }

    /**
     * Remove the specified resource from storage.
     */

    public function contact_delete($id)
    {
        $inquiry = ContactEnquiry::where('id',$id)->first() ?? abort(404);
        $inquiry->delete();
        
        return to_route('admin.contact_index')
            ->with('success', "inquiry was deleted");
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function propery_leads_index(){
        $Leads = LeadEnquiry::with('ad','ad.seller')->get();
    
        return Inertia::render('Admin/LeadEnquiry/Index',['Leads' => LeadEnquiryResource::collection($Leads)]);
    }

    public function propery_lead_show($id){
        $inquiry = LeadEnquiry::where('id',$id)->first();
        return new LeadEnquiryResource($inquiry);
    }

    public function propery_lead_delete($id){
        $inquiry = LeadEnquiry::where('id',$id)->first() ?? abort(404);
        $inquiry->delete();
        
        return to_route('admin.propery_leads_index')
            ->with('success', "Lead was deleted");
    }

    

}
