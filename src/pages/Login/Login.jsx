import { CustomInput } from '../../common/CustomInput/CustomInput';
import { loginUser } from '../../services/apiCalls';
import "./Login.css"

import React, { useState } from "react";

export const Login = () => {

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
        console.log(fetched , 'fetched')
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