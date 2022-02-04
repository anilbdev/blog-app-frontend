import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="header">
        <h2 className="logo" onClick={() => navigate("/")}>
          Blogs
        </h2>
        <div className="articles">
          <Link
            style={{ fontSize: 20, marginRight: 15, textDecoration: "none" }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ fontSize: 20, marginRight: 15, textDecoration: "none" }}
            to="/articles-list"
          >
            Articles
          </Link>
          <Link
            style={{ fontSize: 20, marginRight: 15, textDecoration: "none" }}
            to="/about"
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
