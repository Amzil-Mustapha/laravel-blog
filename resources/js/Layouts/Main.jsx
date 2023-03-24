import { router } from "@inertiajs/react";
import React from "react";

function Main({ articlesOBV }) {
    //
    const tenArticles = [];
    for (let i = 0; i < 6; i++) {
        tenArticles.push(articlesOBV[i]);
    }

    return (
        <main className="px-20">
            <section className="grid gap-2 grid-cols-3 grid-rows-3">
                {tenArticles.map((article, key) => {
                    return (
                        <div
                            style={{ backgroundImage: `url(${article.img})` }}
                            key={key}
                            className="bg-cover p-5"
                        >
                            <h2 className="text-2xl mb-5">{article.title}</h2>
                            <p className="text-justify mb-5">
                                {article.body.slice(0, 255)}...
                                <span className="text-fuchsia-500">
                                    read more
                                </span>
                            </p>
                            <div>
                                <span className="mr-5">
                                    <i className="fa-solid fa-thumbs-up text-blue-500 m-2"></i>
                                    {article.nbr_likes}
                                </span>
                                <span>
                                    <i className="fa-solid fa-thumbs-down m-2"></i>
                                    {article.nbr_dislikes}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default Main;
