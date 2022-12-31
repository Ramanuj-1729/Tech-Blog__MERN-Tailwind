// https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
// https://dev.to/ziratsu/build-a-slider-with-react-4651

import React from 'react';
import { Link } from 'react-router-dom';

const PostsSlider = ({ heading, sliderClass, sliderId, postsData }) => {
    const prev = () => {
        let items = document.getElementsByClassName(sliderClass);
        let itemArray = [...items];
        const item = itemArray[postsData.length - 1];
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
                    <h1 className='font-poppins block mx-auto wideScreen:text-[45px] desktop:text-[40px] largeTablet:text-[36px] font-medium text-fontColor leading-[1.5] mb-8'>{heading}</h1>
                </div>
                <div className='slider-wrapper flex items-center justify-center'>
                    <div id={sliderId} className="slider-main space-x-10 flex">
                        {
                            postsData.map((post) => (
                                <Link key={post._id} to={`/posts/article/${post._id}`}>
                                    <div className={`${sliderClass} bg-red-400 relative wideScreen:w-[400px] wideScreen:h-[350px] largeTablet:w-[350px] largeTablet:h-[300px]`} >
                                        <img className='brightness-50 wideScreen:w-[400px] wideScreen:h-[350px] largeTablet:w-[350px] largeTablet:h-[300px]' src={post.thumbnail} alt="post" />
                                        <div className="inner-content absolute bottom-2 left-4">
                                            <div className="category bg-primary wideScreen:w-32 wideScreen:h-8 largeTablet:w-28 largeTablet:h-6 flex justify-center items-center rounded text-white font-poppins font-semibold wideScreen:text-base largeTablet:text-sm mt-2 mb-4">{post.category}</div>
                                            <h3 className='text-white font-poppins wideScreen:text-[28px] desktop:text-[25px] largeTablet:text-[24px] font-semibold tracking-wide'>{post.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <div className="btns my-6 flex items-center justify-center space-x-3">
                    <button onClick={prev} className='wideScreen:w-10 wideScreen:h-10 largeTablet:w-8 largeTablet:h-8 border-solid border-2 text-gray3 border-gray3 rounded-full'><i className="fa-solid fa-angle-left"></i></button>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <button onClick={next} className='wideScreen:w-10 wideScreen:h-10 largeTablet:w-8 largeTablet:h-8 border-solid border-2 text-gray3 border-gray3 rounded-full'><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default PostsSlider;
