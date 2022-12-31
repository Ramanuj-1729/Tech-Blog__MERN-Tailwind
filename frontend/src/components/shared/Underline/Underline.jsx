import React from 'react';

const Undeline = ({marginY}) => {
    return (
        <div className={`underline bg-gray1 w-full h-[2px] my-${marginY} mt-${marginY} mb-${marginY}`}></div>
    );
}

export default Undeline;