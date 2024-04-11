import "./SuperAdmin.css";

import { userData } from "../../app/slices/userSlice";
import { getPosts, getUsers } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SuperAdmin = () => {

    const navigate = useNavigate()

    //reduxe to read mode
    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token || ({});

    //----------------SUPERADMIN----------------

    useEffect(() => {
        if (reduxUser.credentials.user.roleName !== "super_admin") {
            navigate('/home');
        }
    }, [reduxUser, navigate]);

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

    //--------------------GET USERS--------------------

    const [Users, setUsers] = useState([]);

    const allUsers = async () => {
        try {
            const fetched = await getUsers(token)
            setUsers(fetched.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (Users.length === 0) {
            allUsers()
        }
    }, [Users, token]);

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [reduxUser]);


    return (
        <div className="superadmin">
---------------------------USUARIOS
            <div className="usersAdmin">
                {Users.length > 0 ? Users.map(user => {
                    return (
                        <div key={user._id} className="user">
                            <p>{user._id}</p>
                            <p>{user.nickname}</p>
                            <p>{user.email}</p>
                            <p>{user.role}</p>
                            <p>{user.createdAt}</p>
                            <p>{user.updatedAt}</p>
                        </div>
                    )
                }) : <p>No users</p>}
</div>
------------------------------POSTS
                <div className="postsAdmin">
                    {posts.length > 0 ? posts.map(post => {
                        return (
                            <div key={post._id} className="post">
                                <p>{post._id}</p>
                                <p>{post.title}</p>
                                <p>{post.text}</p>
                                <p>{post.image}</p>
                                <p>{post.author.nickname}</p>
                                <p>{post.like}</p>
                                <p>{post.createdAt}</p>
                                <p>{post.updatedAt}</p>
                            </div>
                        )
                    }) : <p>No posts</p>}
                </div>
            
        </div>
    )
}