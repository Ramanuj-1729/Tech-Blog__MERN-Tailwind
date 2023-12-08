import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useRef } from "react";

const Navbar = () => {
    const location = useLocation();
    let path = location.pathname;
    const active = "text-primary border-b-2 border-primary";
    const activeHameburger = "text-white bg-primary";

    const [shadow, setShadow] = useState(false);
    const [categories, setCategories] = useState([]);
    const [dropDownActive, setDropDownActive] = useState(false);
    const [hameburgerActive, setHameburgerActive] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get('http://ecocart.ap-1.evennode.com/api/categories');
            setCategories(res.data);
        }
        fetchCategories();
    }, [])

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const refCategory = useRef(null);

    const handleClickOutside = (e) => {
        if (!refCategory.current.contains(e.target)) {
            setDropDownActive(false);
        }
        else {
            setDropDownActive(true);
        }
    }

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
            <div className="navbar-wrapper max-w-[1536px] mx-auto desktop:px-36 largeTablet:px-20 mediumTablet:px-8 smallTablet:px-12 largePhone:px-8 smallPhone:px-4 flex items-center justify-between h-16">
                <div className="logo flex-shrink-0">
                    <NavLink to="/"><h1 className='font-poppins font-black smallTablet:text-3xl smallPhone:text-2xl text-primary cursor-pointer'>TechBlog</h1></NavLink>
                </div>

                <div className="menu font-poppins mediumTablet:block smallPhone:hidden">
                    <ul className="flex largeTablet:space-x-10 mediumTablet:space-x-8 items-center">
                        <li><NavLink to="/" className={`hover:text-primary px-1 pb-4 text-sm font-semibold transition-all ease-in-out delay-150 hover:border-b-2 border-primary ${path === "/" ? active : ""}`}>Home</NavLink></li>

                        <li><NavLink to="/posts" className={`text-fontColor hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/posts" || path === "/posts/article" ? active : ""}`}>Posts</NavLink></li>

                        <li ref={refCategory} className="text-fontColor text-sm font-semibold">
                            <span className={`dropDownWrapper ${dropDownActive === true ? 'text-primary border-b-2 border-primary' : ''} cursor-pointer focus:text-primary hover:text-primary px-1 pb-4 transition-all hover:border-b-2 focus:border-b-2 ease-in-out delay-150 border-primary ${path === "/category" ? active : ""}`}>Category</span>
                            <div className={`dropDownWrapper ${dropDownActive === true ? 'block' : 'hidden'} absolute top-16 bg-white drop-shadow-xl rounded-md`}>
                                <ul className="flex items-center justify-center flex-col">
                                    {
                                        categories.map((category) => (
                                            <NavLink to={`/posts/?cat=${category.name}`} key={category._id} className="categoryWrapper hover:text-primary cursor-pointer w-full border-b-2 border-gray1 flex items-center justify-center last:border-b-0 transition-all ease-in-out delay-150">
                                                <li className="px-10 py-2">{category.name}</li>
                                            </NavLink>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>

                        <li><NavLink to="/about" className={`text-fontColor  hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/about" ? active : ""}`}>About</NavLink></li>

                        <li><NavLink to="/contact" className={`text-fontColor  hover:text-primary px-1 pb-4 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary ${path === "/contact" ? active : ""}`}>Contact</NavLink></li>

                        <span className='search text-fontColor hover:text-primary px-1 py-2 text-sm font-semibold transition-all ease-in-out delay-150 cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></span>
                    </ul>
                </div>

                <div className="small-screen-menu mediumTablet:hidden smallPhone:flex justify-center items-center">
                    <span className='search text-fontColor hover:text-primary px-1 py-2 mr-8 text-sm font-semibold transition-all ease-in-out delay-150 cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></span>
                    <span className="cursor-pointer text-fontColor hover:text-primary text-xl transition-all ease-in-out delay-150" onClick={() => setHameburgerActive(true)}><i className="fa-solid fa-bars"></i></span>
                </div>

                <div className={`menu absolute h-screen largePhone:w-1/2 smallPhone:w-4/6 top-0 right-0 bottom-0 bg-white drop-shadow-2xl text-fontColor text-lg font-medium justify-center pt-20 ${hameburgerActive === true ? 'flex' : 'hidden'}`}>
                    <i className="fa-solid fa-xmark cursor-pointer absolute top-5 right-12 text-fontColor hover:text-primary text-3xl transition-all ease-in-out delay-150" onClick={() => setHameburgerActive(false)}></i>
                    <ul className="w-full transition-all ease-in-out delay-150">
                        <NavLink to="/">
                            <li className={`w-full px-5 py-3 my-2 cursor-pointer hover:text-white hover:bg-primary ${path === "/" ? activeHameburger : ""}`}>
                                <i className="fa-solid fa-house"></i>
                                <span className="ml-3">Home</span>
                            </li>
                        </NavLink>
                        <NavLink to="/posts">
                            <li className={`w-full px-5 py-3 my-2 cursor-pointer hover:text-white hover:bg-primary  ${path === "/posts" ? activeHameburger : ""}`}>
                                <i className="fa-solid fa-pager"></i>
                                <span className="ml-3">Articles</span>
                            </li>
                        </NavLink>
                        <NavLink to="">
                            <li className={`w-full px-5 py-3 my-2 cursor-pointer hover:text-white hover:bg-primary`}>
                                <i className="fa-solid fa-table-cells-large"></i>
                                <span className="ml-3">Category</span>
                            </li>
                        </NavLink>
                        <NavLink to="/about">
                            <li className={`w-full px-5 py-3 my-2 cursor-pointer hover:text-white hover:bg-primary  ${path === "/about" ? activeHameburger : ""}`}>
                                <i className="fa-solid fa-info"></i>
                                <span className="ml-3">About</span>
                            </li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li className={`w-full px-5 py-3 my-2 cursor-pointer hover:text-white hover:bg-primary  ${path === "/contact" ? activeHameburger : ""}`}>
                                <i className="fa-solid fa-phone"></i>
                                <span className="ml-3">Contact</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;