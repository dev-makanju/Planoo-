import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="footer-banner">
      <div className="footer-main">
         <div className="banner-design-a"></div>
         <div className="banner-design-b"></div>
         <div className="banner-design-c"></div>
         <div className="banner-design-d"></div>
      </div>
      <div className="footer-main info">
         <div className="wrapper-footer">
            <h1>DownLoad for free</h1>
            <p>Revolutionize your task Achieve your goals, one task at a time. Grab your download and get started</p>
            <div className="wrapp">
               <button className="app-button">
                  App Store
               </button>
               <button className="app-button">
                  Google Store
               </button>
            </div>
         </div>
      </div>
    </div>
      
    <footer>
      <div className="footer-wrapper">
        <div>
          <button className="btn header-logo">
            <div className="header-btn">
              <div className="orange-logo"></div>
              <div className="orange-shade-logo"></div>
            </div>
            <h1>planoo</h1>
          </button>
        </div>
        <nav>
          <ul>
            <h2>Solutions</h2>
            <li>
              <button className="btn-default">Features</button>
            </li>
            <li>
              <button className="btn-default">Features</button>
            </li>
            <li>
              <button className="btn-default">Blog</button>
            </li>
          </ul>
          <ul>
            <h2>Services</h2>
            <li>
              <button className="btn-default">Features</button>
            </li>
            <Link to='/about'>
              <li>
                <button className="btn-default">About</button>
              </li>
            </Link>
            
            <Link to='/pricing'>
              <li>
                <button className="btn-default">Pricing</button>
              </li>
            </Link>
            <Link to='/blog'>
              <li>
                <button className="btn-default">Blog</button>
              </li>
            </Link>
          </ul>
          <ul>
            <h2>Policy</h2>
            <li>
              <button className="btn-default">Privacy Policy</button>
            </li>
            <li>
              <button className="btn-default">Cookie Policy</button>
            </li>
            <li>
              <button className="btn-default">Acceptable Use Policy</button>
            </li>
          </ul>
        </nav>
        <div className="footer-info">
          <h1>Let's Talk</h1>
          <p>hello@planoo.ai</p>
          <p>Black M Square</p>
        </div>
      </div>
      <div class="socials">
        <div>
          <button>
            <span><InstagramIcon/></span>
          </button>
          <button>
            <span><FacebookIcon/></span>
          </button>
          <button>
            <span><XIcon/></span>
          </button>
          <button>
            <span><LinkedInIcon/></span>
          </button>
        </div>
        <p>Odamo. All right reserved &copy; 2023</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
