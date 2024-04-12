import './Home.css'

import { searchData } from '../../app/slices/searchSlice';
import { getPosts, likePost } from '../../services/apiCalls';
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../app/slices/userSlice';
import selloPost from '../../img/sello_post.png'


export const Home = () => {

    const navigate = useNavigate();

    //redux to read mode 
    // const searchRedux = useSelector(searchData); //todo user search

    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token;

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [reduxUser]);

    //----------------GET POSTS----------------

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsData = async () => {
            try {
                const fetched = await getPosts(token)
                setPosts(fetched.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPostsData()
    }, [posts, token])

    //--------------------LIKE POST--------------------

    const handleLike = async (postId) => {
        try {
            const response = await likePost(token, postId, reduxUser._id);
            if (response) {
                const updatedPost = response.data;
                setPosts(posts.map(post => post._id === updatedPost._id ? updatedPost : post));
            } else {
                console.log('No response from likePost');
            }
        } catch (error) {
            console.log(error, "error handleLike");
        }
    }


    return (
        <>
            <div className='homeDesign'>

                <div className='postsRoster'>
                    {posts && posts.length > 0 ?
                        (posts.map(post => {
                            return (
                                <div key={post._id} className='paperPost'>
                                    <div className='postDesign'>
                                        <div> </div>
                                        <div className='postTitle'>{post.title}</div>
                                        <div >{post.image && <img className='postImage' src={post.image} alt="post's image"></img>}</div>
                                        <div>{post.text}</div>
                                        <div>Author: {post.author.nickname}</div>
                                        <div><button className="likeButton" onClick={() => { handleLike(post._id) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5c.805 0 1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004c.238.181.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83c-.651.495-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384c-.295 0-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" /><path fill="currentColor" d="M4.868 2.5c.03-.105.217-.106.248 0c.14.482.4 1.194.793 1.585c.393.39 1.108.646 1.59.783c.107.03.107.217.002.248c-.482.14-1.195.4-1.586.793c-.39.393-.645 1.108-.782 1.59c-.03.107-.218.107-.249.002c-.14-.482-.4-1.195-.793-1.586c-.393-.39-1.107-.645-1.59-.782c-.106-.03-.107-.218-.001-.249c.482-.14 1.194-.4 1.585-.793c.39-.393.646-1.107.783-1.59" opacity=".5" /><path fill="currentColor" fillRule="evenodd" d="M19 3.25a.75.75 0 0 1 .75.75v.25H20a.75.75 0 0 1 0 1.5h-.25V6a.75.75 0 0 1-1.5 0v-.25H18a.75.75 0 0 1 0-1.5h.25V4a.75.75 0 0 1 .75-.75" clipRule="evenodd" opacity=".5" /></svg>
                                        </button>{post.like.length}</div>
                                    </div>
                                </div>
                            )
                        }))
                        : <div>Please register-in </div>}
                </div>
                <div><img className='newPost' src={selloPost} alt="Sello Post" onClick={() => navigate('/newpost')} /></div>
            </div>
        </>
    )
}

