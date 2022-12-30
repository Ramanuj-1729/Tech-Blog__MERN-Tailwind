import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useRef } from "react";

const Navbar = () => {
    const location = useLocation();
    let path = location.pathname;
    const active = "text-primary border-b-2 border-primary";

    const [shadow, setShadow] = useState(false);
    const [categories, setCategories] = useState([]);
    const [dropDownActive, setDropDownActive] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get('/api/categories');
            setCategories(res.data);
        }
        fetchCategories();
    }, [])

    useEffect(()=>{
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const refCategory = useRef(null);

    const handleClickOutside = (e)=>{
        if(!refCategory.current.contains(e.target)){
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
            <div className="navbar-wrapper max-w-[1536px] mx-auto px-28 flex items-center justify-between h-16">
                <div className="logo flex-shrink-0">
                    <NavLink to="/"><h1 className='font-poppins font-black text-3xl text-primary cursor-pointer'>TechBlog</h1></NavLink>
                </div>

                <div className="menu font-poppins">
                    <ul className="flex space-x-10 items-center">
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

            </div>
        </nav>
    );
}

export default Navbar;