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
    const [comment, setComment] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/api/posts/" + path);
            setPost(res.data);
        }
        const getCommentAndRating = async () => {
            const res = await axios.get("/api/comments/" + path);
            setComment(res.data);
        }
        getPost();
        getCommentAndRating();
    }, [path]);


    return (
        <>
            <main className='w-3/5 mx-auto my-12 space-y-8'>
                <section className="article">
                    <Article post={post} comment={comment} />
                </section>
                <section className="comment-and-rate">
                    <CommentAndRate postId={path} />
                </section>
                <section className="comment-section">
                    <CommentSection comment={comment} />
                </section>
            </main>
        </>
    );
}

export default SingleArticlePage;