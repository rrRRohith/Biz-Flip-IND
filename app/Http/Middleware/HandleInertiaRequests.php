<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Closure;
use App\Models\DashboardNotification;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    public function handle(Request $request,  Closure $next){
        if($request->is('account*') || $request->is('customer*')){
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
        $menu = menu('main-menu');
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
            'captcha_validation_disable' => env('CAPTCHA_VALIDATION_DISABLE', false),
            'notifications' => $request->user() ? DashboardNotification::where('recipient_id', $request->user()->id)->whereNull('read_at')->latest()->limit(6)->get() : [],
            'menu' => $menu ? $menu->childs->toArray() : [],
            'currency_code' => 'INR',//env('CURRENCY_CODE')
            'social_links' => \App\Models\SocailLink::where('user_id', 1)->get(),
        ];
    }

    private function errors(){
        if(request()->session()->get('error')){
            return request()->session()->get('error');
        }
        else if(request()->session()->get('errors')){
            return "Oops! There are issues with the form submission. Please ensure all fields are correctly filled.";
        }

        return null;
    }
}
