<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Http\Request;
use Exception;
use App\Http\Resources\RoleResource;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\Banner\StoreBannerRequest;
use App\Http\Requests\Banner\UpdateBannerRequest;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $roleList = Role::query()->paginate(10);
       
        return Inertia::render('Admin/Role/Index',['roleList' => RoleResource::collection($roleList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $permissions = Permission::get();
        $permissions = $permissions->groupBy('section');
        return Inertia::render('Admin/Role/Create',['permissionsList' =>$permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBannerRequest $request)
    {
        //
        $new                = new Role();
        $new->name          = $request->name;	
        $new->guard_name    = 'web';
        try{
            $new->save();			
            return to_route('admin.role-responsibilities.index')->with('success', 'Role Responsibilities was Created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $role = Role::where('id',$id)->first();
        return Inertia::render('Admin/Role/Edit',['role' => new RoleResource($role),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {   
        //

        $role = Role::where('id',$id)->first();
        $role->name          = $request->name;	
        $role->guard_name    = 'web';

        try{
            $role->save();			
            return to_route('admin.role.index')->with('success', 'Role Responsibilities was updated.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $role = Role::where('id',$id)->first() ?? abort(404);
        $role->delete();
        
        return to_route('admin.role-responsibilities.index')
            ->with('success', "Role was deleted");
    }
}
