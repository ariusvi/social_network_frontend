import "./Profile.css";

import { useNavigate } from 'react-router-dom';
import { updated, userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { deletePost, getMyPosts, updateProfile } from "../../services/apiCalls";
import selloPost from '../../img/sello_post.png'

import Modal from 'react-modal';

Modal.setAppElement('#root')

export const Profile = () => {

    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [write, setWrite] = useState(false);
    const [user, setUser] = useState({
        nickname: "",
        biography: "",
        avatar: "",
    });

    //redux to read mode
    const reduxUser = useSelector(userData);

    if (!reduxUser.credentials.token) {
        throw new Error('No token provided');
    }
    const token = reduxUser.credentials.token;
    // redux to write mode
    const dispatch = useDispatch();

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

    // ------------------------- UPDATE PROFILE ----------------------
    const updateDataProfile = async () => {
        try {
            const fetched = await updateProfile(reduxUser.credentials.token, user)
            setUser((prevState) => ({
                ...prevState,
                nickname: fetched.data.nickname || fetched.data.user.nickname,
                biography: fetched.data.biography || fetched.data.user.biography,
                avatar: fetched.data.avatar || fetched.data.user.avatar,
            }))
            dispatch(updated({
                nickname: fetched.data.nickname || fetched.data.user.nickname,
                biography: fetched.data.biography || fetched.data.user.biography,
                avatar: fetched.data.avatar || fetched.data.user.avatar
            }))
            setWrite(false)
        }
        catch (error) {
            console.log(error, "Updating profile error")
            throw error
        }
    };

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
            {/* ------------------------- PROFILE ---------------------- */}
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
                                {reduxUser.credentials.user.roleName === "super_admin" ? (
                                    <button className="buttonSA" onClick={() => navigate('/superadmin')}>SuperAdmin</button>
                                ) : null}
                            </div>
                            <div>{reduxUser.credentials.user.biography}</div>
                            <button
                                className="buttonUpdate"
                                title={write ? "Save changes" : "Edit profile"}
                                onClick={() => setWrite(!write)}
                            >EDIT PROFILE</button>
                        </div>
                    </div>
                    {/*  ------------------------- FORM EDIT PROFILE  -------------------------*/}
                    <div className="editProfile">
                    {write && (
                        <form onSubmit={updateDataProfile}>
                                Avatar:
                            <label>
                                <input type="text" value={user.avatar} onChange={e => setUser({ ...user, avatar: e.target.value })} />
                            </label>
                                Nickname:
                            <label>
                                <input type="text" value={user.nickname} onChange={e => setUser({ ...user, nickname: e.target.value })} />
                            </label>
                                Biography:
                            <label>
                                <input type="text" value={user.biography} onChange={e => setUser({ ...user, biography: e.target.value })} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    )}
                    </div>
                </div>
                {/* ------------------------- POSTS ---------------------- */}
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