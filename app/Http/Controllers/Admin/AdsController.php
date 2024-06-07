<?php

namespace App\Http\Controllers\Admin;
use App\Models\{Ad, Category, Facility, Features, Province};
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Ad\{AdRequest};
use App\Http\Resources\{AdResource};
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AdsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $ads = Ad::with('seller')->orderBy('updated_at','DESC')->get();
       
        return Inertia::render('Admin/Ads/Index', [
                            'ads' => AdResource::collection($ads),
                        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ad $ads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ad $ads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ad $ads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ads)
    {
        //
    }
}
