import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import AccountMenu from "./AccountMenu"
import LoginIcon from "@mui/icons-material/Login"
import { useNavigate } from "react-router-dom"




const HeaderBar = () => {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const navigate = useNavigate()



  return (
    <AppBar
      sx={{ backgroundColor: "#207398", height: "70px" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexGrow: 1 }}
          >
            Blogs
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "center" },
            }}
          >
            Blogs
          </Typography>

          {loggedIn ? (
            <AccountMenu/>
          ) : (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default HeaderBar
