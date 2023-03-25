<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GlobalController extends Controller
{

    public function fetch_home_data()
    {
        // get all articles ordered by VIEWS and send it to the home page

        $articlesOBV = DB::table('articles')->orderByDesc('views')->get();
        $users = DB::table('users')->get();
        return Inertia::render('Home', compact(['articlesOBV', 'users']));
    }


    public function to_article_page($id)
    {
        // get the article data and send it to the Article.jsx page

        $article = Article::where('id', $id)->get()->first();
        return Inertia::render('Article', compact('article'));
    }
}