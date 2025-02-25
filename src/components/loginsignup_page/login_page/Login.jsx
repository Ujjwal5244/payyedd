// App.jsx
import { useState } from "react";
import "./Login.css";
import backgroundImage from "../../../assets/home1-img1.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";

function Login() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(103, 183, 115, 0.95), rgba(103, 183, 115, 0.95)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay", // Helps in making the image more visible
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mainlogin-container">
      <div className="left-panel-container" style={backgroundStyle}>
        <div className="login-logo">Payyed</div>
        <div className="welcome-content">
          <h1>Welcome back!</h1>
          <p>
            We are glad to see you again! Instant deposits, withdrawals &
            payouts trusted by millions worldwide.
          </p>
        </div>
      </div>

      <div className="right-panel-container">
        <div className="form-container">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
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

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                />
                Remember Me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password ?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
