<?php
namespace App\Facades;

use App\Theme\Admin as AdminTheme;
use Illuminate\Support\Facades\Facade;

class Admin extends Facade
{
    protected static function getFacadeAccessor(): string
    {

        return AdminTheme::class;
    }
}
