import React from "react";

function Header() {
    return (
        <>
            <header className=" mx-20 px-40 border-b-4 border-indigo-600 text-indigo-900 mb-20">
                <div className=" bg-fuchsia-500 w-full h-2 left-0 top-0 absolute"></div>
                <div className="m-0 bg-fuchsia-500 w-40 h-40 absolute left-0 top-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <ul className="flex justify-between items-center my-10">
                    <li>
                        <a
                            className="bold text-2xl hover:border-b-2 border-indigo-600 uppercase"
                            href="Layouts#"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="bold text-2xl hover:border-b-2 border-indigo-600 uppercase"
                            href="Layouts#"
                        >
                            Reviews
                        </a>
                    </li>
                    <li>
                        <h1 className="text-6xl">
                            <a href="Layouts#">STA-BLOG</a>
                        </h1>
                    </li>
                    <li>
                        <a
                            className="bold text-2xl hover:border-b-2 border-indigo-600 uppercase"
                            href="Layouts#"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            className="bold text-2xl hover:border-b-2 border-indigo-600 uppercase"
                            href="Layouts#"
                        >
                            About Us
                        </a>
                    </li>
                </ul>
                <div className="m-0 bg-fuchsia-500 w-40 h-40 absolute right-0 top-0 rounded-full translate-x-1/2 -translate-y-1/2"></div>

            </header>
        </>
    );
}

export default Header;
