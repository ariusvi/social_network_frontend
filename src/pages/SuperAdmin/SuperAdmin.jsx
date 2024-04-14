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
            <div className="titleSA">Baldur's Board - SuperAdmin</div>

{/* --------------------------------- USERS --------------------------- */}
<div className="usersAdmin">
<div className="titleTable">USERS</div>
    {Users.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nickname</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {Users.map(user => (
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.nickname}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{new Date(user.createdAt).toLocaleString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                        <td>{new Date(user.updatedAt).toLocaleString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>No users</p>
    )}
</div>

{/* ------------------------------- POSTS ------------------------------- */}
<div className="postsAdmin">
    <div className="titleTable">POSTS</div>
    {posts.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Like</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post._id}>
                        <td>{post._id}</td>
                        <td>{post.title}</td>
                        <td>{post.author.nickname}</td>
                        <td>{post.like}</td>
                        <td>{new Date(post.createdAt).toLocaleString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                        <td>{new Date(post.updatedAt).toLocaleString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>No posts</p>
    )}
</div>
            
        </div>
    )
}