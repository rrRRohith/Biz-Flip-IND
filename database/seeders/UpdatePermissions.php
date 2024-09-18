<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UpdatePermissions extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

     
          $permissionsData = config('permissions');

          // Create permissions
          foreach ($permissionsData as $permissionData) {
           
            if (!Permission::where('name', $permissionData['Permissions'])->exists() && $permissionData['Permissions'] != null) {
                Permission::create(
                            ['name'       => $permissionData['Permissions'],
                             'guard_name' => 'web',
                             'section'    => $permissionData['Section'],
                             'type'    => $permissionData['Type'],
                            ]);
            }
          }
    }
}



