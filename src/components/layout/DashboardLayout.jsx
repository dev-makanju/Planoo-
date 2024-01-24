import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DashboardLayout = (props) => {
  return (
    <div className="dash-container">
      <div className="dash-layout menu-bar">
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
                <DashboardIcon/>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manage-task"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <TaskIcon/>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/planno-ai"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <QuestionAnswerIcon/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dash-layout main-area">
        <div className="main menu-header">
          <div className="location">
             <span>
              <LocationOnIcon/>
             </span>
             <h3>Lagos, Nigeria</h3>
          </div>
          <ul className="avater">
            <li>Oluwafemi</li>
            <div className="main-wrapper">
              <div className="custom-avater">
                <small>OP</small>
              </div>
              <img className="avater-image" src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt="profileImage"/>
            </div>
          </ul>
        </div>
        <div className="main">
          { props.children }
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
