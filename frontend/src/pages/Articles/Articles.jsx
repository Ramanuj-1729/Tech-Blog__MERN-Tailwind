import React, { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Posts from '../../components/Posts/Posts';

const Articles = () => {
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
            <div className="article-wrapper flex items-center justify-center flex-col w-4/5 mx-auto">
                <h1 className='font-poppins block mx-auto text-4xl font-medium text-fontColor leading-[1.2] my-4'>All Articles</h1>
                <div className="posts-wrapper">
                    <Posts start={pagination.start} end={pagination.end} />
                </div>
                <div className="underline bg-gray1 w-full h-[2px] my-4"></div>
                <div className="pagination">
                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} />
                </div>
            </div>
        </>
    );
}

export default Articles;