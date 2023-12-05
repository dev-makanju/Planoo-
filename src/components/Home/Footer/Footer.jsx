import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
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
            <li>
              <button className="btn-default">About</button>
            </li>
            <li>
              <button className="btn-default">Pricing</button>
            </li>
            <li>
              <button className="btn-default">Blog</button>
            </li>
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
        <div>
          <h1>Let's Talk</h1>
          <p>hello@planoo.ai</p>
          <p>Black M Square</p>
        </div>
      </div>
      <div>
        <div>
          <button>
            <span>F</span>
          </button>
          <button>
            <span>I</span>
          </button>
          <button>
            <span>T</span>
          </button>
          <button>
            <span>In</span>
          </button>
        </div>
        <div>Odamo. All right reserved &copy; 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
