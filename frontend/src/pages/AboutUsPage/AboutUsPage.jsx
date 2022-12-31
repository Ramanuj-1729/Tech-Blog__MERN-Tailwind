import React, { useState } from 'react';
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton';

const AboutUsPage = () => {
    const [display, setDisplay] = useState(true);

    const changeDisplay = () => {
        setDisplay(false);
    }

    return (

        <>
            <div className="aboutUs-wrapper">
                <div className={`aboutUs-main mx-auto my-16 desktop:w-3/4 ${display === true ? "flex" : "hidden"} items-center justify-center desktop:space-x-8`}>
                    <div className="aboutUs-text w-1/2">
                        <h1 className='font-poppins block mx-auto wideScreen:text-6xl desktop:text-5xl font-semibold text-fontColor desktop:leading-[1.2] my-4'>About <br /> Techblog !</h1>
                        <p className='font-poppins block mx-auto wideScreen:text-lg desktop:text-base font-medium text-gray3 mb-6'>Techblog is a Professional tech article Platform. Our mission is to provide you interesting and knowledgeable content, which you will like very much.</p>
                        <PrimaryButton width="44" height="12" buttonName="Read More" onClick={changeDisplay} />
                    </div>
                    <div className="aboutUs-img wideScreen:w-1/2 desktop:w-5/12">
                        <img className='w-full mx-auto' src="/images/about_us.svg" alt="about us" />
                    </div>
                </div>

                <div className={`aboutUs-content mx-auto desktop:w-3/4 ${display === false ? "flex" : "hidden"} items-center justify-center flex-col my-20`}>
                    <h1 className='font-poppins block mx-auto wideScreen:text-6xl desktop:text-5xl font-semibold text-fontColor leading-[1.2] wideScreen:my-6 desktop:my-5'>About Techblog !</h1>
                    <span className='font-poppins block font-semibold mx-auto wideScreen:text-2xl desktop:text-xl text-gray3 desktop:mb-5'>Welcome To Techblog</span>
                    <p className='font-poppins block mx-auto wideScreen:text-lg desktop:text-base font-medium text-gray3 mb-6 text-justify'>Techblog is a professional blog platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of blog, with a focus on dependability and tech article. We're working to turn our passion for blog into a booming online website. We hope you enjoy our blog as much as we enjoy offering them to you. <br /><br /> I will keep posting more important posts on my Website for all of you. Please give your support and love. <br /><br />  Thanks For Visiting Our site.</p>
                    <span className='font-poppins block font-semibold mx-auto wideScreen:text-3xl desktop:text-2xl text-primary mb-6'><br /> Have a nice day !</span>
                </div>
            </div>
        </>
    );
}

export default AboutUsPage;