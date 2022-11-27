import React from "react";

// LOGO
import logo from "../../assets/logo/Logo.svg";

// ICONS
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// STYLES
import "./header.style.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="header__contact">
        <span>
          <FaEnvelope />
          <a href="mailto:info@filter.com">info@filter.com</a>
        </span>
        <span>
          <FaPhoneAlt />
          +88 00113 776655
        </span>
      </div>
      <div className="header__navigation">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Campaigns
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Achievements
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
