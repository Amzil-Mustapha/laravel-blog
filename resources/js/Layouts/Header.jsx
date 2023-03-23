import React from "react";

function Header() {
    return (
        <>
            <header className=" mx-20 px-40 border-b-8 border-indigo-600 text-indigo-900">
                <ul className="flex justify-between items-center my-10">
                    <li>
                        <a className="bold text-2xl hover:border-b-2 border-indigo-600" href="#">Home</a>
                    </li>
                    <li>
                        <a className="bold text-2xl hover:border-b-2 border-indigo-600" href="#">Reviews</a>
                    </li>
                    <li>
                        <h1 className="text-6xl"><a href="#">LRAVEL-BLOG</a></h1>
                    </li>
                    <li>
                        <a className="bold text-2xl hover:border-b-2 border-indigo-600" href="#">Contact Us</a>
                    </li>
                    <li>
                        <a className="bold text-2xl hover:border-b-2 border-indigo-600" href="#">About Us</a>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
