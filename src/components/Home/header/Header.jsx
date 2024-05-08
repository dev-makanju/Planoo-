import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

const Header = () => {
  const toggleNav = () => {

  }

  return (
   <header>
      <button className="btn header-logo">
        <div className="header-btn">
          <div className="orange-logo"></div>
          <div className="orange-shade-logo"></div>
        </div>
        <h1>planoo</h1>
      </button>
      <nav>
        <ul class="menu-container">
          <button class="btn">
            <li>Features</li>
          </button>
          <button class="btn">
            <li>Pricing</li>
          </button>
          <button class="btn">
            <li>About</li>
          </button>
          <button class="btn">
            <li>Blog</li>
          </button>
        </ul>
      </nav>
      <div className="burger-click">
        <div>
          <Link to='/login'>
            <button  class="reg-btn">Sign In</button>
          </Link>
        </div>
        <div onClick={()=> toggleNav} className="menu">
          <MenuIcon/>
        </div>
      </div>
   </header>
  )
};

export default Header;
