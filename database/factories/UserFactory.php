<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\Seller;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
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
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'postalcode' => $this->faker->postcode,
            'city' => $this->faker->city,
            'province' => $this->faker->state,
            'country' => $this->faker->country,
            'type' => $this->faker->word, // Replace with appropriate type values
            'role_id' => $this->faker->numberBetween(1, 5), // Replace with appropriate role IDs
            'parent_id' => null, // Or use a valid ID if needed
            'picture' => $this->faker->imageUrl(),
            'designation' => $this->faker->jobTitle,
            'unique_code' => $this->faker->unique()->word,
            'device_token_mobile' => $this->faker->sha256,
            'device_token_desktop' => $this->faker->sha256,
            'email_verified_at' => $this->faker->boolean ? Carbon::now() : null,
            'password' => bcrypt('password'), // You might want to use Hash::make('password')
            'status' => $this->faker->boolean,
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Define the model's default state with a related seller.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function withSeller(): Factory
    {
        return $this->afterCreating(function (User $user) {
            Seller::factory()->create(['user_id' => $user->id]);
            try {
                if($defaultPlan = \App\Models\SubscriptionPlan::whereDefault('1')->first()){
                    $this->subscribeToPlan($request, $defaultPlan, $user);
                    try {
                        event(new \App\Events\NewNotification(1, $user->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('seller.invoices.index')));
                    } catch (\Exception $e) {}
                }
            } catch (\Exception $e) {
                
            }
        });
    }

    /**
     * Define the model's state with a valid parent_id.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function withValidParent(): Factory
    {
        return $this->state(function (array $attributes) {
            // Ensure there is at least one user to reference
            $parent = User::inRandomOrder()->first();
            return [
                'parent_id' => $parent ? $parent->id : null,
            ];
        });
    }
}
