import "./About4.css";
import about4img1 from "/assets/about4img1.jpg";
import about4img2 from "/assets/about4img2.jpg";
import about4img3 from "/assets/about4img3.jpg";
import about4img4 from "/assets/about4img4.jpg";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function About4() {
  const team = [
    {
      name: "Neil Patel",
      role: "CEO & Founder",
      image: about4img1,
    },
    {
      name: "James Maxwell",
      role: "Co-Founder",
      image: about4img2,
    },
    {
      name: "Ruby Clinton",
      role: "Chief Marketing Officer",
      image: about4img3,
    },
    {
      name: "Miky Sheth",
      role: "General Manager",
      image: about4img4,
    },
  ];

  return (
    <div className="container">
      <h1 className="heading">Leadership</h1>
      <p className="subheading">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="teamGrid">
        {team.map((member, index) => (
          <div key={index} className="teamCard">
            <div className="imageWrapper">
              <img src={member.image || "/placeholder.svg"} alt={member.name} />
            </div>
            <h3 className="name">{member.name}</h3>
            <p className="role">{member.role}</p>
            <div className="socialLinks">
              <a href="#" aria-label="Facebook">
                <i className="facebook-icon-about4">
                  {" "}
                  <FaFacebookF />
                </i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="twitter-icon-about4">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" aria-label="Google">
                <i className="google-icon-about4">
                  <FaGoogle />
                </i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About4;
