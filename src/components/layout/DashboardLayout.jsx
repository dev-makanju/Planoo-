import React, { useState } from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const DashboardLayout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dash-container">
      <div className={`dash-layout menu-bar ${isMenuOpen ? 'open' : ''}`}>
        <button className="btn header-logo dash-logo">
          <div className="header-btn">
            <div className="orange-logo"></div>
            <div className="orange-shade-logo"></div>
          </div>
        </button>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <DashboardIcon />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manage-task"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <TaskIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="close-menu" onClick={toggleMenu}>
          <CloseIcon />
        </button>
      </div>
      <div className="dash-layout main-area">
        <div className="main menu-header">
          <button className="burger-menu" onClick={toggleMenu}>
            <MenuIcon />
          </button>
          <div className="location">
            <span>
              <LocationOnIcon />
            </span>
            <h3><span className="onMobile">Lagos,</span>Nigeria</h3>
          </div>
          <ul className="avater">
            <li className="onMobile">Oluwafemi</li>
            <div className="main-wrapper">
              <div className="custom-avater">
                <small>OP</small>
              </div>
              <img className="avater-image" src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt="profileImage" />
            </div>
          </ul>
        </div>
        <div className="main">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
