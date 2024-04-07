import "./Profile.css";

import {useNavigate} from 'react-router-dom';
import { userData } from "../../app/slices/userSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Profile = () => {

    const navigate = useNavigate();

    //redux to read mode
    const reduxUser = useSelector(userData);
    console.log(reduxUser);

    useEffect(() => {

        if(!reduxUser.credentials.token){
            navigate('/login')
        }
    }, [reduxUser])


    return (
        <>
        {/* revisar esto */}
            <div className='profileDesign'> 
                <div className='profileData'>
                    <div className='profileDataInfo'>{reduxUser.credentials.user.avatar} AQUÍ VA EL AVATAR</div>
                    <div className='profileDataTitle'>Nickname:</div>
                    <div className='profileDataInfo'>{reduxUser.credentials.user.nickname}</div>
                    <div className='profileDataTitle'>Biography:</div>
                    <div className='profileDataInfo'>{reduxUser.credentials.user.biography} AQUÍ IRÁ LA BIOGRAFIA BLAH BLAH</div>
                </div>
            </div>
        </>
    )
}