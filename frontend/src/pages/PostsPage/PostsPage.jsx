import React, { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Posts from '../../components/Posts/Posts';
import Underline from '../../components/shared/Underline/Underline';

const PostsPage = () => {
    const [showPerPage, setShowPerPage] = useState(6)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })
    const onPaginationChange = ( start, end)=>{
        setPagination({start, end});
    }
    return (
        <>
            <div className="article-wrapper flex items-center justify-center flex-col w-fit mx-auto">
                <h1 className='font-poppins block mx-auto text-5xl font-medium text-fontColor my-5'>All Posts</h1>
                <div className="posts-wrapper">
                    <Posts start={pagination.start} end={pagination.end} />
                </div>
                <Underline marginY="8"/>
                <div className="pagination">
                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} />
                </div>
            </div>
        </>
    );
}

export default PostsPage;