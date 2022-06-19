import React, { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button type="button" key={index} className={`${index <= (hover || rating) ? "text-fontColor" : "text-gray2"}`} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)} >
                        <i className="fa-solid fa-star mr-1 text-sm"></i>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;