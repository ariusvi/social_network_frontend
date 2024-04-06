import "./Login.css"

import { CustomInput } from '../../common/CustomInput/CustomInput';
import { loginUser } from '../../services/apiCalls';
import {useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import { decodeToken } from "react-jwt";

//redux
import { login } from "../../app/slices/userSlice";
import { useDispatch } from "react-redux";

export const Login = () => {

    const navigate = useNavigate();

    //redux to write mode
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const loginMe = async () => {
        const fetched = await loginUser(user)

        if (fetched.token) {
            const decoded = decodeToken(fetched.token)

            const passport = {
                token: fetched.token,
                user: decoded
            } 

            dispatch(login({credentials: passport}))
        }
    }

    return (
        <>
            <div className='loginDesign'>
                <CustomInput
                    className="inputDesign"
                    type="email"
                    name="email"
                    value={user.email || ""}
                    placeholder="email"
                    changeEmit={inputHandler}
                />
                <CustomInput
                    className="inputDesign"
                    type="password"
                    name="password"
                    value={user.password || ""}
                    placeholder="password"
                    changeEmit={inputHandler}
                />
                <button className='loginButton' onClick={loginMe}></button>
            </div>
        </>
    )
}