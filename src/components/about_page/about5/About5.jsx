import React from "react";
import "./About5.css";

// Import logos from assets
import themeforestLogo from "/assets/themeforestabout5img1.png";
import envatoLogo from "/assets/envatoabout5img2.png";
import dribbbleLogo from "/assets/dribbbleabout5img3.png";
import codecanyonLogo from "/assets/codecanyonabout5img4.png";
import graphicriverLogo from "/assets/graphicriverabout5img5.png";
import audiojungleLogo from "/assets/audiojungleabout5img6.png";
import activedenLogo from "/assets/activedenabout5img7.png";
import threedOceanLogo from "/assets/3doccanabout5img8.png"; // ✅ Fixed path
import photoduneLogo from "/assets/photoduneabout5img9.png";
import videohiveLogo from "/assets/videohiveabout5img10.jpeg";
import behanceLogo from "/assets/Behanceabout5img11.png";
import frosterr from "/assets/frosterrsabout5img12.png";


const About5 = () => {
  const investors = [
    { name: "themeforest", url: "https://themeforest.net", logo: themeforestLogo },
    { name: "envato", url: "https://envato.com", logo: envatoLogo },
    { name: "dribbble", url: "https://dribbble.com", logo: dribbbleLogo },
    { name: "codecanyon", url: "https://codecanyon.net", logo: codecanyonLogo },
    { name: "graphicriver", url: "https://graphicriver.net", logo: graphicriverLogo },
    { name: "audiojungle", url: "https://audiojungle.net", logo: audiojungleLogo },
    { name: "activeden", url: "https://activeden.net", logo: activedenLogo },
    { name: "3doccan", url: "https://3docean.net", logo: threedOceanLogo },
    { name: "photodune", url: "https://photodune.net", logo: photoduneLogo },
    { name: "videohive", url: "https://videohive.net", logo: videohiveLogo },
    { name: "Behance", url: "https://www.behance.net", logo: behanceLogo },
    { name: "frosterr", url: "https://www.behance.net", logo: frosterr },

  ];

  return (
    <section className="investors-container">
      <h1>Our Investors</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="investors-grid">
        {investors.map((investor, index) => (
          <a
            key={index}
            href={investor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="investor-item"
          >
            <img src={investor.logo} alt={investor.name} className="investor-logo" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default About5;