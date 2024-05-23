<?php
namespace App\Theme;


class Admin
{

    
    public function adminCompo(string $view, array $args = []): string|null
    {
        return view('components.Admin.'.$view,compact($args))->render();
    }


}