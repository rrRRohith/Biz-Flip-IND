<?php

namespace App\Http\Controllers\Admin;

use App\Models\{Staff, Permission, User, Role};
use Illuminate\Http\Request;
use Exception;
use Inertia\Inertia;
use App\Http\Controllers\Controller as BaseController;
use App\Http\Requests\Staff\{StoreStaffRequest as StoreRequest, UpdateStaffRequest as UpdateRequest};
use App\Http\Resources\{StaffResource};
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class StaffController extends BaseController
{

    public $user;
    public $seller;

    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->user = auth()->user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });
    }

    public function index()
    {
      
        return Inertia::render('Admin/Staff/Index', [ 
            'staffs' => StaffResource::collection($this->seller->staffs()->whereNot('id', $this->user->id)->latest()->get()),
        ]);
    }

    public function create(){
        return Inertia::render('Admin/Staff/Form', [
            'roles' => $this->seller->staff_roles()->where('name','!=','seller')->where('name','!=','admin')->latest()->selectRaw('name as label, id as value')->get()->toArray(),
        ]);
    }

    public function store(StoreRequest $request){
        try{
            $staff = $this->seller->staffs()->create($request->only('firstname', 'lastname', 'email', 'phone', 'role_id'));
            $staff->syncRoles($request->role_id);
            
            if($request->has('password') && $request->password){
                $staff->update([
                    'password' => Hash::make($request->password),
                    'type' => 'admin-staff'
                ]);
            }

            return to_route('admin.staff.index')->with('success', 'Staff created successfully.');
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }
    
    public function show(Request $request, User $staff){
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        return response()->json(new StaffResource($staff));
    }

    public function edit(Request $request, User $staff){
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        return Inertia::render('Admin/Staff/Form', [
            'staff' => new StaffResource($staff),
            'roles' => $this->seller->staff_roles()->where('name','!=','seller')->where('name','!=','admin')->latest()->selectRaw('name as label, id as value')->get()->toArray(),
        ]);
    }

    public function update(UpdateRequest $request, User $staff){
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        try{
            $staff->update($request->only('firstname', 'lastname', 'email', 'phone', 'role_id'));
            $staff->update([
                'type' => 'admin-staff'
            ]);
            $staff->syncRoles($request->role_id);
            
            if($request->has('password') && $request->password){
                $staff->update([
                    'password' => Hash::make($request->password),
                ]);
            }
            return to_route('admin.staff.index')->with('success', 'Staff updated successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $staff)
    {
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        $staff->delete();
        return to_route('admin.staff.index')
            ->with('success', "Staff was deleted");
    }
}