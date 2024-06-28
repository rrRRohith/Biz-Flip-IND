<?php

namespace App\Http\Controllers\Admin;

use App\Models\{NavigationMenu,Page};
use Illuminate\Http\Request;
use App\Http\Resources\NavigationMenuResource;
use App\Http\Requests\NavigationMenu\{StoreNavigationMenuRequest,UpdateNavigationMenuRequest};
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
      
        $List = NavigationMenu::with('children')->whereNull('parent_id')->get();
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
 
public function store(StoreNavigationMenuRequest $request)
{

    // Create the main navigation menu item
    $nav = new NavigationMenu();
    $nav->title = $request->title;
    $nav->slug = Str::slug($request->title, '-');
    $nav->parent_id = null;
    $nav->link = null;
    $nav->position = null;
    $nav->custom_link = null;
    $nav->status = 1;
    $nav->save();

    // Recursive function to save items and their children
    $this->saveItems($request->items ?? [], $nav->id);

    return redirect()->route('admin.navigation-menu.index')
                     ->with('success', "Menu was created");
}

private function saveItems(array $items, $parentId)
{
    foreach ($items as $position => $item) {
        if($item['linkText'] != null){
            $subnav = new NavigationMenu();
            $subnav->title = $item['linkText'];
            $subnav->slug = Str::slug($item['linkText'], '-');
            $subnav->parent_id = $parentId;
            $subnav->link = $item['linkType'] == 'custom_link' ? $item['customLink'] : $item['linkType'];
            $subnav->position = $position;
            $subnav->custom_link = $item['linkType'] == 'custom_link' ? 1 : 0;
            $subnav->status = 1;
            $subnav->save();
    
            // Recursively save children
            if (!empty($item['children'])) {
                $this->saveItems($item['children'], $subnav->id);
            }
        }
    }
}

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //

        $nav = NavigationMenu::with('children')->where('id',$id)->first() ?? abort(404);
        return response()->json(new NavigationMenuResource($nav));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
    
        $nav   = NavigationMenu::with('children')->where('id',$id)->first() ?? abort(404);
        $landingPage =  Page::get();
        $landingPage =  $landingPage->map(function($link) {
                            return [
                                'label' => $link->title,
                                'link' => $link->slug,
                            ];
                        });

    //    dd(new NavigationMenuResource($nav));
        return Inertia::render('Admin/NavigationMenu/Edit',['menu' => new NavigationMenuResource($nav),'landingPage' => $landingPage]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNavigationMenuRequest $request, $id)
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
    
      
        $this->updateItems($request->items ?? [], $nav->id);
       
        return to_route('admin.navigation-menu.index')
            ->with('success', "Menu was updated");
    }
    

    private function updateItems(array $items, $parentId)
{
    // Get all existing children of $parentId
    $existingChildren = NavigationMenu::where('parent_id', $parentId)->get();

    // IDs of items to keep
    $itemIdsToKeep = [];

    foreach ($items as $position => $item) {
        // Update or create the item
        $subnav = NavigationMenu::updateOrCreate(
            ['id' => $item['id']],
            [
                'title' => $item['linkText'],
                'slug' => Str::slug($item['linkText'], '-'),
                'parent_id' => $parentId,
                'link' => $item['linkType'] == 'custom_link' ? $item['customLink'] : $item['linkType'],
                'custom_link' => $item['linkType'] == 'custom_link' ? 1 : 0,
                'status' => 1,
            ]
        );

        // Recursively update or create children
        if (!empty($item['children'])) {
            $this->updateItems($item['children'], $subnav->id);
        }

        // Track IDs to keep
        $itemIdsToKeep[] = $subnav->id;
    }

    // Delete items that are not in $itemIdsToKeep and have $parentId
    NavigationMenu::where('parent_id', $parentId)
                  ->whereNotIn('id', $itemIdsToKeep)
                  ->delete();
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
