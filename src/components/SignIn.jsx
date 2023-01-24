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
          <div className="no-account-content">
            Don't have an account?
            <br/>
            Sign Up Here!
            <div>
              <span>Create your own spirit lists!</span><br/>
              <span>Rate all spirits you've tried!</span><br/>
              <span>View spirit statistics!</span><br/>
              <span>Get rewards based on your activity!</span><br/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn