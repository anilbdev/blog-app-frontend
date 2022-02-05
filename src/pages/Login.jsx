import React, { useEffect, useState } from "react"
import {validation_login} from '../api/validation'
function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const [formErrorValues, setFormErrorValues] = useState({})

  // Flag for submit click
  const [isSubmit, setIsSubmit] = useState(false)

  // function for onchange
  const handleOnChange = event => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  //validation and sending details to server
  const handleSubmit = event => {
    event.preventDefault()
    setFormErrorValues(validation_login(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrorValues).length === 0 && isSubmit){

    }
    
  }, [isSubmit])

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-inputs">
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
              value={formValues.password}
              onChange={handleOnChange}
            />
            <p>{formErrorValues.password}</p>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
