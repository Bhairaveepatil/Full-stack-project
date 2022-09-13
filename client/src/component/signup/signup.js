import React, { useState } from "react"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'




const Signup= (props) => {

  let navigate=useNavigate()

  const [data, setdata]=useState({
    email:"",
    password:"",
    cpassword:""
})

const handlesubmit = (e) => {
  e.preventDefault()
  axios({
      method:"POST",
      url:'http://localhost:3003/signup',
      data:data
  }).then((user)=> {
          window.alert(user.data)
          navigate("/")
  }).catch((err)=> {
      window.alert(err.response.data)
  })
}



  return (
    <div className="Auth-form-container">
       
      <form className="Auth-form" onSubmit={handlesubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?
            <NavLink to="/"> 
            <span className="link-primary">
              Sign In
            </span>
            </NavLink>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="email"
              onChange={(e)=> {
                setdata({...data,email:e.target.value})
            }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="password"
              onChange={(e)=> {
                setdata({...data,password:e.target.value})
            }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              name="cpassword"
              onChange={(e)=> {
                setdata({...data,cpassword:e.target.value})
            }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot password?
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
