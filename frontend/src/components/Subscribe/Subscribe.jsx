import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-wrapper flex items-center justify-center flex-col my-8">
                <h1 className='font-poppins block mx-auto text-4xl font-medium text-fontColor leading-[1.5] mb-8'>Subscribe</h1>
                <p className='font-poppins block mx-auto font-medium text-gray3 mb-8'>Subscribe our blog with your email address to receive our latest articles and updates.</p>

                <form action="" className='space-x-3 mb-8'>
                    <input className='border-2 border-gray2 text-gray-2 rounded-[5px] w-44 h-12 px-2' type="text" name="first name" id="" placeholder='First Name' />
                    <input className='border-2 border-gray2 text-gray-2 rounded-[5px] w-44 h-12 px-2' type="text" name="last name" id="" placeholder='Last Name' />
                    <input className='border-2 border-gray2 text-gray-2 rounded-[5px] w-44 h-12 px-2' type="text" name="email address" id="" placeholder='Email Address' />
                    <PrimaryButton width="44" height="12" buttonName="Subscribe" />
                </form>

                <p className='font-poppins block mx-auto text-base font-normal text-gray3 mb-8'>Your email address will not be shared.</p>
            </div>
        </>
    );
}

export default Subscribe;