import React from 'react';
import Article from '../../components/Article/Article';
import CommentAndRate from '../../components/CommentAndRate/CommentAndRate';
import CommentSection from '../../components/CommentSection/CommentSection';

const SingleArticlePage = () => {
    return (
        <>
            <section className="article">
                <Article />
            </section>
            <section className="comment-and-rate">
                <CommentAndRate />
            </section>
            <section className="comment-section">
                <CommentSection />
            </section>
        </>
    );
}

export default SingleArticlePage;