import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../components/Home/Home";
import About from "../../components/about_page/About";
import Contact from "../../components/contact/Contact";
import Services from "../../components/service/Service";
import Login from "../../components/loginsignup_page/login_page/Login";
import Signup from "../../components/loginsignup_page/signup_page/Signup";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";

function ReactRouter() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default ReactRouter;