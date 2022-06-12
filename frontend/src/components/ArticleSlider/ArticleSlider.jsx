// https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
// https://dev.to/ziratsu/build-a-slider-with-react-4651

import React, { useState } from 'react';

const ArticleSlider = ({ heading, sliderClass, sliderId, postsData }) => {
    const [posts, setPosts] = useState(postsData);
    const prev = () => {
        let items = document.getElementsByClassName(sliderClass);
        let itemArray = [...items];
        const item = itemArray[posts.length - 1];
        document.getElementById(sliderId).prepend(item);
    }

    const next = () => {
        let items = document.getElementsByClassName(sliderClass);
        let itemArray = [...items];
        const item = itemArray[0];
        document.getElementById(sliderId).appendChild(item);
    }

    return (
        <>
            <div className="slider mt-12 flex items-center justify-center flex-col overflow-hidden">
                <div className="slider-heading-wrapper flex items-center justify-center flex-col">
                    <h1 className='font-poppins block mx-auto text-4xl font-medium text-fontColor leading-[1.5] mb-8'>{heading}</h1>
                </div>
                <div className='slider-wrapper flex items-center justify-center'>
                    <div id={sliderId} className="slider-main space-x-10 flex w-[160%]">
                        {
                            posts.map((post) => (
                                <div className={`${sliderClass} bg-red-400 w-[350px] h-[300px] relative`} key={post.id} >
                                    <img src={post.thumbnail} alt="post" />
                                    <div className="inner-content absolute bottom-2 left-4">
                                        <div className="category bg-primary w-28 h-6 flex justify-center items-center rounded text-white font-poppins font-semibold text-sm mt-2 mb-4">{post.category}</div>
                                        <h3 className='text-white font-poppins text-3xl font-semibold tracking-wide'>{post.title}</h3>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className="btns my-6 flex items-center justify-center space-x-3">
                    <button onClick={prev} className='w-8 h-8 border-solid border-2 text-gray3 border-gray3 rounded-full'><i className="fa-solid fa-angle-left"></i></button>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <button onClick={next} className='w-8 h-8 border-solid border-2 text-gray3 border-gray3 rounded-full'><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default ArticleSlider;
