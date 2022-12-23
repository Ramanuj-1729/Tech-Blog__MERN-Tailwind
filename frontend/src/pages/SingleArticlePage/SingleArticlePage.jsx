import React from 'react';
import Article from '../../components/Article/Article';
import CommentAndRate from '../../components/CommentAndRate/CommentAndRate';
import CommentSection from '../../components/CommentSection/CommentSection';
import { useLocation } from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const SingleArticlePage = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/api/posts/" + path);
            setPost(res.data);
        }
        getPost();
    }, [path]);
    return (
        <>
            <main className='w-1/2 mx-auto my-12 space-y-8'>
                <section className="article">
                    <Article post={post} />
                </section>
                <section className="comment-and-rate">
                    <CommentAndRate />
                </section>
                <section className="comment-section">
                    <CommentSection />
                </section>
            </main>
        </>
    );
}

export default SingleArticlePage;