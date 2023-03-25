import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/header";

function Article({ article }) {
    return (
        <>
            <Header />
            <div className="flex items-center border-b-2 mx-20 mb-9 uppercase text-2xl text-gray-700 font-bold">
                <i class="fa-solid fa-newspaper mr-2"></i>
                <span className="mr-10">Article:</span>

                <i class="fa-solid fa-eye mr-2"></i>
                <span className="mr-10">{article.views}</span>

                <i className="fa-solid fa-thumbs-up text-blue-500 m-2"></i>
                {article.nbr_likes}

                <i className="fa-solid fa-thumbs-down m-2"></i>
                {article.nbr_dislikes}
            </div>
            <article className="flex flex-col items-center gap-8">
                <h1 className="text-2xl text-fuchsia-600 uppercase font-bold">
                    {article.title}
                </h1>
                <img
                    className="w-1/2 rounded-3xl"
                    src={article.img}
                    alt="article img"
                />
                <p className="w-4/5 text-justify text-2xl text-gray-700 first-letter:text-7xl first-letter:font-bold first-letter:text-fuchsia-600 first-letter:mr-3 first-letter:float-left">
                    {article.body}
                </p>
            </article>
            <Footer />
        </>
    );
}

export default Article;
