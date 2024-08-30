<?php

namespace Database\Seeders;

use App\Models\{User,Ad,ContactEnquiry,LeadEnquiry};
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'firstname' => 'Admin',
        //     'lastname'  => '',
        //     'type'      => 'Admin',
        //     'password'  => Hash::make('12345678'),
        //     'email'     => 'admin@bizflip.ca',
        // ]);

        // User::factory()->create([
        //     'firstname' => 'Seller',
        //     'lastname'  => '',
        //     'type'      => 'Seller',
        //     'password'  => Hash::make('12345678'),
        //     'email'     => 'seller@bizflip.ca',
        // ]);

        //  $parents = User::factory()->count(5)->create();
         User::factory()
             ->count(100)
             ->withValidParent() // Ensure each user has a valid parent_id
             ->withSeller() // Create related sellers
             ->create();
        
        Ad::factory()->count(100)->create();
        ContactEnquiry::factory()->count(100)->create();
        LeadEnquiry::factory()->count(100)->create();

        
    }
}
