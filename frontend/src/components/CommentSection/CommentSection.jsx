import React from 'react';
import { useState } from 'react';
import Underline from '../shared/Underline/Underline';
import SingleComment from '../SingleComment/SingleComment';

const CommentSection = ({ comments }) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (start >= 4) {
                setStart(start - 4);
                setEnd(end - 4);
            }
        } else if (type === 'next') {
            if (end <= comments.length) {
                setStart(start + 4);
                setEnd(end + 4);
            }
        }
    }
    return (
        <>
            <div className='flex items-center space-x-4'>
                <h2 className='font-poppins wideScreen:text-3xl largePhone:text-2xl smallPhone:text-xl font-medium text-fontColor'>{comments.length} COMMENTS</h2>
                <span className='text-fontColor opacity-60 wideScreen:text-2xl largePhone:text-xl smallPhone:text-base'><i className="fa-solid fa-comments"></i></span>
            </div>
            <Underline marginY="4" />

            <div className="comments">
                {
                    comments.slice(start, end).map((comment) => (
                        <SingleComment key={comment._id} comment={comment} />
                    ))
                }
            </div>

            <div className="comments-pagination flex justify-between mt-5">
                <div className="older-comments flex space-x-3 items-center">
                    <div onClick={() => onButtonClick("prev")} className={`${start >= 4 ? '' : 'cursor-not-allowed'} prev-button text-gray2 border-2 rounded-full border-gray2 flex items-center justify-center wideScreen:w-10 wideScreen:h-10 smallTablet:w-8 smallTablet:h-8 largePhone:w-7 largePhone:h-7 smallPhone:w-6 smallPhone:h-6 cursor-pointer`}>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <span className='font-poppins wideScreen:text-lg largePhone:text-base smallPhone:text-xs font-medium text-fontColor opacity-70'>Older Comments</span>
                </div>
                <div className="newer-comments flex space-x-3 items-center">
                    <span className='font-poppins wideScreen:text-lg largePhone:text-base smallPhone:text-xs font-medium text-fontColor opacity-70'>Newer Comments</span>
                    <div onClick={() => onButtonClick("next")} className={`${end < comments.length ? '' : 'cursor-not-allowed'} next-button text-gray2 border-2 rounded-full border-gray2 flex items-center justify-center wideScreen:w-10 wideScreen:h-10 smallTablet:w-8 smallTablet:h-8 largePhone:w-7 largePhone:h-7 smallPhone:w-6 smallPhone:h-6 cursor-pointer`}>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentSection;