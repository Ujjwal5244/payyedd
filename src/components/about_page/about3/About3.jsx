import React from "react";
import './About3.css'
import about3img1 from "/assets/about3img1.jpeg"; // ✅ Import image
import about3img2 from "/assets/about3img2.webp"; // ✅ Import image

const About3 = () => {
  return (
    <div className="main-about3">
      <div className="about3-container1">
        <div className="about3-img1">
          <img src={about3img1} alt="" className="src" />
        </div>
        <div className="about3-img2">
          <img src={about3img2} alt="" className="src" />
        </div>
      </div>

      <div className="about3-container2">
        <h1>Our Values</h1>
        <h3>Our Mission</h3>
        <p>
          Quidam lisque persius interesset his et, in quot quidam persequeris
          vim, ad mea essent possim iriure. Lisque persius interesset his et, in
          quot quidam persequeris vim, ad mea essent possim iriure. lisque
          persius interesset his et, in quot quidam mea essent possim iriure.
        </p>
        <h3>Our Vision</h3>
        <p>
          Persequeris quidam lisque persius interesset his et, in quot quidam
          vim, ad mea essent possim iriure. Lisque persius interesset his et, in
          quot quidam persequeris vim, ad mea essent possim iriure. lisque
          persius interesset his et, in quot quidam.
        </p>
        <h3>Our Goal</h3>
        <p>
          Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure. Lisque persius interesset his et, in quot
          quidam persequeris vim, ad mea essent possim iriure. lisque persius
          interesset his et, in quot quidam mea essent possim iriure.
        </p>
      </div>
    </div>
  );
};

export default About3;
