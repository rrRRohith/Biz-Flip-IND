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

        $currentType = auth()->user()->type;

        switch($type){
            case "admin" :
                abort_if(!in_array($currentType, ['admin', 'admin staff']), 403, "You are logged in as {$currentType} and trying to access {$type} area.");
            break;

            case "seller" :
                abort_if(!in_array($currentType, ['seller', 'seller staff']), 403, "You are logged in as {$currentType} and trying to access {$type} area.");
            break;
        }
        return $next($request);
    }
}
