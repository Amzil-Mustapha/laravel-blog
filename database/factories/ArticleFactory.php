<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'body' => fake()->text(700),
            'img' => 'https://fakeimg.pl/440x320/',
            'user_id' => fake()->numberBetween(1, 100),
            'views' => fake()->numberBetween(0, 450000),
            'nbr_likes' => fake()->numberBetween(0, 100),
            'nbr_dislikes' => fake()->numberBetween(0, 100),
            'category' => fake()->numberBetween(1, 6),
        ];
    }
}