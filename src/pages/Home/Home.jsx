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
                                <div>{post.author.nickname}</div>
                                <div><button  onClick={() => {handleLike(post._id)}}>Like</button>{post.like.length}</div> 
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

