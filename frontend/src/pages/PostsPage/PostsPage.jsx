import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Posts from '../../components/Posts/Posts';
import Underline from '../../components/shared/Underline/Underline';
import axios from 'axios';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/api/posts");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    const [showPerPage, setShowPerPage] = useState(6)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })
    const onPaginationChange = (start, end) => {
        setPagination({ start, end });
    }
    return (
        <>
            <div className="article-wrapper flex items-center justify-center flex-col w-fit mx-auto">
                <h1 className='font-poppins block mx-auto text-5xl font-medium text-fontColor my-5'>All Posts</h1>
                <div className="posts-wrapper">
                    <Posts start={pagination.start} end={pagination.end} posts={posts} />
                </div>
                <Underline marginY="8"/>
                <div className="pagination">
                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} posts={posts} />
                </div>
            </div>
        </>
    );
}

export default PostsPage;