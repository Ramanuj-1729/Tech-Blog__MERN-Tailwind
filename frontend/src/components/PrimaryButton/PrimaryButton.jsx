import React from 'react'

const PrimaryButton = (props) => {
    return (
        <>
            <button className={`bg-primary rounded-md w-${props.width} h-${props.height} text-lg font-semibold text-white shadow-[0px_5px_8px_1px_rgba(255,63,89,0.3)] hover:bg-[#ff667a] transition-all ease-in-out delay-150`}>{props.buttonName}</button>
        </>
    );
}

export default PrimaryButton;