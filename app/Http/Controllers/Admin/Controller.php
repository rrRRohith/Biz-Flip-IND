<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\{Ad, User, LeadEnquiry, Seller};
use Inertia\Inertia;
use Carbon\Carbon;
use DB;


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    use \App\Helper\Upload;
    public function dashboard()
    {

        //////////////////////////////////Data values///////////////////////////////////
        $sellers = User::where('type', 'seller')->where('status', 1)->count();
        $leads = LeadEnquiry::count();
        $ads = Ad::count();
        $ads_completed = Ad::where('status', 3)->count();

        //////////////////////////////////Last 7 Days Data values///////////////////////////////////
        $leadsLast7Days = LeadEnquiry::where('created_at', '>=', now()->subDays(6)->startOfDay())
                        ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
                        ->groupBy('date')
                        ->orderBy('date')
                        ->get();

        $leadCategory = [];
        $leadData = [];

        // Initialize the last 7 days with zero counts
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i)->format('Y-m-d');
            $ShowDate = Carbon::now()->subDays($i)->format('d-M-Y');
            $leadCategory[] = $ShowDate;
            $leadData[] = $leadsLast7Days->where('date',$date)->pluck('count')->first() ?? 0 ;
        }


        $leadsPrevious7Days = LeadEnquiry::whereBetween('created_at', [now()->subDays(13)->startOfDay(), now()->subDays(7)->endOfDay()])
                                ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
                                ->groupBy('date')
                                ->orderBy('date')
                                ->get();

        $leadsPrevious7Days->pluck('count')->first() ?? 0;
        $leadsLast7Days->pluck('count')->first() ?? 0;

        

        // Fill the leadData array with the actual counts
        // foreach ($leadsLast7Days as $lead) {
        //     $leadData[$lead->date] = $lead->count;
        // }

      

        // // Prepare the data for the chart
        // $leadData = array_values($leadData);

        $leadLast7Days = [
            'leadCategoryArray' => json_encode($leadCategory),
            'leadDataArray' => json_encode($leadData),
        ];


        ///////////////////////////////Seller By Ads///////////////////////////////////////////////////
        $adCompletedBySeller = Ad::where('status', 1)
            ->select('seller_id', DB::raw('COUNT(*) as lead_count'))
            ->groupBy('seller_id')
            ->get();



        $adSellerArray = [];

        foreach ($adCompletedBySeller as $ad) {
            // Load the seller model using the seller_id
            $seller = User::find($ad->seller_id);

            // Check if the seller exists (optional, based on your database structure)
            if ($seller) {
                $adSellerArray[] = [
                    'seller' => $seller->name, // Assuming 'name' is the seller's name column
                    'lead_count' => $ad->lead_count,
                ];
            }
        }

        
     


        // JSON encode the array if needed for passing as props
        $sellerAdsJson = $adSellerArray;

        ////////////////////////////////Ads Listing//////////////////////////////////////////////////
        $adsList = Ad::with('images')->orderBy('updated_at', 'DESC')->get();

        $adsListing = $adsList->flatMap(function ($ad) {
            return $ad->images->map(function ($image) use ($ad) {
                return [
                    'image' => $image->image_url,
                    'title' => $ad->title,
                    'slug' => $ad->slug,
                ];
            });
        })->toArray();
        
        
        ///////////////////////////////Ads Completed///////////////////////////////////////////////////
        $adCompletedBySeller = Ad::where('status', 2)
            ->select('seller_id', DB::raw('COUNT(*) as lead_count'))
            ->groupBy('seller_id')
            ->get();


        $adCompletedLeads = [];

        foreach ($adCompletedBySeller as $ad) {
            // Load the seller model using the seller_id
            $seller = User::find($ad->seller_id);

            // Check if the seller exists (optional, based on your database structure)
            if ($seller) {
                $adCompletedLeads[] = [
                    'seller' => $seller->name, // Assuming 'name' is the seller's name column
                    'lead_count' => $ad->lead_count,
                ];
            }
        }

        // JSON encode the array if needed for passing as props
        $adCompletedJson = $adCompletedLeads;


        return Inertia::render('Admin/Dashboard', [
            'data' => [
                'sellers' => $sellers,
                'leads' => $leads,
                'ads' => $ads,
                'ads_completed' => $ads_completed,
            ],
            'adsListing' => $adsListing,
            'leadLast7Days' => $leadLast7Days,
            'sellerLeads' => $sellerAdsJson,
            'adCompletedBySeller' => $adCompletedJson,
        ]);
    }
}
