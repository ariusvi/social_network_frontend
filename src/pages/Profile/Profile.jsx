import "./Profile.css";

import { useNavigate } from 'react-router-dom';
import { userData } from "../../app/slices/userSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Profile = () => {

    const navigate = useNavigate();

    //redux to read mode
    const reduxUser = useSelector(userData);

    useEffect(() => {

        if (!reduxUser.credentials.token) {
            navigate('/login')
        }
    }, [reduxUser])


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
            </div>
        </>
    )
}