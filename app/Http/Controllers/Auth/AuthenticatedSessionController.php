<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        
        if(!auth()->user()->last_login){
            session(['firstLogin' => true]);
        }

        auth()->user()->update([
            'last_login' => now()
        ]);

        $request->session()->regenerate();

        if(auth()->user()->type == 'admin' || auth()->user()->type == 'admin staff')
        {
            return redirect()->intended(route('admin.index', absolute: false));
        }
        else if(auth()->user()->type == 'seller' || auth()->user()->type == 'seller staff'){
            $redirect =  redirect()->intended(route('account.index', absolute: false));
            return Inertia::location($redirect);
            // return redirect()->intended(route('account.index', absolute: false));
        }

        else if(auth()->user()->type == 'customer'){
            $redirect =  redirect()->intended(route('customer.index', absolute: false));
            return Inertia::location($redirect);
            // return redirect()->intended(route('customer.index', absolute: false));
        }

    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return Inertia::location(route('login'));
        // return ;
        // return redirect('/');
    }
}
