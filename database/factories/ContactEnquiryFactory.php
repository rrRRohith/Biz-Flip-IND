<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ContactEnquiry;

class ContactEnquiryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ContactEnquiry::class;

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
            'company' => $this->faker->company,
            'ip_address' => $this->faker->ipv4,
            'time_to_available' => $this->faker->time('H:i:s'),
            'message' => $this->faker->paragraph(1),
            'subject' => $this->faker->sentence,
            'status' => $this->faker->randomElement(['0', '1']),
        ];
    }
}
