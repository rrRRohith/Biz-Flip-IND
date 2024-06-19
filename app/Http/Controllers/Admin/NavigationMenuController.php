<?php

namespace App\Http\Controllers\Admin;

use App\Models\{NavigationMenu,Page};
use Illuminate\Http\Request;
use App\Http\Resources\NavigationMenuResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Str;


class NavigationMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
      
        $List = NavigationMenu::whereNull('parent_id')->get();
        return Inertia::render('Admin/NavigationMenu/Index',['MenuList' => NavigationMenuResource::collection($List)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $landingPage =  Page::get();
        $landingPage =  $landingPage->map(function($link) {
                            return [
                                'label' => $link->title,
                                'link' => $link->slug,
                            ];
                        });

        return Inertia::render('Admin/NavigationMenu/Create',['landingPage' => $landingPage]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            // Create the main navigation menu item
            $nav = new NavigationMenu();
            $nav->title = $request->title;
            $nav->slug = $request->str('title')->slug('-'); // Use the global Str facade
            $nav->parent_id = null;
            $nav->link = null;
            $nav->position = null;
            $nav->custom_link = null;
            $nav->status = 1;
            $nav->save();
        
            // Iterate over each item in the request
            foreach ($request->items ?? [] as $position => $subLinks) {
                $subnav = new NavigationMenu();
                $subnav->title = $subLinks['linkText']; // Use linkText for the sub-menu title
                $subnav->slug = Str::slug($subLinks['linkText'], '-');
                $subnav->parent_id = $nav->id;
                $subnav->link = $subLinks['linkType'] == 'custom_link' ? $subLinks['customLink'] : $subLinks['linkType'];
                $subnav->position = $position;
                $subnav->custom_link = $subLinks['linkType'] == 'custom_link' ? 1 : 0;
                $subnav->status = 1;
                $subnav->save();
            }
        
            return to_route('admin.navigation-menu.index')
                ->with('success', "Menu was created");
        
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
    public function edit($id)
    {
        //
    
        $nav   = NavigationMenu::where('id',$id)->first() ?? abort(404);
        $landingPage =  Page::get();
        $landingPage =  $landingPage->map(function($link) {
                            return [
                                'label' => $link->title,
                                'link' => $link->slug,
                            ];
                        });

       
        return Inertia::render('Admin/NavigationMenu/Edit',['menu' => new NavigationMenuResource($nav),'landingPage' => $landingPage]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Find the main navigation menu item or abort if not found
        $nav = NavigationMenu::where('id', $id)->first() ?? abort(404);
        $nav->title = $request->title;
        $nav->slug = Str::slug($request->title, '-'); // Use the global Str facade
        $nav->parent_id = null;
        $nav->link = null;
        $nav->position = null;
        $nav->custom_link = null;
        $nav->save();
    
        // Delete existing sub-menu items
        NavigationMenu::where('parent_id', $id)->delete();
    
        // Iterate over each item in the request
        foreach ($request->items ?? [] as $position => $subLinks) {
            $subnav = new NavigationMenu();
            $subnav->title = $subLinks['linkText']; // Use linkText for the sub-menu title
            $subnav->slug = Str::slug($subLinks['linkText'], '-');
            $subnav->parent_id = $nav->id;
            $subnav->link = $subLinks['linkType'] == 'custom_link' ? $subLinks['customLink'] : $subLinks['linkType'];
            $subnav->position = $position;
            $subnav->custom_link = $subLinks['linkType'] == 'custom_link' ? 1 : 0;
            $subnav->status = 1;
            $subnav->save();
        }
    
        return to_route('admin.navigation-menu.index')
            ->with('success', "Menu was updated");
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        
        NavigationMenu::where('id',$id)->first() ?? abort(404);
        NavigationMenu::where('parent_id',$id)->delete();
        NavigationMenu::where('id',$id)->delete();
        return to_route('admin.navigation-menu.index')
        ->with('success', "Menu was deleted");
    }
}
