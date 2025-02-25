// App.jsx
import { useState } from "react";
import "./Signup.css";
import backgroundImage from "../../../assets/home1-img1.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";

function Signup() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(103, 183, 115, 0.95), rgba(103, 183, 115, 0.95)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay", // Helps in making the image more visible
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-main-container">
      <div className="left-signup-container" style={backgroundStyle}>
        <div className="signup-logo">Payyed</div>
        <div className="welcome-signup-content">
          <h1>Get Verified!</h1>
          <p>Every day, Payyed makes thousands of customers happy.</p>
        </div>
      </div>

      <div className="right-main-container">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="Name"
                placeholder="Enter Your Name"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button type="submit" id="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/Login" className="login-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
