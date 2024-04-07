import './Home.css'

import { searchData } from '../../app/slices/searchSlice';
import { getPosts } from '../../services/apiCalls';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../app/slices/userSlice';

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
                soy el home

                <div className='postsRoster'>
                    {posts.map(post => {
                        return (
                            <div key={post.id} className='cardDesign'>
                                <div className='cardTitle'>{post.title}</div>
                                <div><img src={post.image} alt="post's image"></img></div>
                                <div>{post.text}</div>
                                <div>{post.author}</div>
                                <div>{post.likes}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

