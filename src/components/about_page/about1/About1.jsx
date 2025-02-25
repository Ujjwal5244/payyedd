import React from "react";
import aboutImage from "../../../assets/aboutimage1.jpg"; // ✅ Import image
import "./About1.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import MyModal from "../../modal/modal";
import { useState } from "react";

const About1 = () => {
    let [isOpen, setIsOpen] = useState(false)
 
  console.log("isOpen",isOpen)
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplay
        autoplayTimeout={5000} // Set autoplay speed to 5 seconds
        items={1} // Show only one item at a time
        dots={false}

        nav
      >
        <div
          className="hero-about1"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${aboutImage})`,
          }}
        >
          <div className="hero-content-about1">
            <h1>About Payyed</h1>
            <p>
              Our mission is to help you save on transfer fees and exchange
              rates!
            </p>
            <div className="button-group-about1">
              <button className="btn primary">Open a Free Account</button>

              <button className="btn secondary" onClick={()=>{setIsOpen(true)
                // console.log("opened",)
              }}>▶ See How it Works</button>


            </div>
          </div>
        </div>
      </OwlCarousel>
  <MyModal key={isOpen ? "open" : "closed"} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default About1;
