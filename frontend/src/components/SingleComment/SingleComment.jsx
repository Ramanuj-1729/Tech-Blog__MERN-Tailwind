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
                    <div className="avatar bg-gray1 w-10 h-10 rounded-full text-xl flex items-center justify-center text-white"><i className="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className="info">
                    <h3 className="userName font-poppins text-xl font-medium text-fontColor">{comment.userName}</h3>
                    <span className='dateAndTime font-normal text-sm font-poppins text-fontColor'>{`${month} ${date}, ${year} At ${hour}:${minute} ${ampm}`}</span>
                    <p className="commentBody my-2 font-poppins text-lg font-normal text-fontColor">{comment.comment}</p>
                    {/* <PrimaryButton width="1/2" height="8" buttonName="Reply" /> */}
                </div>
            </div>
            <Undeline marginY="2" />
        </div>
    );
}

export default SingleComment;