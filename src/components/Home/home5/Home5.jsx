import React, { useState } from "react";
import "./Home5.css";
import { FaCheck } from "react-icons/fa";
import MyModal from "../../modal/modal";
import thumbnail from "/assets/buussinessimg.webp"; // Replace with actual image path

const HowItWorks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="how-it-works">
      {/* Left Part - Video/Image Section */}
      <div className="left">
        <div
          className="video-container"
          onClick={() => setIsOpen(true)}
          style={{ cursor: "pointer", position: "relative", display: "inline-block" }}
        >
          <img src={thumbnail} alt="works" className="video-thumbnail-img" />
          <button id="vedio-button">▶</button>
          <MyModal key={isOpen ? "open" : "closed"} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Right Part - Text Section */}
      <div className="right">
        <div className="text-container">
          <h2>How does it work?</h2>
          <p>
            Quidam lisque persius interesset his et, in quot quidam persequeris
            essent possim iriure. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <ul>
            <li><FaCheck className="icon" /> Sign Up Account</li>
            <li><FaCheck className="icon" /> Receive & Send Payments worldwide</li>
            <li><FaCheck className="icon" /> Funds transfer to local bank account</li>
          </ul>
          <button id="cta-button">Open a Free Account</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
