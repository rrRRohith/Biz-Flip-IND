<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    use \App\Subscription;
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }

    public function customer(\App\Http\Requests\Auth\SellerRegisterRequest $request){
        $user = User::create($request->only([
            'firstname', 'lastname', 'email', 'phone'
        ]));

        $user->update([
            'status' => 1,
            'role_id' => 3,
            'unique_code' => $this->unique_code(),
            'type' => 'customer',
            'password' => Hash::make($request->password),
        ]);
        $user->assignRole(3);
        Auth::login($user);
        try {
            event(new Registered($user));
        } catch (\Exception $th) {}

        return response()->json([
            'success' => true,
            'message' => 'Thanks, your information has been received correctly.',
            'redirect' => url('/')
        ]);
    }

    public function seller(\App\Http\Requests\Auth\SellerRegisterRequest $request){
        $user = User::create($request->only([
            'firstname', 'lastname', 'email', 'phone'
        ]));

        $user->update([
            'status' => 0,
            'role_id' => 2,
            'unique_code' => $this->unique_code(),
            'type' => 'seller',
            'password' => Hash::make($request->password),
        ]);
        $user->assignRole(2);

        try {
            if($defaultPlan = \App\Models\SubscriptionPlan::whereDefault('1')->first()){
                $this->subscribeToPlan($request, $defaultPlan, $user);
                try {
                    event(new \App\Events\NewNotification(1, $user->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('seller.invoices.index')));
                } catch (\Exception $e) {}
            }
        } catch (\Exception $e) {
            
        }

        try {
            event(new Registered($user));
        } catch (\Exception $th) {}

        return response()->json([
            'success' => true,
            'message' => 'Thanks, your information has been received correctly.'
        ]);
    }

    public function agent(\App\Http\Requests\Auth\AgentRegisterRequest $request){
        $user = User::create($request->only([
            'firstname', 'lastname', 'email', 'phone'
        ]));

        $user->update([
            'status' => 0,
            'role_id' => 2,
            'unique_code' => $this->unique_code(),
            'type' => 'seller'
        ]);
        $user->assignRole(2);

        try {
            event(new Registered($user));
        } catch (\Exception $th) {}

        try {
            if($defaultPlan = \App\Models\SubscriptionPlan::whereDefault('1')->first()){
                $this->subscribeToPlan($request, $defaultPlan, $user);
                try {
                    event(new \App\Events\NewNotification(1, $user->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('seller.invoices.index')));
                } catch (\Exception $e) {}
            }
        } catch (\Exception $e) {
            
        }

        $seller = \App\Models\Seller::create($request->only(['company_name', 'description', 'address', 'city', 'postalcode', 'province']));
        $seller->update([
            'user_id' => $user->id,
            'slug' => Str::slug($seller->company_name.'-'.Str::random(4)),
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Thanks, your information has been received correctly.'
        ]);
    }

    function unique_code()
    {

        $pin_gen = rand(00000, 99999) . str_pad(5, STR_PAD_LEFT);

        $check_pin = User::where('unique_code', $pin_gen)->first();

        if ($check_pin) {
            return $this->unique_code();
        } else {
            if (strlen($pin_gen) == 6)
                return $pin_gen;
            else
                return $this->unique_code();
        }
        return $pin_gen;
    }
}
