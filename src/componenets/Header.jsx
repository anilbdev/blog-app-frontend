import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return <div>
      <nav className="header">
          <h2 className="logo">Blogs</h2>
          <div className="articles">
              <Link style={{fontSize:20,marginRight:15,textDecoration:'none'}}  to='/'>Home</Link>
              <Link style={{fontSize:20,marginRight:15,textDecoration:'none'}} to='/about'>About</Link>
              <Link style={{fontSize:20,marginRight:15,textDecoration:'none'}}  to='/articles-list'>Articles</Link>
          </div>
      </nav>
  </div>;
}

export default Header;
