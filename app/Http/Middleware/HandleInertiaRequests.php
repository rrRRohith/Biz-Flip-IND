<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Closure;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    public function handle(Request $request,  Closure $next){
        if($request->is('seller*')){
            $this->rootView = 'sellerApp';
        }

        return parent::handle($request, $next);
    }

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user() ?? null,
                'role' => $request->user() ? $request->user()->getRole->only('name') ?? null : null,
                'permissions' => $request->user() ? $request->user()->getRole->permissions->pluck('name') ?? null  : null,
            ],
            'sellertopmenu' => ($menu = menu('main-menu')) ? $menu->childs : [],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $this->errors(),
            ],
        ];
    }

    private function errors(){
        if(request()->session()->get('error')){
            return request()->session()->get('error');
        }
        else if(request()->session()->get('errors')){
            return "Ops there are some problems";
        }

        return null;
    }
}
