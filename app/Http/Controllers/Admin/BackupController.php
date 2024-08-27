<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;
use Exception;
use App\Http\Resources\BannerResource;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\Banner\StoreBannerRequest;
use App\Http\Requests\Banner\UpdateBannerRequest;
class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //    
        $bannersList = Banner::query()->paginate(10);
                                
        return Inertia::render('Admin/Banner/Index',['bannersList' => BannerResource::collection($bannersList),'success' => session('success'),'error' => session('error')]);
                  
    }

}