<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\GlobalController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// Home route to fetch the home data
Route::get('/', [GlobalController::class, 'fetch_home_data']);

// When the user press at the article Link this route work 
Route::get('/article/{id}', [GlobalController::class, 'to_article_page']);