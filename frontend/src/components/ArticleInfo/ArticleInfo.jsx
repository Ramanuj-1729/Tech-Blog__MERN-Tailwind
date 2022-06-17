import React from 'react';
import Undeline from '../shared/Underline/Underline';

const ArticleInfo = () => {
    return (
        <>
            <div className='articleInfo-wrapper flex items-center relative'>
                <span className="auther-name font-poppins text-base font-normal text-fontColor px-2 border-r-2 border-gray2">By <b>Ramanuj</b></span>
                <span className="article-publish-date font-poppins text-base font-normal text-fontColor px-2 border-r-2 border-gray2">July 31, 2022</span>
                <div className="ratings flex items-center justify-center">
                    <span className="stars text-fontColor text-sm space-x-1 px-2 flex items-center justify-center">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star text-gray2"></i>
                        <i className="fa-solid fa-star text-gray2"></i>
                    </span>
                    <span className="count font-poppins text-base font-normal text-fontColor">300</span>
                </div>
                <span className="social-icon absolute right-2 space-x-3">
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                    <i className="fa-brands fa-twitter cursor-pointer"></i>
                    <i className="fa-brands fa-facebook-f cursor-pointer"></i>
                </span>
            </div>
            <Undeline marginY="4" />
        </>
    );
}

export default ArticleInfo;