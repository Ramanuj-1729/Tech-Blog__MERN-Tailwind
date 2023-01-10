import React from 'react';
import PostsSlider from '../../components/PostsSlider/PostsSlider';
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/api/posts/");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    const Navigation = useNavigate();

    const onClick = () => {
        Navigation('/posts');
    }

    return (
        <>
            <section className='hero-section'>
                <div className='flex items-center justify-center w-full h-[calc(100vh-4rem)]'>
                    <div className="hero-bg-img mediumTablet:rotate-0 mediumTablet:scale-x-[none] largePhone:rotate-[205deg] largePhone:scale-x-[-1] flex items-center justify-center wideScreen:w-3/6 largeTablet:w-5/12 mediumTablet:w-3/5 largePhone:w-[75%] -z-10">
                        <img src="/images/blob.svg" alt="hero-bg" />
                    </div>

                    <div className='hero-content absolute flex items-center mediumTablet:flex-row largePhone:flex-col wideScreen:space-x-16 desktop:space-x-12 largeTablet:space-x-10 mediumTablet:space-x-8 mediumTablet:space-y-0 smallTablet:space-y-6 largePhone:space-y-5'>
                        <div className="hero-img-area">
                            <img className='wideScreen:w-[38rem] desktop:w-[32rem] largeTablet:w-[26rem] mediumTablet:w-[22rem] largePhone:w-[20rem]' src="/images/hero.svg" alt="hero-img" />
                        </div>
                        <div className="hero-text-area">
                            <h1 className='font-poppins wideScreen:text-[65px] desktop:text-[56px] largeTablet:text-[50px] mediumTablet:text-[40px] smallTablet:text-[36px] largePhone:text-[35px] font-black text-fontColor wideScreen:leading-[1.3] mediumTablet:leading-[1.2] largePhone:leading-[1.1] mb-4'>Enhance your <br /> knowledge</h1>
                            <p className='font-poppins font-medium wideScreen:text-lg largeTablet:text-base mediumTablet:text-sm largePhone:text-sm mb-4'>Follow us to stay updated with technology <br /> and grow your technical knowledge.</p>
                            <PrimaryButton buttonName="Find Out More" onClick={onClick} />
                        </div>
                    </div>

                    <div className="scrollBtn absolute bottom-1 flex flex-col items-center cursor-pointer wideScreen:text-lg mediumTablet:text-base largePhone:text-sm">
                        <span className='font-semibold text-fontColor'>Scroll Down</span>
                        <div className='mt-2 wideScreen:w-6 wideScreen:h-11 mediumTablet:w-5 mediumTablet:h-10 largePhone:w-5 largePhone:h-9 border-dotted border-2 border-fontColor flex items-center justify-center rounded-xl'>
                            <i className="fa-solid fa-angles-down text-fontColor"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured_articles-section'>
                <PostsSlider heading="Featured Articles" sliderClass="featuredItem" sliderId="featuredSlider" postsData={posts} />
            </section>

            <section className='populer_articles-section'>
                <PostsSlider heading="Populer Articles" sliderClass="populerItem" sliderId="populerSlider" postsData={posts} />
            </section>
        </>
    );
}

export default HomePage;