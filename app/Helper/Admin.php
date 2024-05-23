<?php
namespace App\Admin;

class Helper
{
    public static function AdminCompo($viewFile, $data = [])
    {
        return view($viewFile, $data)->render();
    }
}