<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
    // $this->command('backup:google')->hourly();
})->purpose('Display an inspiring quote')->hourly();

Schedule::command('app:subscription-expire-alert')->daily();
Schedule::command('queue:work --stop-when-empty')->everyMinute();
// Schedule::command('backup:google')->hourly();