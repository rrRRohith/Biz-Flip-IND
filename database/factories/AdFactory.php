<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\{User,City,Ad};
use App\Models\{AdBusinessCategory,BusinessCategory};
use App\Models\{AdCategory,Category};

class AdFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ad::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'seller_id' => User::inRandomOrder()->first()->id, // Randomly select a seller_id from the users table
            'title' => $this->faker->text(),
            'slug' => Str::slug($this->faker->text()),
            'description' => $this->faker->paragraph(),
            'address' => $this->faker->sentence(),
            'city' => City::where('province_id',10)->inRandomOrder()->first()->name,
            'postalcode' => '698551',
            'province' => 'Ontario',
            'country' => 'Canada',
            'map_link' => 'google.com',
            'lat' => '45.6585817',
            'lng' => '-75.6767844',
            'ad_purpose' => 'Sale',
            'price' => $this->faker->unique()->randomNumber(5),
            'has_negotiable' => false,
            'has_commission' => false,
            'commission' => null,
            'seo_title' => null,
            'seo_description' => null,
            'seo_keywords' => null,
            'property_type' => 'Building',
            'space' => '20000sqft',
            'unique_code' => $this->faker->unique()->randomNumber(5),
            'tags' => null,
            'publish_at' => now(),
            'position' => null,
            'status' => 1,
        ];
    }

    /**
     * Configure the factory to also create related business categories and categories.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function configure()
    {
        return $this->afterCreating(function (Ad $ad) {
       
            AdBusinessCategory::create([
                'ad_id' => $ad->id,
                'category_id' => BusinessCategory::inRandomOrder()->first()->id,
            ]);

        
            AdCategory::create([
                'ad_id' => $ad->id,
                'category_id' => Category::inRandomOrder()->first()->id,
            ]);
        });
    }
}
