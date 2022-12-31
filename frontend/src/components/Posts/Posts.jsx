import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ start, end, posts }) => {
    const PF = "http://localhost:5000/";

    return (
        <>
            <div className="posts-wrapper grid desktop:grid-cols-3 largeTablet:grid-cols-2 largeTablet:gap-8">
                {
                    posts.slice(start, end).map((post) => (
                        <Link key={post._id} to={`/posts/article/${post._id}`}>
                            <div className="card relative largeTablet:w-[350px] largeTablet:h-[300px] cursor-pointer">
                                <img className='largeTablet:w-[350px] largeTablet:h-[300px] brightness-50' src={PF + post.thumbnail} alt="post" />
                                <div className="inner-content absolute bottom-2 left-4">
                                    <div className="category bg-primary wideScreen:w-32 wideScreen:h-8 largeTablet:w-28 largeTablet:h-6 flex justify-center items-center rounded text-white font-poppins font-semibold text-sm mt-2 mb-4">{post.category}</div>
                                    <h3 className='text-white font-poppins wideScreen:text-[28px] desktop:text-[25px] largeTablet:text-[24px] largeTablet:leading-[1.3] font-semibold tracking-wide'>{post.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default Posts;