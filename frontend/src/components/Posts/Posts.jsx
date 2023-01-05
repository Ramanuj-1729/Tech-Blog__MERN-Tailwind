import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ start, end, posts }) => {
    const PF = "http://localhost:5000/";

    return (
        <>
            <div className="posts-wrapper grid desktop:grid-cols-3 smallTablet:grid-cols-2 smallTablet:gap-8">
                {
                    posts.slice(start, end).map((post) => (
                        <Link key={post._id} to={`/posts/article/${post._id}`}>
                            <div className="card relative largeTablet:w-[350px] largeTablet:h-[300px] mediumTablet:w-[300px] mediumTablet:h-[250px] smallTablet:w-[250px] smallTablet:h-[200px] cursor-pointer">
                                <img className='largeTablet:w-[350px] largeTablet:h-[300px] mediumTablet:w-[300px] mediumTablet:h-[250px] smallTablet:w-[250px] smallTablet:h-[200px] brightness-50' src={PF + post.thumbnail} alt="post" />
                                <div className="inner-content absolute bottom-2 left-4">
                                    <div className="category bg-primary wideScreen:w-32 wideScreen:h-8 mediumTablet:w-28 mediumTablet:h-6 smallTablet:w-24 smallTablet:h-5 flex justify-center items-center rounded text-white font-poppins font-semibold mediumTablet:text-sm smallTablet:text-xs mt-2 mediumTablet:mb-4 smallTablet:mb-2">{post.category}</div>
                                    <h3 className='text-white font-poppins wideScreen:text-[28px] desktop:text-[25px] largeTablet:text-[24px] mediumTablet:text-[22px] smallTablet:text-[19px] smallTablet:leading-[1.3] font-semibold tracking-wide'>{post.title}</h3>
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