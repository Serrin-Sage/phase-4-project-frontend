import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <div className="logo-title">
                <Link to="/" className="link-text" id="logo">LOGO/NAME</Link>
            </div>
            <div>
                
            </div>
            <div className="link-container">
                <Link to="/signup" className="link-text" id="signup-text" >Register</Link>
                <Link to="/signin" className="link-text" id="signin-text">Login</Link>
            </div>
        </div>
    )
}

export default Header