<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdView{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response{
        if(($_COOKIE['client_ip'] ?? null) && !$request->has('embed')){
            $request->ad->views()->firstOrcreate([
                'ip_address' => ($_COOKIE['client_ip'] ?? null)
            ]);
        }
        
        return $next($request);
    }
}
