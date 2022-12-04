import React, { useState } from "react";

// LOGO
import logo from "../../assets/logo/Logo.svg";

// ICONS
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// STYLES
import "./header.style.scss";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);
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
        <div className="burger-menu">
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            class={menuOpen ? "burger-btn active" : "burger-btn"}
            width="30"
            height="22"
            viewBox="0 0 40 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect class="burger-btn--1" width="35" height="4" rx="3" ry="3" />
            <rect
              class="burger-btn--2"
              width="35"
              height="4"
              y="10"
              rx="3"
              ry="3"
            />
            <rect
              class="burger-btn--3"
              width="35"
              height="4"
              y="20"
              rx="3"
              ry="3"
            />
          </svg>
        </div>
        <ul className={menuOpen ? "nav open" : "nav"}>
          <div className="bg-blur"></div>
          <li className="nav__item">
            <a
              href="#about"
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#campaigns"
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              Campaigns
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#achievements"
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              Achievements
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
