import { Link } from "@inertiajs/react";
import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Main from "../Layouts/Main";
import Nav from "../Layouts/Nav";

function Home({articlesOBV}) {
    return (
        <>
            <Header />
            <Main articlesOBV={articlesOBV} />
            <Nav/>
            <Footer />
        </>
    );
}

export default Home;
