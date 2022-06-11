import React, { useState } from 'react';
import postsData from '../../components/PostsData';

const Posts = ({ start, end }) => {
    const [posts, setPosts] = useState(postsData);

    return (
        <>
            <div className="posts-wrapper grid grid-cols-3 gap-4">
                {
                    posts.slice(start, end).map((post) => (
                        <div className="card w-60 h-60 border-2" key={post.id}>
                            <h5>{post.id} {post.title}</h5>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Posts;