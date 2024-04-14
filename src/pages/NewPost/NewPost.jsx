import "./NewPost.css";

import { CustomInput } from "../../common/CustomInput/CustomInput";
import { createPost } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { React, useState } from "react";

export const NewPost = () => {

    const navigate = useNavigate();

    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token;

    const [postCredentials, setPostCredentials] = useState({
        title: "",
        image: "",
        text: "",
    });

    const [errorMessage, setErrorMessage] = useState({
        titleError: "",
        imageError: "",
        textError: "",
    });

    const [msgError, setMsgError] = useState("");


    const inputHandler = (e) => {
        setPostCredentials(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }

    const [posts, setPosts] = useState([]);

    const addPost = async () => {
        try {
            const fetched = await createPost(token, postCredentials)

            if (!fetched.success) {
                throw new Error(fetched.message)
            }

            setPostCredentials({
                title: "",
                image: "",
                text: "",
            })

            const newPostId = fetched.data._id; 

            setMsgError(fetched.message);

            //  navigate(`/posts/${newPostId}`) //todo redirect to new post

        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    
    return (
        <>
            <div className="newPostDesign">
                <div className="paperNewPost">
                    <div className="inputsPostDesign">
                        Post's Title:
                        <CustomInput
                            className={"inputDesign"}
                            type={"text"}
                            name={"title"}
                            value={postCredentials.title || ""}
                            placeholder={"title"}
                            changeEmit={inputHandler}
                        />
                        Image:
                        <CustomInput
                            className={"inputDesign"}
                            type={"text"}
                            name={"image"}
                            value={postCredentials.image || ""}
                            placeholder={"image's URL"}
                            changeEmit={inputHandler}
                        />
                        Post:
                        <CustomInput
                            className={"inputDesign"}
                            type={"text"}
                            name={"text"}
                            value={postCredentials.text || ""}
                            placeholder={"text"}
                            changeEmit={inputHandler}
                        />
                        <button className="postButton" onClick={addPost}></button>
                    </div>
                </div>
            </div>
        </>
    );
}