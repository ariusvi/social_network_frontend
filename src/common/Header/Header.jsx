import './Header.css'
import { CustomLink } from '../CustomLink/CustomLink'
import { useNavigate } from 'react-router-dom'


export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <div className='headerDesign'>
            <CustomLink title="Home" destination="/" />
            <CustomLink title={"Login"} destination={"/login"} />
            <CustomLink title={"Register"} destination={"/register"} />
        </div>
    )
}