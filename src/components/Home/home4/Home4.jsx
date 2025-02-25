// src/components/PayyedSection.jsx
import React from "react";
import "./Home4.css"; // Import the CSS file
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Home4 = () => {
  return (
    <div className="payyed-container">
      <h2>What can you do with Payyed?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="features-grid">
        <div className="feature">
          <div className='home4-svg'>
          <FaArrowUpRightFromSquare />
          </div>
          <h3 id='card-payyedd'>Send Money</h3>
        </div> 
        <div className="feature">
        <div className='home4-svg'>
          <FaCheckSquare />
          </div>
          <h3 id='card-payyedd'>Receive Money</h3>
        </div>
        <div className="feature">
        <div className='home4-svg'>
          <FaUserFriends />
          </div>
          <h3 id='card-payyedd'>Pay a Friend</h3>
        </div>
        <div className="feature">
        <div className='home4-svg'>
          <FaShoppingBag />
          </div>
          <h3 id='card-payyedd'>Online Shopping</h3>
        </div>
      </div>
      <a href="#" className="see-more">
        See more you can do › 
      </a>
    </div>
  );
};

export default Home4;
