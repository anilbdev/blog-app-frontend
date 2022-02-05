import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import LoginIcon from "@mui/icons-material/Login"
import "./Header.scss"
import "../global.scss"

function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="header">
        <h2 className="logo" onClick={() => navigate("/")}>
          Blogs
        </h2>
        <div className="menu">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E21717",
              "&:hover": {
                backgroundColor: "#f8abab",
              },
            }}
            startIcon={<LoginIcon />}
            onClick={() => {
              navigate("/login")
            }}
          >
            Login
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Header
