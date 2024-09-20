<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            
        },
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'userType' => \App\Http\Middleware\UserType::class,
            'adView' => \App\Http\Middleware\AdView::class
        ]);

        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \App\Http\Middleware\VerifyEmail::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->report(function (Throwable $exception) {
            if (env('APP_DEBUG')) {
                $content['message'] = $exception->getMessage();
                $content['file'] = $exception->getFile();
                $content['line'] = $exception->getLine();
                $content['trace'] = $exception->getTrace();
    
                $content['url'] = request()->url();
                $content['body'] = request()->all();
                $content['ip'] = request()->ip();
                \App\Emails::sendError($content);
            }
        });
    })->create();
