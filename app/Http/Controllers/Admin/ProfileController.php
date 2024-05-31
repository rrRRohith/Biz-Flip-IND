<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\UserProfileResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Exception;

class ProfileController extends Controller{
    private $user;

    public function __construct(Request $request){
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->user = auth()->user();
            return $next($request);
        });
    }

    public function index(){
      
        return Inertia::render('Admin/Profile/index',['user' => new UserProfileResource($this->user)]);
    }

    public function store(ProfileUpdateRequest $request){
        try{		
            $this->user->update($request->only(['firstname', 'lastname', 'email', 'phone']));
            if($request->has('password') && $request->password){
                $this->user->update([
                    'password' => Hash::make($request->password),
                ]);
            }

            if ($request->has('picture') && $request->picture) {
                if ($this->user->picture && $this->user->picture != 'default') {
                    Storage::disk('images')->delete($this->user->picture);
                }
                $picture = $request->picture;
                $pictureName = Str::random(20) . '.' . $picture->getClientOriginalExtension();
                $picturePath = $picture->storeAs('avatars', $pictureName, 'images');
                $this->user->update([
                    'picture' => $picturePath,
                ]);
            }

            return to_route('admin.profile.index')->with('success', 'Profile updated successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }
}
