import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Undeline from '../shared/Underline/Underline';

const Article = () => {
    return (
        <>
            <div className="article-wrapper p-4 shadow-[0_5px_60px_-15px_rgba(0,0,0,0.2)] rounded">
                <h1 className='font-poppins block mx-auto text-4xl font-semibold text-fontColor my-4'>Future of Electric vhicales ?</h1>
                <ArticleInfo />
                <div className="main-article">
                    <img className='w-full h-96' src="/images/pic4.png" alt="article-img" />
                    <Undeline marginY="4" />
                    <p className='font-poppins text-base font-normal text-fontColor my-4 text-justify'>Electric cars are already a mainstay on the roads, with a growing number of all-electric models being available to buy right now. The electric effect is now in full force, with established brands committing to offering a wider range of pure electric cars in the future, while those who depend heavily on diesel are seeing sales falter - with a deadline of 2030 in regions like the UK to halt sales in combustion cars. <br /> <br />Prices are falling, models are diversifying and it's all going hand-in-hand with increased investment and roll-out of charging networks. <br /><br />But what electric cars are coming? Let's take a closer look at what you can expect to see hitting the roads in the next few years.
                    </p>
                    <img className='w-full h-96' src="/images/car.png" alt="article-img" />
                    <p className='font-poppins text-base font-normal text-fontColor my-4 text-justify'>BMW has confirmed that the next-generation of BMW 7 Series will include an all-electric version. It's not going to be exclusively electric as there will be petrol, diesel and hybrid versions too - but there's talk of two versions, the i7 and the i7S. The latter is expect to have a 120kWh battery, 660hp and a range of 320 miles. BMW is serious about electric cars and there's a lot in the pipeline - the BMW i7 will take things to the luxury level.</p>
                </div>  
            </div>
        </>
    );
}

export default Article;