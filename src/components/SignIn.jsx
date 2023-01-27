import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { login } from "../features/user"
import { loginStatus } from "../features/loginStatus"

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [noUser, setNoUser] = useState("")

  const removeError = () => {
    setTimeout(() => {
      setNoUser("")
    },2000)
  }
  const loginUser = async (e) => {
    e.preventDefault()
    let req = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
    })
    let res = await req.json()
    if (req.ok) {
      dispatch(login(res))
      dispatch(loginStatus({ loggedIn: true}))
      navigate('/profile')
    } else {
      console.log("LOGIN FAILED")
      setNoUser("User Does Not Exist")
      removeError()
    }
  }
  
  return (
    <div className="user-interface-container">
        <div className="signin-container">
          <h1 className="user-form-title">Sign In</h1>
          <div className="sigin-content">
              <form onSubmit={loginUser}>
                <label className="user-form-label">
                  {/* Enter Username: <br/> */}
                  <input type="text" className="user-input" name="username" placeholder="Enter your username..."/>
                  <br/>
                </label>
                <br/>
                <label className="user-form-label">
                  {/* Enter Password: <br/> */}
                  <input type="password" className="user-input" name="password" placeholder="Enter your password..."/>
                  <br/>
                </label>
                <br/>
                <div className="login-error">
                  {noUser}
                </div>
                <br/>
                <input type="submit" value="Login" className="login-btn"/>
              </form>
          </div>
        </div>
        <div className="page-break"></div>
        <div className="no-account-container">
          <div className="no-account-content">
            <div className="no-account-content-header">
            Don't have an account?
            <br/>
            Sign Up Here!
            </div>
            <div className="no-account-content-body">
              <span>🥃 Create your own spirit lists!</span><br/>
              <span className="unfinished">🍸 Rate all spirits you've tried!</span><br/>
              <span>🍹 View spirit statistics!</span><br/>
              <span className="unfinished">🎖 Get rewards based on your activity!</span><br/> <br/>
              <Link to="/signup" className="register-btn" >Register!</Link>
              {/* <button className="register-btn"> 🍻 Register! 🍻 </button> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn