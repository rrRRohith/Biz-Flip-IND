<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Role, Permission};
use App\Http\Requests\Role\{StoreRoleRequest as StoreRequest, UpdateRoleRequest as UpdateRequest};
use Inertia\Inertia;
use App\Http\Resources\{RoleResource};

class RoleController extends BaseController{
    public $user;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
			$this->user = \Auth::user();
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Role/Index', [
            'roles' => RoleResource::collection($this->user->seller_roles()->latest()->get()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(){
        return Inertia::render('Seller/Role/Form', [
            'permissions' => Permission::seller()->get()->groupBy('section'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param StoreRequest $request
     */
    public function store(StoreRequest $request){
        try{
            $role = $this->user->seller_roles()->create([
                'name' => $request->name,
                'guard_name' => 'web',
            ]);
            $role->syncPermissions($request->permissions);
            return to_route('seller.roles.index')->with('success', 'Created created successfully.');
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param Role $role
     */
    public function show(Request $request, Role $role){
        $this->user->seller_roles()->findOrfail($role->id);
        return response()->json([
            'permissions' => $role->permissions()->get()->groupBy('section'),
        ]);
    }

    /**
     * Edit the specified resource.
     * 
     * @param Request $request
     * @param Role $role
     */
    public function edit(Request $request, Role $role){
        $this->user->seller_roles()->findOrfail($role->id);
        return Inertia::render('Seller/Role/Form', [
            'role' => new RoleResource($role),
            'permissions' => Permission::seller()->get()->groupBy('section'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param UpdateRequest $request
     * @param Role $role
     */
    public function update(UpdateRequest $request, Role $role){
        $this->user->seller_roles()->findOrfail($role->id);
        try{
            
            return to_route('seller.roles.index')->with('success', 'Role updated successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $this->user->seller_roles()->findOrfail($role->id);
        $role->delete();
        return to_route('seller.roles.index')
            ->with('success', "Role was deleted");
    }
}
