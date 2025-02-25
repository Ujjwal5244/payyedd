import React from "react";
import "./Contact2.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact2 = () => {
  return (
    <div className="contact-container">
      {/* Contact Info Cards */}
      <div className="contact-grid">
        {/* Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Payyed Inc.</h3>
          <p>4th Floor, Plot No.22, Above Public Park</p>
          <p>145 Murphy Canyon Rd.</p>
          <p>Suite 100-18, San Diego CA 2028</p>
        </div>

        {/* Telephone */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Telephone</h3>
          <p>(+060) 989980098</p>
          <p>(+060) 889880088</p>
        </div>

        {/* Business Inquiries */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Business Inquiries</h3>
          <p>info@payyed.com</p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <h2>Get in touch</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        
        {/* Social Icons */}
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
          <FaLinkedin />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Contact2;