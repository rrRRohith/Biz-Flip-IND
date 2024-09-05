<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Staff, Permission, User};
use App\Http\Requests\Staff\{StoreStaffRequest as StoreRequest, UpdateStaffRequest as UpdateRequest};
use Inertia\Inertia;
use App\Http\Resources\{StaffResource};
use Illuminate\Support\Facades\Hash;

class StaffController extends BaseController{
    public $user;
    public $seller;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
			$this->user = auth()->user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });

        $this->middleware("can:Staff Listing")->only(['index', 'search']);
        $this->middleware("can:Staff Create")->only(['create', 'store']);
        $this->middleware("can:Staff Edit")->only(['edit', 'update']);
        $this->middleware("can:Staff Delete")->only(['destroy']);
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Staff/Index', [
            'staffs' => StaffResource::collection($this->seller->staffs()->whereNot('id', $this->user->id)->latest()->get()),
        ]);
    }

    public function search(Request $request){
        return response()->json(StaffResource::collection($this->seller->staffs()->search($request)->whereNot('id', $this->user->id)->latest()->get()));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(){
        return Inertia::render('Seller/Staff/Form', [
            'roles' => $this->seller->staff_roles()->latest()->selectRaw('name as label, id as value')->get()->toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param StoreRequest $request
     */
    public function store(StoreRequest $request){
        try{
            $staff = $this->seller->staffs()->create($request->only('firstname', 'lastname', 'email', 'phone', 'role_id'));
            $staff->syncRoles($request->role_id);
            
            if($request->has('password') && $request->password){
                $staff->update([
                    'type' => 'seller staff',
                    'password' => Hash::make($request->password),
                    'status' => '1',
                ]);
            }

            return to_route('seller.staffs.index')->with('success', 'Staff created successfully.');
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Edit the specified resource.
     * 
     * @param Request $request
     * @param User $staff
     */
    public function edit(Request $request, User $staff){
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        return Inertia::render('Seller/Staff/Form', [
            'staff' => new StaffResource($staff),
            'roles' => $this->seller->staff_roles()->latest()->selectRaw('name as label, id as value')->get()->toArray(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param UpdateRequest $request
     * @param User $staff
     */
    public function update(UpdateRequest $request, User $staff){
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        try{
            $staff->update($request->only('firstname', 'lastname', 'email', 'phone', 'role_id'));
            $staff->syncRoles($request->role_id);
            
            if($request->has('password') && $request->password){
                $staff->update([
                    'password' => Hash::make($request->password),
                ]);
            }
            return to_route('seller.staffs.index')->with('success', 'Staff updated successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $staff){
        abort_if($this->user->id == $staff->id, 403);
        $this->seller->staffs()->findOrfail($staff->id);
        $staff->delete();
        //Delete images if forceDeleted
        return to_route('seller.staffs.index')->with('success', "Staff was deleted");
    }
}
