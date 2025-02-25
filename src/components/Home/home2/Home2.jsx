import React from "react";
import "./Home2.css";
import { TbHandFinger } from "react-icons/tb";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Home2 = () => {
  return (
    <div className="home2-container bg-red-500">
      <div className="heading bg-red-500">
        <h1>Why should you choose Payyed?</h1>
        <p>
          Here’s Top 4 reasons why using a Payyed account for managing your
          money.
        </p>
      </div>
      <div className="home2-container2">
        <div className="easy-to-use">
          <TbHandFinger />
          <h2>Easy to Use</h2>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim,
            admea essent possim iriure.
          </p>
          <a href="#" id="learn-more-container2">
            Learn more ›
          </a>
        </div>
        <div className="Faster-Payments">
          <TiArrowForwardOutline />
          <h2>Faster Payments</h2>
          <p>
            Persius interesset his et, in quot quidam persequeris vim, ad mea
            essent possim iriure.
          </p>
          <a href="#" id="learn-more-container2">
            Learn more ›
          </a>
        </div>
        <div className="Lower-Fees">
          <FaDollarSign />
          <h2>Lower Fees</h2>
          <p>
            Essent lisque persius interesset his et, in quot quidam persequeris
            vim, ad mea essent possim iriure.
          </p>
          <a href="#" id="learn-more-container2">
            Learn more ›
          </a>
        </div>
        <div className="secure">
          <FaLock />
          <h2>100% secure</h2>
          <p>
            Quidam lisque persius interesset his et, in quot quidam persequeris
            vim, ad mea essent possim iriure.
          </p>
          <a href="#" id="learn-more-container2">
            Learn more ›
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home2;
