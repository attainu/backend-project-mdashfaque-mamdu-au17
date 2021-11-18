import React from 'react';

import './Navbar.css';

const NavBar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>G</span>rocery
            <span>B</span>azar
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a className="header-section" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="header-section" href="/About">
                About Us
              </a>
            </li>
            <li>
              <a className="header-section" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="login">
          <ul>
            <li>
              <a className="header-section" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="header-section" href="/signUp">
                SignUp
              </a>
            </li>
          </ul>
        </div>
        <div className="Cart">
          <ul>
            <li>
              <a className="header-section" href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
