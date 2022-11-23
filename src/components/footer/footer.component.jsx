import React from "react";

// ICONS
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// LOGO
import logo from "../../assets/logo/Logo.svg";

// STYLES
import "./footer.style.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--left">
          <div className="logo-container">
            <img src={logo} alt="logo " />
          </div>
          <p className="description">
            Filter’s main objective is to transform waste into resources, they
            are also driven to create awareness among the mass people about
            proper waste management. Filter envisions to keep the environment
            clean and prevent pollution. They aim to spread greening and create
            a positive impact on the environment through plantation and rooftop
            gardening.
          </p>
        </div>
        <div className="vl"></div>
        <div className="footer__container--right">
          <div className="social-media">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTwitter />
          </div>
          <div className="contact">
            <h4>contact</h4>
            <p>Plot: 00 (6th Floor), Block: 0</p>
            <p>Road: 00, Baridhara, Dhaka - 1200</p>
            <p>Bangladesh.</p>
            <p>info@projectdeliveryappa.com</p>
          </div>
        </div>
      </div>
      <div className="footer__copywrite">
        <span>© FILTER - 2022</span>
        <span>Crafted with JoYY by YY Design</span>
      </div>
    </div>
  );
}

export default Footer;
