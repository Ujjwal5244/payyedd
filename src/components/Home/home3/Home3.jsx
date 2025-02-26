import React from "react";
import "./Home3.css";
import freelancerImg from "/assets/freelancer.webp";
import onlineShoppingImg from "/assets/onlineshoping.webp";
import onlineSellersImg from "/assets/onlineseller.webp";
import affiliateMarketingImg from "/assets/affiliatemarketing.webp";

const services = [
  { image: freelancerImg, title: "Freelancer" },
  { image: onlineShoppingImg, title: "Online Shopping" },
  { image: onlineSellersImg, title: "Online Sellers" },
  { image: affiliateMarketingImg, title: "Affiliate Marketing" },
];

const Home3 = () => {
  return (
    <div className="home3-container">
      <div className="text-section">
        <h1>Payment Solutions for everyone.</h1>
        <p>
          Quidam lisque persius interesset his et, in quot quidam persequeris
          vim, ad mea essent possim iriure. Lisque persius interesset his et,
          in quot quidam persequeris vim, ad mea essent possim iriure. Lisque
          persius interesset his et, in quot quidam mea essent possim iriure.
        </p>
        <a href="#" className="learn-more">
          Find more solution →
        </a>
      </div>
      <div className="grid-section">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-home3-container">
            <img src={service.image} alt={service.title} />
            </div>
            <div className="overlay">
              <p>{service.title}</p>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Home3;