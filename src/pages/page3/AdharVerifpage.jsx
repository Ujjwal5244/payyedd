import React from "react";
import "./AdharVerifpage.css";
import AadhaarVerification from "/assets/service1img7.jpeg";
import nerasoft from "/assets/nerasoft.png";
import { FcGoogle } from "react-icons/fc";
import { FaWhatsappSquare, FaFacebook } from "react-icons/fa";

function AdharVerifpage() {
  return (
    <div className="AdharVerif-container">
      <div className="AdharVerif-head">
        <div className="AdharVerif-leftsection">
          <img src={AadhaarVerification} alt="AdharVerifimg"  />
        </div>

        <div className="AdharVerif-rightsection">
          <h1 className="AdharVerif-maintitle">Aadhaar Verification Service</h1>

          <p className="AdharVerif-modelnumber">Model No: 234REDT</p>

          <div className="AdharVerif-sharesection">
            <p className="AdharVerif-sharetext">Share Your Product:</p>
            <div className="AdharVerif-social-icons">
              <button className="social-btn google">
                <FcGoogle />
              </button>
              <button className="social-btn whatsapp">
                <FaWhatsappSquare />
              </button>
              <button className="social-btn facebook">
                <FaFacebook />
              </button>
            </div>
          </div>

          <div className="AdharVerif-availablesection">
            <p className="available-text">Available on:</p>
            <div className="platform-buttons">
              <img src={nerasoft} alt="nera-soft" />
            </div>
          </div>

          <div className="AdharVerif-actionbuttons">
            <button className="enquiry-btn">Enquiry Now</button>
            <button className="quote-btn">Service Quote</button>
          </div>
        </div>
      </div>

      <div className="AdharVerif-serviceinfo">
        <h2 className="AdharVerif-section-title">Service Information</h2>
        <p className="AdharVerif-infotext">
          Identiplus presents a secure, efficient Video KYC Service enabling
          businesses to establish the identity of customers remotely, through
          live video calls, making it possible to verify real-time face and
          documents for smooth onboardings.
        </p>
        <h2 className="AdharVerif-section-title">Service Description</h2>
        <p className="AdharVerif-infotext">
          Our Video KYC solution integrates video streaming with the upload of
          documents to authenticate a customer's identity. This helps in
          real-time compliance with the KYC rules while offering user-friendly
          and secure experience, and hence, well-suited for sectors such as
          banking, finance, and e-commerce.
        </p>
        <h2 className="AdharVerif-section-title">Service Benefits</h2>
        <ul>
          <li>
            Instant Verification: Video calling for real-time identity
            verification
          </li>
          <li>
            Enhanced Security: Secure and fraud-proof visual checks and document
            validation
          </li>
          <li>
            Comfortable and Remote: No requirement for in-person meetings for
            the purpose of conducting KYC verifications
          </li>
          <li>
            Compliance with Regulatory Requirements: KYC complies with all the
            legal requirements while offering complete security
          </li>
          <li>
            Cost-Effective: Overheads and manual processing costs are minimized
            because the verification process is automated.
          </li>
          <li>
            Identiplus Video KYC allows businesses to conduct secure remote
            verifications with efficiency, which provides a seamless and
            compliant customer experience.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdharVerifpage;
