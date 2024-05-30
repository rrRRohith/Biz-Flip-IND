<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use App\Models\User;



class RolesAndPermissionsSeeder extends Seeder
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



        // Create roles and assign existing permissions
        if(!Role::where('name', 'admin')->exists()){
            $adminRole = Role::create(['name' => 'admin']);
        }

        if(!Role::where('name', 'seller')->exists()){
             $sellerRole = Role::create(['name' => 'seller']);
        }

       

        // Assign all permissions to admin
        $adminRole->givePermissionTo(Permission::all());


        $admin = User::updateOrCreate( ['email' => 'admin@bizflip.ca'],[
                            'firstname' => 'Admin',
                            'lastname'  => '',
                            'type'      => 'admin',
                            'unique_code'=> 'ADMN',
                            'role_id'    => 1,
                            'password'  => Hash::make('12345678'),
                            'email'     => 'admin@bizflip.ca',
                        ]);

            $seller =User::updateOrCreate( ['email' => 'seller@bizflip.ca'],[
                'firstname' => 'Seller',
                'lastname'  => '',
                'type'      => 'seller',
                'unique_code'=>'SELR',
                'role_id'    => 2,
                'password'  => Hash::make('12345678'),
                'email'     => 'seller@bizflip.ca',
            ]);



        $admin->assignRole('admin');
        $seller->assignRole('seller');

        // Seller role does not get any permissions
        // No need to explicitly deny permissions, just don't assign any
    }
}
