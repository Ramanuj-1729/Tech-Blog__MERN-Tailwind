import React, { useState, useEffect } from 'react';

const Pagination = ({ showPerPage, onPaginationChange, posts }) => {
    const activeButtonStyle = {
        backgroundColor: "#FF3F59",
    }
    const numberOfButtons = Math.ceil(posts.length / showPerPage);
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        let value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    }, [counter, showPerPage])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === 'next') {
            if (numberOfButtons === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    }

    return (
        <>
            <div className="pagination-wrapper flex items-center justify-center flex-col mt-2 mb-8">
                <h1 className='font-poppins block mx-auto text-2xl font-medium text-fontColor mb-4'>More Articles</h1>
                <div className="pagination-buttons flex items-center justify-center space-x-4">
                    <div onClick={() => onButtonClick("prev")} className="prev-button text-gray2 border-2 rounded-full border-gray2 flex items-center justify-center w-8 h-8 cursor-pointer">
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="number-buttons space-x-4 flex items-center justify-center">
                        {
                            new Array(numberOfButtons).fill("").map((el, index) => (
                                <span style={index + 1 === counter ? activeButtonStyle : null} onClick={() => setCounter(index + 1)} className='flex items-center justify-center w-8 h-8 bg-gray2 text-white font-semibold font-poppins cursor-pointer' key={index.toString()}>{index + 1}</span>
                            ))
                        }
                    </div>
                    <div onClick={() => onButtonClick("next")} className="next-button text-gray2 border-2 rounded-full border-gray2 flex items-center justify-center w-8 h-8 cursor-pointer">
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pagination;