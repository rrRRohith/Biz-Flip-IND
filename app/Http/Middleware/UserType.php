<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserType{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $type): Response{
        /**
         * If not authenticated redirect to login url
         */
        if(!auth()->check()){
            return redirect()->route('login');
        }
        else if(auth()->user()->type != $type){
            $currentType = auth()->user()->type;
            abort(403, "You are logged in as {$currentType} and trying to access {$type} area.");
        }
        return $next($request);
    }
}
