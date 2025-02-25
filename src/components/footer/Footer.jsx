import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footers">
      <div className="footer1">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/support">Support</a>
          <a href="/help">Help</a>
          <a href="/careers">Careers</a>
          <a href="/affiliate">Affiliate</a>
          <a href="/fees">Fees</a>
        </div>
        <div className="footer1-logo-links">
          <div className="footer1-logo-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
              </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="social-icon" />

            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="social-icon" />
              </a>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>Copyright © 2022 <span id='footer-copyright'>Payyed.</span> All Rights Reserved.</p>
        <div className="footer-legal">
          <a href="/security">Security</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
