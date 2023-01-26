import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { loginStatus } from "../features/loginStatus"
import { logout } from "../features/user"
import { resetList } from "../features/drinklist"

const Header = () => {
    const checkLogin = useSelector((state) => state.status.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutUser = () => {
        dispatch(logout())
        dispatch(loginStatus({ loggedIn: false}))
        dispatch(resetList())
        navigate('/')
    }
    return (
        <div className="header">
            <div className="logo-title">
                <Link to="/" className="link-text" id="logo">LOGO/NAME</Link>
            </div>
            <div>
                
            </div>
            {checkLogin.loggedIn ? 
                <div className="link-container">
                    <Link to="/profile" className="link-text" id="profile-btn">Profile</Link>
                    <div className="link-text" id="logout-btn"onClick={() => logoutUser()}>Logout</div>
                </div> 
                : 
                <div className="link-container">
                    <Link to="/signup" className="link-text" id="signup-text" >Register</Link>
                    <Link to="/signin" className="link-text" id="signin-text">Login</Link>
                </div>
            }
            
        </div>
    )
}

export default Header