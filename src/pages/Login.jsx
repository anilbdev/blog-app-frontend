import React, { useEffect, useState } from "react"
import { validation_login } from "../api/validation"
import axios from "axios"
import Container from "@mui/material/Container"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import TextField from "@mui/material/TextField"
import LoginIcon from "@mui/icons-material/Login"
import Button from "@mui/material/Button"
import { borderRadius } from "@mui/system"

function Login() {
  const [formValues, setFormValues] = useState({
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

  //!validation and sending details to validation-client side
  const handleSubmit = event => {
    event.preventDefault()
    setFormErrorValues(validation_login(formValues))
    setIsSubmit(true)
  }

  //!api checking user credentials
  const handleUserCredentials = () => {
    axios
      .post("http://localhost:5000/api/login", {
        email: formValues.email,
        password: formValues.password,
      })
      .then(response => {
        if (response.data.user) {
          navigate("/")
        } else {
          alert("No user found!!")
          setIsSubmit(false)
        }
      })
  }

  useEffect(() => {
    if (Object.keys(formErrorValues).length === 0 && isSubmit) {
      handleUserCredentials()
    }
  }, [isSubmit])

  return (
    <Box sx={{ backgroundColor: "#207398" }}>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "calc(100vh - 70px)",
          }}
        >
          <Grid item xs={10} md={6}>
            <Paper elevation={4} sx={{ backgroundColor: "#8C8984", borderRadius:5 }}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 300,
                }}
                className="form-container"
                onSubmit={handleSubmit}
              >
                <h2>Login</h2>
                <div className="form-inputs">
                  <TextField
                    error={formErrorValues.email && true}
                    id="standard-error-helper-text"
                    label="Email"
                    helperText={formErrorValues.email || " "}
                    variant="standard"
                    name="email"
                    onChange={handleOnChange}
                    value={formValues.email}
                  />

                  <TextField
                    error={formErrorValues.password && true}
                    id="standard-error-helper-text"
                    label="Password"
                    helperText={formErrorValues.password || " "}
                    variant="standard"
                    name="password"
                    onChange={handleOnChange}
                    value={formValues.password}
                  />
                </div>
                {/* <button type="submit">Login</button> */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#E21717",
                    "&:hover": {
                      backgroundColor: "#f8abab",
                    },
                  }}
                  startIcon={<LoginIcon />}
                  type='submit'
                >
                  Login
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Login
