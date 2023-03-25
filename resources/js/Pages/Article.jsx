import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/header";

function Article({ article }) {
    return (
        <>
            <Header />
            <article>
                <h1>{article.title}</h1>
                <img src={article.img} alt="article img" />
                <p>{article.body}</p>
            </article>
            <Footer />
        </>
    );
}

export default Article;
