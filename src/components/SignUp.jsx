import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { resetSignUpForm } from "../features/clearsignup"
import { login } from "../features/user"
import { loginStatus } from "../features/loginStatus"

const SignUp = () => {
  const defaultForm = useSelector((state) => state.clearsignup.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch("http://localhost:8000/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        age: e.target.age.value,
        location: e.target.location.value,
        logged_in: true
      })
    })
    let res = await req.json()
    if (req.ok) {
      dispatch(resetSignUpForm())
      dispatch(login(res))
      dispatch(loginStatus(true))
      navigate('/profile')
    } else {
      console.log("AN ERROR OCCURED")
    }
  }
  return (
    <div className="user-interface-container">
      <div className="signup-container">
        <h1 className="user-form-title">Sign Up</h1>
        {defaultForm.first_name}
        <div className="sigup-content">
          <form onSubmit={handleSubmit}>
            <div className="name-input-container">
              <label className="user-form-label">
                Enter First Name: <br/>
                <input type="text" name="first_name" className="user-input" defaultValue={defaultForm.first_name} placeholder="Enter your username..." />
              </label>
              <label className="user-form-label">
                Enter Last Name: <br/>
                <input type="text" name="last_name" className="user-input" defaultValue={defaultForm.last_name} placeholder="Enter your password..." />
                <br />
              </label>
            </div>
            <br />
            <label >
              Create a Username: <br/>
              <input type="text" name="username" className="user-input" defaultValue={defaultForm.username} />
            </label>
            <br/>
            <br/>
            <label >
              Enter Email Adress: <br/>
              <input type="text" name="email" className="user-input" defaultValue={defaultForm.email}/>
            </label>
            <br />
            <br />
            <label >
              What is your age? <br />
              <input type="text" name="age" className="user-input" defaultValue={defaultForm.age}/>
            </label>
            <br/>
            <br/>
            <label >
              What state do you live in? <br />
              <input type="text" name="location" className="user-input" defaultValue={defaultForm.location}/>
            </label>
            <br/>
            <br/>
            <label >
              Create a password: <br />
              <input type="password" name="password" className="user-input" defaultValue={defaultForm.password}/>
            </label>
            <br/>
            <input type="submit" value="Create Account" className="login-btn"/>
            <br/>
          </form>
          <button onClick={() => { dispatch(resetSignUpForm()) }}>Clear Form</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp