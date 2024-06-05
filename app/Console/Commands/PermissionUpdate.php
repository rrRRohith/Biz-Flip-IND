<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:permission-update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //

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
