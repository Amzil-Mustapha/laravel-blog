import { router } from "@inertiajs/react";
import React from "react";

function Main({ articlesOBV, users }) {
    //
    const tenArticles = [];
    for (let i = 0; i < 6; i++) {
        tenArticles.push(articlesOBV[i]);
    }

    return (
        <main className="px-20 text-white">
            <section className="grid gap-2 grid-cols-3 grid-rows-2">
                {tenArticles.map((article, key) => {
                    return (
                        // the article
                        <div
                            style={{
                                backgroundImage: `url(${article.img})`,
                            }}
                            key={key}
                            className="bg-cover"
                        >
                            <div className="bg-black bg-opacity-50 p-5 rounded">
                                <h2 className="text-2xl mb-32 text-white">
                                    {article.title.slice(0, 40)}...
                                </h2>
                                <span className="p-2 mb-5 flex items-center w-fit rounded bg-cyan-800 text-white bold text-xl uppercase">
                                    {article.category}
                                </span>
                                <div className="flex justify-between">
                                    <span className="p-2 flex items-center w-fit rounded-full bg-cyan-300">
                                        {/* Author */}
                                        <i className="fa-solid fa-user"></i>
                                        <span className="bold text-xl text-indigo-600 ml-2">
                                            {
                                                users.find((item) => {
                                                    return (
                                                        item.id ==
                                                        article.user_id
                                                    );
                                                }).username
                                            }
                                        </span>
                                    </span>
                                    <span className="flex items-center">
                                        {/* traffic */}
                                        <span className="mr-5">
                                            {/* views span */}
                                            <i className="fa-solid fa-eye mr-2"></i>
                                            {article.views}
                                        </span>
                                        <span className="mr-2">
                                            <i className="fa-solid fa-thumbs-up text-blue-500 m-2"></i>
                                            {article.nbr_likes}
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-thumbs-down m-2"></i>
                                            {article.nbr_dislikes}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default Main;
