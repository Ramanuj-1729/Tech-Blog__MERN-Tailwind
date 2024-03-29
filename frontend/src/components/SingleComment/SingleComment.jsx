import React from 'react';
import Undeline from '../shared/Underline/Underline';
// import PrimaryButton from '../shared/PrimaryButton/PrimaryButton';

const SingleComment = ({ comment }) => {
    const publishDate = new Date(comment.createdAt);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[publishDate.getMonth()];
    const date = publishDate.getDate();
    const year = publishDate.getFullYear();
    const hour = publishDate.getHours();
    const minute = publishDate.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    return (
        <div className='comment-wrapper'>
            <div style={{ overflowWrap: 'anywhere' }} className="comment mt-6 flex space-x-4">
                <div className='avatar-wrapper'>
                    <div className="avatar bg-gray1 wideScreen:w-12 wideScreen:h-12 largeTablet:w-10 largeTablet:h-10 largePhone:w-9 largePhone:h-9 smallPhone:w-9 smallPhone:h-9 rounded-full text-xl flex items-center justify-center text-white"><i className="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className="info">
                    <h3 className="userName font-poppins wideScreen:text-[22px] largeTablet:text-[20px] largePhone:text-[18px] smallPhone:text-[17px] font-medium text-fontColor">{comment.userName}</h3>
                    <span className='dateAndTime font-normal wideScreen:text-base largePhone:text-sm smallPhone:text-xs font-poppins text-fontColor'>{`${month} ${date}, ${year} at ${hour}:${minute} ${ampm}`}</span>
                    <p className="commentBody my-2 font-poppins wideScreen:text-xl largeTablet:text-lg largePhone:text-base smallPhone:text-sm font-normal text-fontColor">{comment.comment}</p>
                    {/* <PrimaryButton width="1/2" height="8" buttonName="Reply" /> */}
                </div>
            </div>
            <Undeline marginY="2" />
        </div>
    );
}

export default SingleComment;