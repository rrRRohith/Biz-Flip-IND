<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Auth\Access\AuthorizationException;

class VerifyEmailController extends Controller
{
    // /**
    //  * Mark the authenticated user's email address as verified.
    //  */
    // public function __invoke(EmailVerificationRequest $request): RedirectResponse
    // {
    //     dd($request);
    //     if ($request->user()->hasVerifiedEmail()) {
    //         return redirect()->intended(route('index', absolute: false).'?verified=1');
    //     }

    //     if ($request->user()->markEmailAsVerified()) {
    //         event(new Verified($request->user()));
    //     }

    //     return redirect()->intended(route('index', absolute: false).'?verified=1');
    // }

    public function verify(Request $request){
		$user = \App\Models\User::find($request->route('id'));
		if (!isset($user->id) || (!hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))))
			throw new AuthorizationException;

		elseif($user->markEmailAsVerified()){
            event(new Verified($user));
        }
		if($user){
            $user->update(['status' => 1]);
        }

		return view('auth.emailVerified');
	}

    public function resendEmail(Request $request){
        if ($request->user()->hasVerifiedEmail()) {
            return $request->wantsJson()
                        ? new JsonResponse([], 204)
                        : redirect($this->redirectPath());
        }

        try{
            $request->user()->sendEmailVerificationNotification();
        }
        catch(\Exception $e){}

        return $request->ajax() ? response()->json([
            'success' => true,
            'message' => 'Verify link has been sent to your email.',
        ]) : redirect()->back()->withMessage('Verify link has been sent to your email.');
    }
}
