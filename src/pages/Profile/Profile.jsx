import "./Profile.css";

import { useNavigate } from 'react-router-dom';
import { userData } from "../../app/slices/userSlice";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { deletePost, getMyPosts } from "../../services/apiCalls";
import selloPost from '../../img/sello_post.png'

import Modal from 'react-modal';

Modal.setAppElement('#root') 

export const Profile = () => {

    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    //redux to read mode
    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token || ({});

    //--------------------NO TOKEN - GO TO LOGIN--------------------
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [reduxUser])
    //--------------------------------------------------------------


    //--------------------GET MY POSTS--------------------
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const getMyPostsData = async () => {
            try {
                const fetched = await getMyPosts(token)
                setMyPosts(fetched.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMyPostsData()
    }, [myPosts, token])


    //--------------------DELETE MY POST--------------------
    const [successMessage, setSuccessMessage] = useState(null);

    const deleteMyPost = async (postId) => {
        try {
            const response = await deletePost(token, postId)
            const data = response.data
            setMyPosts(myPosts.filter(post => post._id !== data._id))
            setModalIsOpen(true);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <Modal className={'modalDeletePost'}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Success Modal"
            >
                <h2>Post deleted successfully</h2>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
            <div className='profileDesign'>
                <div className="paperProfile">
                    <div className='profileData'>
                        <div>
                            <div></div>
                            <div>
                                <img
                                    className="avatarProfile"
                                    src={reduxUser.credentials.user.avatar}
                                    alt="user's avatar">
                                </img>
                                <div className="nickname">{reduxUser.credentials.user.nickname}</div>
                            </div>
                            <div>{reduxUser.credentials.user.biography}</div>
                        </div>
                    </div>
                </div>
                <div><img className='newPost' src={selloPost} alt="Sello Post" onClick={() => navigate('/newpost')} /></div>
                <div className='postsRoster'>
                    {myPosts.map(post => {
                        return (
                            <div key={post._id} className='paperPost'>
                                <div className='postDesign'>
                                
                                    <div> </div>
                                    <div className='postTitle'>{post.title}</div>
                                    <div >{post.image && <img className='postImage' src={post.image} alt="post's image"></img>}</div>
                                    <div>{post.text}</div>
                                    <div>{post.author.nickname}</div>
                                    <div>{post.likes}</div>
                                    <button className="buttonTransparent" onClick={() => deleteMyPost(post._id)}><img className="ButtonDeletePost"></img></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}