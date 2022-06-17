import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    let path = location.pathname;
    const active = "text-primary border-b-2 border-primary";

    const [shadow, setShadow] = useState(false);

    window.onscroll = function () {
        if (window.scrollY > 60) {
            setShadow(true);
        }
        else {
            setShadow(false);
        }
    }

    return (
        <nav className={`navbar sticky top-0 z-10 bg-white ${shadow === true ? "drop-shadow-xl" : ""} transition duration-300 ease-out`}>
            <div className="navbar-wrapper max-w-[1536px] mx-auto px-28 flex items-center justify-between h-16">
                <div className="logo flex-shrink-0">
                    <NavLink to="/"><h1 className='font-poppins font-black text-3xl text-primary cursor-pointer'>TechBlog</h1></NavLink>
                </div>

                <div className="menu font-poppins">
                    <ul className="flex space-x-10 items-center">
                        <li><NavLink to="/" className={`hover:text-primary px-1 pb-4 text-sm font-semibold transition-all ease-in-out delay-150 hover:border-b-2 border-primary ${path === "/" ? active : ""}`}>Home</NavLink></li>

                        <li><NavLink to="/posts" className={`text-fontColor hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/posts" || path === "/posts/article" ? active : ""}`}>Posts</NavLink></li>

                        <li><NavLink to="#" className={`text-fontColor hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/category" ? active : ""}`}>Category</NavLink></li>

                        <li><NavLink to="/about" className={`text-fontColor  hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/about" ? active : ""}`}>About</NavLink></li>

                        <li><NavLink to="/contact" className={`text-fontColor  hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/contact" ? active : ""}`}>Contact</NavLink></li>

                        <span className='search text-fontColor hover:text-primary px-1 py-2 text-sm font-semibold transition-all ease-in-out delay-150 cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></span>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;