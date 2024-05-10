import {useState} from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleNav = () => {
    setIsActive(!isActive)
  }

  return (
   <header>
      <div className="header"> 
          <Link to='/' className="logo-underline">
            <button className="btn header-logo">
              <div className="header-btn">
                <div className="orange-logo"></div>
                <div className="orange-shade-logo"></div>
              </div>
              <h1>planoo</h1>
            </button>
          </Link>   
          <nav>
            <ul className="menu-container">
              <button className="btn">
                <li>Features</li>
              </button>
              <Link to='/pricing'>
                <button className="btn">
                  <li>Pricing</li>
                </button>
              </Link>
              <Link to='/about'>
                <button className="btn">
                  <li>About</li>
                </button>
              </Link>
              <Link to='/blog'>
                <button className="btn">
                  <li>Blog</li>
                </button>
              </Link>
            </ul>
          </nav>
          <div className="burger-click">
            <div>
              <Link to='/login'>
                <button  className="reg-btn">Sign In</button>
              </Link>
            </div>
            {!isActive && (
              <div onClick={()=> toggleNav()} className="menu">
                <MenuIcon/>
              </div>
            )}
            { isActive && (
               <div onClick={()=> toggleNav()} className="menu">
                <CloseIcon/>
              </div>
            )}
            
          </div>
      </div>
      <div className="is-mobile ">
        <nav>
            <ul className={`is-mobile-menu ${isActive && `open`}`}>
              <button className="btn">
                <li>Features</li>
              </button>
              <Link to='/pricing'>
                <button className="btn">
                  <li>Pricing</li>
                </button>
              </Link>
              <Link to='/about'>
                <button className="btn">
                  <li>About</li>
                </button>
              </Link>
              <Link to='/blog'>
                <button className="btn">
                  <li>Blog</li>
                </button>
              </Link>
            </ul>
          </nav>
      </div>
   </header>
  )
};

export default Header;
