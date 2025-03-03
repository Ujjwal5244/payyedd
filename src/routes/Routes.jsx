import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/about_page/About";
import Contact from "../components/contact/Contact";
import Service from "../components/service/Service";
import Login from "../components/loginsignup_page/login_page/Login";
import Signup from "../components/loginsignup_page/signup_page/Signup";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import VideoKYCpage from "../pages/page1/VideoKYCpage";
import VirtualKYCpage from "../pages/page2/VirtualKYCpage";
import AdharVerifpage from "../pages/page3/AdharVerifpage";
import DlValidpage from "../pages/page4/DlValidpage";
import FaceRecognpage from "../pages/page5/FaceRecognpage";
import IndividualVerifpage from "../pages/page6/IndividualVerifpage";
import PanVerifpage from "../pages/page7/PanVerifpage";

function ReactRouter() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/Login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/service/VideoKYC" element={<VideoKYCpage />} />
        <Route
          path="/service/VirtualKycAssistance"
          element={<VirtualKYCpage />}
        />
        <Route
          path="/service/AadhaarVerification"
          element={<AdharVerifpage />}
        />
        <Route path="/service/DlValidation" element={<DlValidpage />} />
        <Route path="/service/FaceRecognition" element={<FaceRecognpage />} />
        <Route
          path="/service/IndividualVerificationService"
          element={<IndividualVerifpage />}
        />
        <Route
          path="/service/PanVerificationService"
          element={<PanVerifpage />}
        />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default ReactRouter;
