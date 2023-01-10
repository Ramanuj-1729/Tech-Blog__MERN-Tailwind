import React from 'react';
import Undeline from '../shared/Underline/Underline';

const ArticleInfo = ({ post, comment }) => {
    const publishDate = new Date(post.createdAt);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[publishDate.getMonth()];
    const date = publishDate.getDate();
    const year = publishDate.getFullYear();

    let ratingCount = [0, 0, 0, 0, 0];

    for (let i = 0; i < comment.length; i++) {
        if (comment[i].rating === 1) {
            ratingCount[0]++;
        }
        else if (comment[i].rating === 2) {
            ratingCount[1]++;
        }
        else if (comment[i].rating === 3) {
            ratingCount[2]++;
        }
        else if (comment[i].rating === 4) {
            ratingCount[3]++;
        }
        else if (comment[i].rating === 5) {
            ratingCount[4]++;
        }
    }

    let rating = 0;
    for (let i = 0; i < 5; i++) {
        rating = rating + ratingCount[i] * (i + 1);
    }
    rating = Math.round(rating / comment.length);
    if (isNaN(rating)) rating = 0;
    return (
        <>
            <div className='articleInfo-wrapper flex items-center relative wideScreen:text-lg mediumTablet:text-base largePhone:text-sm'>
                <span className="auther-name font-poppins font-normal text-fontColor smallTablet:px-2 largePhone:px-1 border-r-2 border-gray2">By <b>{post.userName}</b></span>
                <span className="article-publish-date font-poppins font-normal text-fontColor smallTablet:px-2 largePhone:px-1 border-r-2 border-gray2">{`${month} ${date}, ${year}`}</span>
                <div className="ratings flex items-center justify-center">
                    <span className="stars space-x-1 smallTablet:px-2 largePhone:px-1 flex items-center justify-center">
                        {
                            [...Array(rating)].map((star, index) => {
                                index += 1;
                                return <i key={index} className="fa-solid fa-star mr-1 text-fontColor"></i>
                            })
                        }
                        {
                            [...Array( 5 - rating)].map((star, index) => {
                                index += 1;
                                return <i key={index} className="fa-solid fa-star mr-1 text-gray2"></i>
                            })
                        }
                    </span>
                    <span className="count font-poppins font-normal text-fontColor">{comment.length}</span>
                </div>
                <span className="social-icon absolute right-2 smallTablet:space-x-4 largePhone:space-x-3">
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                    <i className="fa-brands fa-twitter cursor-pointer"></i>
                    <i className="fa-brands fa-facebook-f cursor-pointer"></i>
                </span>
            </div>
            <Undeline marginY="2" />
        </>
    );
}

export default ArticleInfo;