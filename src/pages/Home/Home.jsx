import './Home.css'

import { searchData } from '../../app/slices/searchSlice';
import { getPosts } from '../../services/apiCalls';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../app/slices/userSlice';
import selloPost from '../../img/sello_post.png'

export const Home = () => {

    const navigate = useNavigate();

    //redux to read mode 
    // const searchRedux = useSelector(searchData);

    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token;

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [reduxUser]);

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



    return (
        <>
            <div className='homeDesign'>
            
                <div className='postsRoster'>
                    {posts.map(post => {
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
                <div ><img className='newPost' src={selloPost} alt="Sello Post"  /></div>
            </div>
        </>
    )
}

