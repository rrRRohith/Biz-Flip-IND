<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\{LeadEnquiry,Ad,User};
use Carbon\Carbon;

class LeadEnquiryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LeadEnquiry::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'message' => $this->faker->sentence,
            'ipaddess' => $this->faker->ipv4,
            'ad_id' => Ad::inRandomOrder()->first()->id, // Replace with appropriate ad IDs
            'seller_id' => User::inRandomOrder()->first()->id, // Replace with appropriate seller IDs
          
            'available_any_day' => $this->faker->boolean,
            'available_day' => $this->faker->optional()->date('Y-m-d'),
            'available_any_time' => $this->faker->boolean,
            'available_time' => $this->faker->optional()->time('H:i:s'),
            'status' => $this->faker->randomElement(['0','1']),
        ];
    }
}
