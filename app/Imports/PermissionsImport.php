<?php

namespace App\Imports;
use Maatwebsite\Excel\Concerns\ToModel;

use App\Models\Permission;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Support\Facades\DB;

class PermissionsImport implements ToModel, WithStartRow
{
   public function model(array $row)
    {
        if($row[0] != NULL && $row[1] != NULL && $row[2] != NULL ){
            if(!Permission::where('name',$row[0])->first()){
                DB::table('permissions')->insert([
                    'name' => trim($row[0]),
                    'guard_name' => 'web',
                    'section' => trim($row[1]),
                    'type' => trim($row[2]),
                ]);
            }
        }
    }
    
    public function startRow(): int
    {
        return 2; // Start processing from the second row (skipping the header)
    }
}
