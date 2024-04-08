import "./Profile.css";

import { useNavigate } from 'react-router-dom';
import { userData } from "../../app/slices/userSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyPosts } from "../../services/apiCalls";

export const Profile = () => {

    const navigate = useNavigate();

    //redux to read mode
    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token;

    useEffect(() => {

        if (!token) {
            navigate('/login')
        }
    }, [reduxUser])

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


    return (
        <>
            <div className='profileDesign'>
                <div className="paperProfile">
                <div className='profileData'>
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
                <div className='postsRoster'>
                    {myPosts.map(post => {
                        return (
                            <div key={post._id} className='paperPost'>
                            <div className='postDesign'>
                                <div> </div>
                                <div className='postTitle'>{post.title}</div>
                                <div ><img className='postImage' src={post.image} alt="post's image"></img></div>
                                <div>{post.text}</div>
                                <div>{post.author.nickname}</div>
                                <div>{post.likes}</div>
                            </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </>
    )
}