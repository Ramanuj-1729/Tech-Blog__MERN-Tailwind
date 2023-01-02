import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Undeline from '../shared/Underline/Underline';

const Article = ({ post, comments }) => {
    const PF = "http://localhost:5000/";

    return (
        <>
            <div className="article-wrapper p-4 shadow-[0_5px_60px_-15px_rgba(0,0,0,0.2)] rounded">
                <h1 className='font-poppins block mx-auto wideScreen:text-[42px] desktop:text-[36px] largeTablet:text-[32px] mediumTablet:text-[28px] leading-[1.3] font-semibold text-fontColor my-4'>{post.title}</h1>
                <ArticleInfo post={post} comment={comments} />
                <div className="main-article">
                    {post.thumbnail && <img className='w-full wideScreen:h-[500px] desktop:h-[450px] mediumTablet:h-[400px]' src={PF + post.thumbnail} alt="article-img" />}
                    <Undeline marginY="4" />
                    <p className='font-poppins wideScreen:text-lg mediumTablet:text-base font-normal text-fontColor my-4 text-justify'>{post.body}</p>
                    {post.thumbnail && <img className='w-full wideScreen:h-[500px] desktop:h-[450px] mediumTablet:h-[400px]' src={PF + post.thumbnail} alt="article-img" />}
                    <p className='font-poppins wideScreen:text-lg mediumTablet:text-base font-normal text-fontColor my-4 text-justify'>{post.body}</p>
                </div>
            </div>
        </>
    );
}

export default Article;