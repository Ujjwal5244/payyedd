import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home6.css';

const testimonials = [
  {
    quote: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "Patrick Cary",
    role: "Freelancer from USA" 
  },
  {
    quote: "Fast easy to use transfers to a different currency. Much better value that the banks.",
    name: " Mortel",
    role: "Online Retail"
  },
  {
    quote: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "De Mortel",
    role: "Freelancer from USA"
  },
  {
    quote: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "Alex carey",
    role: "Online Retail"
  },
  {
    quote: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "David",
    role: "Freelancer from USA"
  },
  {
    quote: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "William",
    role: "Online Retail"
  },
];

const TestimonialCarousel = () => {
  const options = {
    items: 2,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true, // Enable navigation arrows
    navText: [
      "<div class='custom-prev-home6'>‹</div>", // Left Arrow with class
      "<div class='custom-next-home6'>›</div>"  // Right Arrow with class
    ],
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  };

  return (
    <div className="testimonial-section">
      <h2>What people are saying about Payyed</h2>
      <p className="subtitle">A payments experience people love to talk about</p>
      
      <OwlCarousel className="owl-theme" {...options}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="quote">{testimonial.quote}</p>
            <div className="author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>

      <div className="see-more">
        <a href="#">See more people review <span>›</span></a>
      </div>
    </div>
  );
};

export default TestimonialCarousel;