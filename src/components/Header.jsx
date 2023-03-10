import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { loginStatus } from "../features/loginStatus"
import { logout } from "../features/user"
import { resetList } from "../features/drinklist"

const Header = () => {
    const checkLogin = useSelector((state) => state.status.value)
    const currentUser = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutUser = async () => {
        let req = await fetch(`http://localhost:8000/update_user/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                logged_in: 0
            })
        })
        if (req.ok) {
            dispatch(loginStatus({ loggedIn: false}))
            dispatch(logout())
            dispatch(resetList())
            navigate('/')
        }
    }
    return (
        <div className="header">
            <div className="logo-title">
                <Link to="/" id="logo">
                    <img src="https://cdn.discordapp.com/attachments/751140341348040826/1068297686501036052/phase-4-logo.png" alt="Our Sick ASS LOGO" className="logo-image"/>
                </Link>
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