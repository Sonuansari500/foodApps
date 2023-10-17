import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header__topbar">
        <img src="/assets/header/topbar/info.png" alt="" />
        <img src="/assets/header/topbar/Social.png" alt="" />
      </div>
      <div className="header__navbar">
        <img
          className="header__navbar__brand__img"
          src="/assets/header/header/logo.png"
          alt=""
        />
        <div className="header__navbar__brand__menus">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contacts</a>
          <a href="">Page</a>
        </div>
        <button className="header__navbar__button">Book a Table</button>
      </div>
    </header>
  );
};

export default Header;
