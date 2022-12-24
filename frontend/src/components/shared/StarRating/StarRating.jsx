import React, { useState } from "react";
import { useEffect } from "react";

const StarRating = ({ getStar }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        getStar(rating);
    }, [rating]);


    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button type="button" key={index} className={`${index <= (hover || rating) ? "text-fontColor" : "text-gray2"}`} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)} onDoubleClick={() => { setRating(0); setHover(0); }} >
                        <i className="fa-solid fa-star mr-1 text-sm"></i>
                    </button>
                );

            })}
        </div>


    );
};

export default StarRating;