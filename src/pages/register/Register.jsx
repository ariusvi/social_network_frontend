import './Register.css';

import {React,  useState } from "react";
import {useNavigate} from 'react-router-dom';
import { registerUser } from '../../services/apiCalls';
import { CustomInput } from '../../common/CustomInput/CustomInput';
import { okRegister, notRegister } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Register = () => { 

    const dispatch = useDispatch();
    const register = useSelector(state => state.user.register);
    const error = useSelector(state => state.user.error);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const [user, setUser] = useState({
        nickname: "",
        email: "",
        password: "",
    })

    const [userError, setUserError] = useState({
        nicknameError: "",
        emailError: "",
        passwordError: "",
    });

    const [msgError, setMsgError] = useState("");

    const inputHandler = (e) => {
        setUser(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }


    const registerMe = async () => {

        try {
            if (user.password.length < 6 || user.password.length > 10) {
                throw new Error("Password must contain between 6 and 10 characters")
            }

            for (let element in user) {
                if (user[element] === "") {
                    throw new Error("Todos los campos tienen que estar completos")
                }
            }

            const fetched = await registerUser(user)

            if (!fetched.success) {
                throw new Error(fetched.message);
            }

            setMsgError(fetched.message);

                dispatch(okRegister());
                setTimeout(() => { navigate("/login") }, 820)

        } catch (error) {
            setErrorMessage(error.message);
            dispatch(notRegister(error.message))
        }

    }

    return (
        <>
            <div className='registerDesign'>
            
                <div className="paper">
                    <div className="registerTitle">Register</div>
                    Nickname:
                <CustomInput
                    className="inputDesign"
                    type="nickname"
                    name="nickname"
                    value={user.nickname || ""}
                    placeholder="nickname"
                    changeEmit={inputHandler}
                />
                <div className='error'>{userError.nameError}</div>
                    Email:
                <CustomInput
                    className="inputDesign"
                    type="email"
                    name="email"
                    value={user.email || ""}
                    placeholder="email"
                    changeEmit={inputHandler}
                />
                <div className='error'>{userError.emailError}</div>
                    Password:
                <CustomInput
                    className="inputDesign"
                    type="password"
                    name="password"
                    value={user.password || ""}
                    placeholder="password"
                    changeEmit={inputHandler}
                />
                <div className='error'>{userError.passwordError}</div>
                <button className='registerButton' onClick={registerMe}></button>
                <div className='error'>{errorMessage}</div>
                </div>
            
            </div>
        </>
    )
}