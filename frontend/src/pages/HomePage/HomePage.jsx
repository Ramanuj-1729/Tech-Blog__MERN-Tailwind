import React from 'react';
import PostsSlider from '../../components/PostsSlider/PostsSlider';
import Subscribe from '../../components/Subscribe/Subscribe';
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton';
import postsData from '../../components/PostsData';

const HomePage = () => {
    return (
        <>
            <section className='hero-section'>
                <div className='flex items-center justify-center w-full h-[calc(100vh-4rem)]'>
                    <div className="hero-bg-img flex items-center justify-center w-5/12 -z-10">
                        <img src="/images/blob.svg" alt="hero-bg" />
                    </div>

                    <div className='hero-content absolute flex items-center space-x-12'>
                        <div className="hero-img-area">
                            <img className='w-[36rem]' src="/images/hero.svg" alt="hero-img" />
                        </div>
                        <div className="hero-text-area">
                            <h1 className='font-poppins text-6xl font-black text-fontColor leading-[1.3] mb-4'>Enhance your <br /> knowledge</h1>
                            <p className='font-poppins font-medium text-base mb-4 text-fontColor leading-[1.3]'>Follow us to stay updated with technology <br /> and grow your technical knowledge.</p>
                            <PrimaryButton width="44" height="12" buttonName="Find Out More" />
                        </div>
                    </div>

                    <div className="scrollBtn absolute bottom-1 flex flex-col items-center cursor-pointer">
                        <span className='font-semibold text-fontColor text-base'>Scroll Down</span>
                        <div className='mt-2 w-5 h-10 border-dotted border-2 border-fontColor flex items-center justify-center rounded-xl'>
                            <i className="fa-solid fa-angles-down text-fontColor"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured_articles-section'>
                <PostsSlider heading="Featured Articles" sliderClass="featuredItem" sliderId="featuredSlider" postsData={postsData} />
            </section>

            <section className='populer_articles-section'>
                <PostsSlider heading="Populer Articles" sliderClass="populerItem" sliderId="populerSlider" postsData={postsData} />
            </section>

            <section className='subscribe-section'>
                <Subscribe />
            </section>
        </>
    );
}

export default HomePage;