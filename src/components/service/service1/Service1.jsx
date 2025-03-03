import React from "react";
import "./Service1.css";
import { InfiniteMovingCardsDemo } from "./infiniteMvDemo";

const Service1 = () => {
  return (
    <section className="service1-container wrapper">
      <div className="service1-header">
        <h1>Services</h1>
        <p>We Delivered Best Solution</p>
      </div>
      <div className="infinitecard-box">
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
};

export default Service1;
