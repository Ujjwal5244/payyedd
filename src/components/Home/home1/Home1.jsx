import React from "react";
import "./Home1.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import image1 from "../../../assets/home1-img1.jpg";
import image2 from "../../../assets/home1-img2.jpg";

const slides = [
  {
    image: image1,
    title: "Send & Receive Money",
    description:
      "Quickly and easily send, receive and request money online with Payyed. Over 180 countries and 120 currencies supported.",
    button1: "Open a Free Account",
    button2: "See How it Works",
  },
  {
    image: image2,
    title: "Trusted by more than 50,000 businesses worldwide.",
    description: "Over 180 countries and 120 currencies supported.",
    button1: "Get started for free",
    button2: "Watch Demo",
  },
];

const Home1 = () => {
  console.log("owl-dot",document.getElementsByClassName("owl-dot"))
  console.log("owl-dots",document.getElementsByClassName("owl-dots"))
  return (
    <div className="hero-container">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplay
        autoplayTimeout={5000} // Set autoplay speed to 5 seconds
        items={1} // Show only one item at a time
        // dots={true}
        
        nav
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Hero Text */}
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>

              {/* Hero Buttons */}
              <div className="hero-buttons">
                <button className="get-started-btn">{slide.button1}</button>
                <button className="watch-demo-btn">
                  <div className="play-icon">▶</div> <div className={`${index === 0 ? "sld-btn1":"sld-btn2"}`}>{slide.button2}</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Home1;
