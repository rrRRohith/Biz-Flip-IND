<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\UserProfileResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\{ProfileUpdateRequest, PasswordRequest};
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
        return Inertia::render('Customer/Profile',['user' => new UserProfileResource($this->user), 'success' => session('success'),'error' => session('error')]);
    }

    public function password(){
        return Inertia::render('Customer/Password');
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
                $picturePath = $this->uploadFile(file : $request->picture, path : 'avatars', maxHeight : 200, maxWidth : 200, ratio: '1:1');
                
                $this->user->update([
                    'picture' => $picturePath,
                ]);
            }

            return to_route('customer.profile.index')->with('success', 'Profile updated successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function changePassword(PasswordRequest $request){
        try{		
            if($request->has('password') && $request->password){
                $this->user->update([
                    'password' => Hash::make($request->password),
                ]);
            }

            return to_route('customer.password.index')->with('success', 'Password changed successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }
}
