import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NewPost } from '../NewPost/NewPost';
import { SuperAdmin } from '../SuperAdmin/SuperAdmin';


export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<Navigate to={'/'} replace />} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/newpost' element={<NewPost />} />
                <Route path='/superadmin' element={<SuperAdmin />} />
            </Routes>
        </>
    )
}