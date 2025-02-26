import React from "react";
import videoKYC from "/assets/service1img1.webp";
import VirtualKYC from "/assets/service1img2.png";
import AadhaarVerification from "/assets/service1img7.jpeg";
import DLValidation from "/assets/service1img6.webp";
import FaceRecognition from "/assets/service1img3.png";
import IndividualVerification from "/assets/service1img4.jpg";
import PANVerification from "/assets/service1img5.webp";



const services = [
  { name: "Video KYC Service", image: videoKYC },
  { name: "Virtual KYC Assistance", image: VirtualKYC },
  { name: "Aadhaar Verification", image: AadhaarVerification },
  { name: "DL Validation", image: DLValidation },
  { name: "Face Recognition", image: FaceRecognition },
  { name: "Individual Verification Service", image: IndividualVerification },
  { name: "PAN Verification Service", image: PANVerification },
];

const Service1 = () => {
  return (
    <div className="moving-cards-container">
      <div className="service1-container">
        <h1>Services</h1>
        <h3>We Deliver the Best Solutions</h3>
      </div>
      
   
    </div>
  );
};

export default Service1;
