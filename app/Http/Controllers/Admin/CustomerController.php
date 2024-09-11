<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\CustomerResource;
class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customersList = User::where('type','customer')->get();
        return Inertia::render('Admin/Customers/Index',
                                    ['customersList' => CustomerResource::collection($customersList)]
                                );
    }


}