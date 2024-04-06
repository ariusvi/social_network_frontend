import './Header.css'
import { CustomLink } from '../CustomLink/CustomLink'
import { useState } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { userData, logout } from '../../app/slices/userSlice';
import { useEffect } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';


export const Header = () => {

    //redux to read mode
    const reduxUser = useSelector(userData);

    //redux to write mode
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(reduxUser, "credenciales pasaporte")
    }, [reduxUser])

    const [criteria, setCriteria] = useState("");

    const searchHandler = (e) => {
        setCriteria(e.target.value);
    };


    return (
        <div className='headerDesign'>
            <CustomInput 
            className="searchInput" 
            type="text" 
            name="search" 
            value={criteria || ""}
            placeholder="Search..."
            changeEmit={searchHandler}
            />
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