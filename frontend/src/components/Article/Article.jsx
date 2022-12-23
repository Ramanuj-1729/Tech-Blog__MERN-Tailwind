import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Undeline from '../shared/Underline/Underline';

const Article = ({ post }) => {


    return (
        <>
            <div className="article-wrapper p-4 shadow-[0_5px_60px_-15px_rgba(0,0,0,0.2)] rounded">
                <h1 className='font-poppins block mx-auto text-4xl font-semibold text-fontColor my-4'>{post.title}</h1>
                <ArticleInfo post={post} />
                <div className="main-article">
                    <img className='w-full h-96' src={post.thumbnail} alt="article-img" />
                    <Undeline marginY="4" />
                    <p className='font-poppins text-base font-normal text-fontColor my-4 text-justify'>{post.body}</p>
                    <img className='w-full h-96' src={post.thumbnail} alt="article-img" />
                    <p className='font-poppins text-base font-normal text-fontColor my-4 text-justify'>{post.body}</p>
                </div>
            </div>
        </>
    );
}

export default Article;