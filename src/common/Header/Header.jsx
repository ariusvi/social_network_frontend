import './Header.css'
import { CustomLink } from '../CustomLink/CustomLink'
import { useNavigate } from 'react-router-dom'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { userData, logout } from '../../app/slices/userSlice';
import { useEffect } from 'react';


export const Header = () => {

    //redux to read mode
    const reduxUser = useSelector(userData);

    //redux to write mode
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(reduxUser, "credenciales pasaporte")
    }, [reduxUser])

    const navigate = useNavigate();

    return (
        <div className='headerDesign'>
            <CustomLink title="Home" destination="/" />
            {reduxUser?.credentials?.token
                ? (
                    <>
                        <CustomLink title={reduxUser?.credentials?.user?.nickname} destination="/profile" />
                        <div className='outDesign' onClick={() => dispatch(logout({ credentials: "" }))}>log-out</div>
                    </>
                )
                : (
                    <>
                        <CustomLink title="Login" destination="/login" />
                        <CustomLink title="Register" destination="/register" />
                    </>
                )}
            {/*             
            <CustomLink title={"Login"} destination={"/login"} />
            <CustomLink title={"Register"} destination={"/register"} /> */}
        </div>
    )
}