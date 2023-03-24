<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GlobalController extends Controller
{
    public function  fetch_home_data(){
        $articles = DB::table('articles')->orderByDesc('views')->limit(10)->get();
        return Inertia::render('Home' ,compact('articles'));
    }
}
