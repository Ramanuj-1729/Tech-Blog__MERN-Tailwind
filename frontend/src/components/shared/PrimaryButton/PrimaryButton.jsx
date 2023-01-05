import React from 'react'

const PrimaryButton = (props) => {
    return (
        <>
            <button type={props.type} onClick={props.onClick} className={`bg-primary rounded-md wideScreen:w-60 wideScreen:h-14 wideScreen:text-xl desktop:w-52 desktop:h-12 largeTablet:w-48 largeTablet:h-11 largeTablet:text-lg mediumTablet:h-10 mediumTablet:text-base smallTablet:w-44 smallTablet:h-9 smallTablet:text-sm font-semibold text-white shadow-[0px_5px_8px_1px_rgba(255,63,89,0.3)] hover:bg-[#ff667a] transition-all ease-in-out delay-150`}>{props.buttonName}</button>
        </>
    );
}

export default PrimaryButton;