import React from "react";
import "./Contact1.css";
import { Link } from "react-router-dom";

const Contact1 = () => {
  return (
    <div className="Contact1-container">
      {/* _______header-1________ */}
      <div className="contact1-header">
        <div className="contact1-link">
          <Link to="/">Home</Link>
          <p>
            <span>›</span> Contact Us
          </p>
        </div>
        <h1>Contact Us</h1>
      </div>
    </div>
  );
};

export default Contact1;
