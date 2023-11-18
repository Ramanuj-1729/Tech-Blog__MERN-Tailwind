import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Undeline from '../shared/Underline/Underline';

const Article = ({ post, comments }) => {

    return (
        <>
            <div className="article-wrapper p-4 shadow-[0_5px_60px_-15px_rgba(0,0,0,0.2)] rounded">
                <h1 className='font-poppins block mx-auto wideScreen:text-[42px] desktop:text-[36px] largeTablet:text-[32px] largePhone:text-[28px] smallPhone:text-[26px] leading-[1.3] font-semibold text-fontColor my-4'>{post.title}</h1>
                <ArticleInfo post={post} comment={comments} />
                <div className="main-article">
                    {post.thumbnail && <img className='w-full wideScreen:h-[500px] desktop:h-[450px] largePhone:h-[400px] smallPhone:h-[300px]' src={post.thumbnail} alt="article-img" />}
                    <Undeline marginY="4" />
                    <p className='font-poppins wideScreen:text-lg mediumTablet:text-base largePhone:text-base smallPhone:text-sm font-normal text-fontColor my-4 text-justify'>{post.body}</p>
                    {post.thumbnail && <img className='w-full wideScreen:h-[500px] desktop:h-[450px] largePhone:h-[400px] smallPhone:h-[300px]' src={post.thumbnail} alt="article-img" />}
                    <p className='font-poppins wideScreen:text-lg mediumTablet:text-base largePhone:text-base smallPhone:text-sm font-normal text-fontColor my-4 text-justify'>{post.body}</p>
                </div>
            </div>
        </>
    );
}

export default Article;