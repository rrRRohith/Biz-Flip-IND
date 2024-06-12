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
use App\Http\Requests\Role\StoreRoleRequest;
use App\Http\Requests\Banner\UpdateBannerRequest;
use Illuminate\Support\Facades\Artisan;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $roleList = Role::with(['permissions' => function($q){
                                $q->where('type', '<>','seller');
                            }])->where('user_id',auth()->user()->id)->orWhereNull('user_id')
                            ->get();
        return Inertia::render('Admin/Role/Index',['roleList' => RoleResource::collection($roleList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $permissions = Permission::admin()->get();
        $permissions = $permissions->groupBy('section');
        return Inertia::render('Admin/Role/Create',['permissionsList' =>$permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        //
        $role                = new Role();
        $role->name          = $request->name;	
        $role->user_id       = auth()->user()->id;
        $role->guard_name    = 'web';
        try{
            $role->save();
            $role->syncPermissions($request->input('permissions'));
            Artisan::call('permission:cache-reset');
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
   
        $role = Role::with('permissions')->where('id',$id)->first() ?? abort(404);
        if($role->name != 'seller'){
            $permissions = Permission::admin()->get();
        }
        else{
            $permissions = Permission::seller()->get();
        }
       
        $permissions = $permissions->groupBy('section');
        return Inertia::render('Admin/Role/Edit',['role' => new RoleResource($role),'success' => session('success'),'error' => session('error'),'permissionsList' =>$permissions]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {   
        //

    

        $role = Role::where('id',$id)->first();
        $role->name          = $request->name;	
        $role->user_id       = auth()->user()->id;
        $role->guard_name    = 'web';

        try{
            $role->save();	
            $role->syncPermissions($request->input('permissions'));	 
            Artisan::call('permission:cache-reset');	
            return to_route('admin.role-responsibilities.index')->with('success', 'Role Responsibilities was updated.');
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
