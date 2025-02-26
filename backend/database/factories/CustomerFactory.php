<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->email(),
            'type' => fake()->randomElement(['normal', 'silver', 'gold']),
            'image' => 'https://dummyimage.com/800x600/000/fff&text=' . fake()->randomLetter(),
        ];
    }
}
