<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GlobalController extends Controller
{
    public function  fetch_home_data(){
        $articlesOBV = DB::table('articles')->orderByDesc('views')->get();
        return Inertia::render('Home' ,compact('articlesOBV'));
    }
}
