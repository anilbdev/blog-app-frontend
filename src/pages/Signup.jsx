import React, { useEffect, useState } from "react"
import { validation_signup } from "../api/validation"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Signup.css"

function Signup() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [formErrorValues, setFormErrorValues] = useState({})
  // Flag for submit click
  const [isSubmit, setIsSubmit] = useState(false)
  const navigate = useNavigate()

  //! function for onchange
  const handleOnChange = event => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  //!validation and sending details to server
  const handleSubmit = event => {
    event.preventDefault()
    setFormErrorValues(validation_signup(formValues))
    setIsSubmit(true)
  }

  //! axios sending user details to DB function
  const handleUserDetails = () => {
    axios
      .post("http://localhost:5000/api/register", {
        name: formValues.username,
        email: formValues.email,
        password: formValues.password,
      })
      .then(response => {
        if (response.data.status) {
          alert("Signup Succesfull..Please Login noe")
          navigate("/login")
        }else{
          alert('Try again after some time..!!')
        }
      })
      .catch(err => {
        alert("Try after sometime!!")
      })
  }

  //! useffect calls register api when isSubmit is changed
  useEffect(() => {
    if (Object.keys(formErrorValues).length === 0 && isSubmit) {
      handleUserDetails()
    }
  }, [isSubmit])

  return (
    <div className="signup-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <div className="form-inputs">
          <label htmlFor="username">
            Name
            <input
              name="username"
              type="text"
              id="username"
              value={formValues.username}
              onChange={handleOnChange}
            />
            <p>{formErrorValues.username}</p>
          </label>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              id="email"
              value={formValues.email}
              onChange={handleOnChange}
            />
            <p>{formErrorValues.email}</p>
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              id="password"
              autoComplete="on"
              value={formValues.password}
              onChange={handleOnChange}
            />
            <p>{formErrorValues.password}</p>
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
export default Signup
