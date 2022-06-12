import React, { useState } from 'react';
import postsData from '../../components/PostsData';

const Posts = ({ start, end }) => {
    const [posts, setPosts] = useState(postsData);

    return (
        <>
            <div className="posts-wrapper grid grid-cols-3 gap-8">
                {
                    posts.slice(start, end).map((post) => (
                        <div className="card relative w-[300px] h-[250px] cursor-pointer" key={post.id}>
                            <img className=' brightness-50' src={post.thumbnail} alt="post" />
                            <div className="inner-content absolute bottom-2 left-4">
                                <div className="category bg-primary w-28 h-6 flex justify-center items-center rounded text-white font-poppins font-semibold text-sm mt-2 mb-4">{post.category}</div>
                                <h3 className='text-white font-poppins text-3xl font-semibold tracking-wide'>{post.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Posts;