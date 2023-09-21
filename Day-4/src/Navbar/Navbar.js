import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         <div className="img">
            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1695278364/MyGlamm-Logo_1-removebg-preview_wf5r1c.png"></img>
            </div>
            <i className="fas fa-code"></i>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DashBoard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LogOut
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;