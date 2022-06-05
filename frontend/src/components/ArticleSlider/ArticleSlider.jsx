// https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
// https://dev.to/ziratsu/build-a-slider-with-react-4651

import React from 'react'

const ArticleSlider = (props) => {
    const prev = () => {
        let items = document.getElementsByClassName(props.sliderClass);
        let itemArray = [...items];
        const item = itemArray[6];
        document.getElementById(props.sliderId).prepend(item);
    }

    const next = () => {
        let items = document.getElementsByClassName(props.sliderClass);
        let itemArray = [...items];
        const item = itemArray[0];
        document.getElementById(props.sliderId).appendChild(item);
    }

    return (
        <>
            <div className="slider mt-12 flex items-center justify-center flex-col overflow-hidden">
                <div className="slider-heading-wrapper flex items-center justify-center flex-col">
                    <h1 className='font-poppins block mx-auto text-4xl font-medium text-fontColor leading-[1.5] mb-8'>{props.heading}</h1>
                </div>
                <div className='slider-wrapper flex items-center justify-center'>
                    <div id={props.sliderId} className="slider-main space-x-10 flex w-[160%]">
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic1.png" alt="" />
                        </div>
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic2.png" alt="" />
                        </div>
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic3.png" alt="" />
                        </div>
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic4.png" alt="" />
                        </div>
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic5.png" alt="" />
                        </div>
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic6.png" alt="" />
                        </div>
                        <div className={`${props.sliderClass} bg-red-400 w-[350px] h-[300px]`}>
                            <img src="/images/pic4.png" alt="" />
                        </div>
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
