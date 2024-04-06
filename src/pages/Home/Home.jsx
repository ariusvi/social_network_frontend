import './Home.css'

import React, { useEffect } from "react";

import {useSelector} from 'react-redux';
import { searchData } from '../../app/slices/searchSlice';


export const Home = () => { 

    //redux to read mode 

    const searchRedux = useSelector(searchData);

    useEffect(() => {
        console.log(searchRedux)
    }, [searchRedux]); 

    return (
        <>
            <div className='homeDesign'>
                soy el home
            </div>
        </>
    )
}

