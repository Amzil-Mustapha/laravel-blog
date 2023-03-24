import { Link } from "@inertiajs/react";
import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Main from "../Layouts/Main";
import Nav from "../Layouts/Nav";

function Home({articles}) {
    console.log(articles);
    return (
        <>
            <Header />
            <Main/>
            <Nav/>
            <Footer />
        </>
    );
}

export default Home;
