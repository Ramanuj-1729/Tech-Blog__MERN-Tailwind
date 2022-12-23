import React from 'react';
import Undeline from '../shared/Underline/Underline';

const ArticleInfo = ({ post }) => {
    const publishDate = new Date(post.createdAt);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[publishDate.getMonth()];
    const date = publishDate.getDate();
    const year = publishDate.getFullYear();
    return (
        <>
            <div className='articleInfo-wrapper flex items-center relative'>
                <span className="auther-name font-poppins text-base font-normal text-fontColor px-2 border-r-2 border-gray2">By <b>{post.userName}</b></span>
                <span className="article-publish-date font-poppins text-base font-normal text-fontColor px-2 border-r-2 border-gray2">{`${month} ${date}, ${year}`}</span>
                <div className="ratings flex items-center justify-center">
                    <span className="stars space-x-1 px-2 flex items-center justify-center">
                        {
                            [...Array(post.rating)].map((star, index) => {
                                index += 1;
                                return <i key={index} className="fa-solid fa-star mr-1 text-sm text-fontColor"></i>
                            })
                        }
                        {
                            post.rating <= 5 ? [...Array(5-post.rating)].map((star, index) => {
                                index += 1;
                                return <i key={index} className="fa-solid fa-star mr-1 text-sm text-gray2"></i>
                            }) : ""
                        }
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