import './Header.css'
import { CustomLink } from '../CustomLink/CustomLink'
import { useState } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { userData, logout } from '../../app/slices/userSlice';
import { useEffect } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';
import { updateSearch } from '../../app/slices/searchSlice';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

    //redirect user when logout to home
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout({ credentials: "" }));
        navigate('/home');
    };


    //redux to read mode
    const reduxUser = useSelector(userData);

    //redux to write mode
    const dispatch = useDispatch();

    useEffect(() => {
    }, [reduxUser])

    const [criteria, setCriteria] = useState("");

    const searchHandler = (e) => {
        setCriteria(e.target.value);
    };

    useEffect(() => {
        if (criteria !== "") {
            dispatch(updateSearch(criteria));
        }
    }
        , [criteria])


    return (
        <div className='headerDesign'>
            {/* <CustomInput 
            className="searchInput" 
            type="text" 
            name="search" 
            value={criteria || ""}
            placeholder="Search..."
            changeEmit={searchHandler}
            /> */}
            <CustomLink title="Home" destination="/" />
            {reduxUser?.credentials?.token
                ? (
                    <>
                        <CustomLink title={reduxUser?.credentials?.user?.nickname} destination="/profile" />
                        <div className='outDesign' onClick={handleLogout}>log-out</div>
                    </>
                )
                : (
                    <>
                        <CustomLink title="Login" destination="/login" />
                        <CustomLink title="Register" destination="/register" />
                    </>
                )}
        </div>
    )
}