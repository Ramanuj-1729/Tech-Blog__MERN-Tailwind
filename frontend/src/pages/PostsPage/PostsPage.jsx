import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Posts from '../../components/Posts/Posts';
import Underline from '../../components/shared/Underline/Underline';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/api/posts/"+search);
            setPosts(res.data);
        }
        fetchPosts();
    }, [search]);

    const showPerPage = 6;
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
                <h1 className='font-poppins block mx-auto wideScreen:text-[52px] desktop:text-[46px] largeTablet:text-[42px] mediumTablet:text-[36px] smallTablet:text-[32px] largePhone:text-[30px] smallPhone:text-[28px] font-medium text-fontColor mt-8 mb-8'>{search === '' ? 'All Posts' : search.slice(5).replace('%20', " ")}</h1>
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