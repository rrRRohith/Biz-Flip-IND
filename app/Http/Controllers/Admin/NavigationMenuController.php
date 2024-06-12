<?php

namespace App\Http\Controllers\Admin;

use App\Models\NavigationMenu;
use Illuminate\Http\Request;
use App\Http\Resources\NavigationMenuResource;
use Exception;
use Inertia\Inertia;

class NavigationMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
      
        $List = NavigationMenu::query()->paginate(10);
        return Inertia::render('Admin/NavigationMenu/Index',['MenuList' => NavigationMenuResource::collection($List)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/NavigationMenu/Create');
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
    public function show(NavigationMenu $navigationMenu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NavigationMenu $navigationMenu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NavigationMenu $navigationMenu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NavigationMenu $navigationMenu)
    {
        //
    }
}
