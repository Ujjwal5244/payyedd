import React from "react";
import "./Home5.css";
import { FaCheck } from "react-icons/fa";
// import { FaPlay } from "react-icons/fa6";
import MyModal from "../../modal/modal";
import { useState } from "react";
import thumbnail from "/assets/buussinessimg.webp"; // Replace with actual image path

const HowItWorks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="how-it-works">
      <div className="container">
        {/* Video/Image Section */}
        <div
          className="video-container"
          onClick={() => setIsOpen(true)}
          style={{
            cursor: "pointer",
            position: "relative",
            display: "inline-block",
          }}
        >
          <img
            src={thumbnail}
            alt="How it works"
            className="video-thumbnail-img"
          />
          {/* Play Button */}
          <button
            id="vedio-button"
            style={{
              position: "absolute",
              top: "50%",
              marginLeft: "-80px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0, 0, 0, 0.6)",
              border: "none",
              borderRadius: "50%",
              color: "white",
              padding: "10px 15px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ▶
          </button>
          <MyModal
            key={isOpen ? "open" : "closed"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <h2>How does it work?</h2>
          <p>
            Quidam lisque persius interesset his et, in quot quidam persequeris
            essent possim iriure. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>

          {/* Bullet Points */}
          <ul>
            <li>
              <FaCheck className="icon" /> Sign Up Account
            </li>
            <li>
              <FaCheck className="icon" /> Receive & Send Payments worldwide
            </li>
            <li>
              <FaCheck className="icon" /> Funds transfer to local bank account
            </li>
          </ul>

          {/* Call to Action Button */}
          <button id="cta-button">Open a Free Account</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
