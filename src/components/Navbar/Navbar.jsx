import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import proFileIcon from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="" className="icons" />
        <div className="profiles">
          <img src={proFileIcon} alt="" className="profile " />
          <img src={caretIcon} alt="" />
          <div className="profile-dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
