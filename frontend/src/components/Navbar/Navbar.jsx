import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="bg-white">
                <div className="mx-auto px-16">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">

                            <div className="logo flex-shrink-0">
                                <h1 className='font-poppins font-black text-2xl text-primary cursor-pointer'>TechBlog</h1>
                            </div>

                            <div className="menu absolute right-3 font-poppins">
                                <div className="mr-10 flex items-baseline space-x-10">
                                    <NavLink to="#" className="text-primary hover:text-primary px-1 py-2 text-sm font-semibold transition-all ease-in-out delay-150 border-b-2 hover:border-b-2 border-primary">Home</NavLink>

                                    <NavLink to="#" className="text-fontColor hover:text-primary px-1 py-2 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary">Articles</NavLink>

                                    <NavLink to="#" className="text-fontColor hover:text-primary px-1 py-2 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary">Category</NavLink>

                                    <NavLink to="#" className="text-fontColor  hover:text-primary px-1 py-2 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary">About</NavLink>

                                    <NavLink to="#" className="text-fontColor  hover:text-primary px-1 py-2 text-sm font-semibold transition-all hover:border-b-2 ease-in-out delay-150 border-primary">Contact</NavLink>

                                    <span className='search text-fontColor hover:text-primary px-1 py-2 text-sm font-semibold transition-all ease-in-out delay-150 cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;