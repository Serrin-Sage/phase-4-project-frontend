const SignIn = () => {
  return (
    <div className="user-interface-container">
        <div className="signin-container">
          <h1 className="user-form-title">Sign In</h1>
          <div className="sigin-content">
              <form>
                <label className="user-form-label">
                  {/* Enter Username: <br/> */}
                  <input type="text" className="user-input" placeholder="Enter your username..."/>
                  <br/>
                </label>
                <br/>
                <label className="user-form-label">
                  {/* Enter Password: <br/> */}
                  <input type="text" className="user-input" placeholder="Enter your password..."/>
                  <br/>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Login" className="login-btn"/>
              </form>
          </div>
        </div>
        <div className="page-break"></div>
        <div className="no-account-container">
          <div>
            Don't have an account?
            <br/>
            Sign Up Here!
          </div>
        </div>
    </div>
  )
}

export default SignIn