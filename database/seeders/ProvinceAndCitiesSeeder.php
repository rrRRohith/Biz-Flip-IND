<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\{City, Province, Country};
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class ProvinceAndCitiesSeeder extends Seeder
{
    public function run()
    {

        $provincesData    = config('provinces');
        $citiesData       = config('cities');


        // Create country 
        if (!Country::where('name', 'Canada')->exists()) {
            $country = new Country();
            $country->name       = "Canada";
            $country->slug       = "canada";
            $country->code       = "CA";
            $country->image      = null;
            $country->position   = 1;
            $country->status     = 1;
            $country->save();
        }

        foreach ($provincesData as $provinceData) {
            if (!empty($provinceData['name'])) {
                Province::firstOrCreate(
                    ['name' => $provinceData['name']],
                    [
                        'slug' => Str::slug($provinceData['name']),
                        'code' => $provinceData['code'],
                        'image' => null, 
                        'country_id' => 1, 
                        'position' => null, 
                        'status' => 1 
                    ]
                );
            }
        }

        foreach ($citiesData as $cityData) {
            if (!empty($cityData['province_code'])) {
                $province = Province::where('code', $cityData['province_code'])->first();
          
                if ($province && !empty($cityData['city'])) {
                    City::firstOrCreate(
                        [
                            'name' => $cityData['city'],
                            'province_id' => $province->id
                        ],
                        [
                            'slug' => Str::slug($cityData['city']),
                            'code' => null, 
                            'image' => null, 
                            'position' => null, 
                            'status' => 1 
                        ]
                    );
                }
            }
        }
        
    }
}
