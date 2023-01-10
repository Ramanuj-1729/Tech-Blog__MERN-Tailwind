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
                    <h1 className='font-poppins block mx-auto wideScreen:text-[45px] desktop:text-[40px] largeTablet:text-[36px] mediumTablet:text-[32px] largePhone:text-[28px] font-medium text-fontColor leading-[1.5] mediumTablet:mb-8 smallTablet:mb-5 largePhone:mb-4'>{heading}</h1>
                </div>
                <div className='slider-wrapper flex items-center justify-center'>
                    <div id={sliderId} className="slider-main mediumTablet:space-x-10 smallTablet:space-x-8 largePhone:space-x-4 flex">
                        {
                            postsData.map((post) => (
                                <Link key={post._id} to={`/posts/article/${post._id}`}>
                                    <div className={`${sliderClass} bg-red-400 relative wideScreen:w-[400px] wideScreen:h-[350px] largeTablet:w-[350px] largeTablet:h-[300px] mediumTablet:w-[300px] mediumTablet:h-[250px] smallTablet:w-[230px] smallTablet:h-[180px] largePhone:w-[200px] largePhone:h-[150px]`} >
                                        <img className='brightness-50 wideScreen:w-[400px] wideScreen:h-[350px] largeTablet:w-[350px] largeTablet:h-[300px] mediumTablet:w-[300px] mediumTablet:h-[250px] smallTablet:w-[230px] smallTablet:h-[180px] largePhone:w-[200px] largePhone:h-[150px]' src={post.thumbnail} alt="post" />
                                        <div className="inner-content absolute mediumTablet:left-4 smallTablet:bottom-2 smallTablet:left-2 largePhone:bottom-1 largePhone:left-1">
                                            <div className="category bg-primary wideScreen:w-32 wideScreen:h-8 mediumTablet:w-28 mediumTablet:h-6 largePhone:w-24 largePhone:h-5 flex justify-center items-center rounded text-white font-poppins font-semibold wideScreen:text-base largeTablet:text-sm mediumTablet:text-sm largePhone:text-xs mt-2 mediumTablet:mb-4 smallTablet:mb-2 largePhone:mb-1">{post.category}</div>
                                            <h3 className='text-white font-poppins wideScreen:text-[28px] desktop:text-[25px] largeTablet:text-[24px] mediumTablet:text-[22px] smallTablet:text-[20px] largePhone:text-[18px] leading-[1.2] font-semibold tracking-wide'>{post.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <div className="btns my-6 flex items-center justify-center space-x-3">
                    <button onClick={prev} className='flex items-center justify-center wideScreen:w-10 wideScreen:h-10 largeTablet:w-8 largeTablet:h-8 mediumTablet:w-7 mediumTablet:h-7 largePhone:w-6 largePhone:h-6 border-solid border-2 text-gray3 border-gray3 rounded-full'><i className="fa-solid fa-angle-left"></i></button>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <span className='w-5 h-1 bg-gray2 rounded-xl'></span>
                    <button onClick={next} className='flex items-center justify-center wideScreen:w-10 wideScreen:h-10 largeTablet:w-8 largeTablet:h-8 mediumTablet:w-7 mediumTablet:h-7 largePhone:w-6 largePhone:h-6 border-solid border-2 text-gray3 border-gray3 rounded-full'><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default PostsSlider;
