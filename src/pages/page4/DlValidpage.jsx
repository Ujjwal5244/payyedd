import React from "react";
import "./DlValidpage.css";
import DLValidation from "/assets/service1img6.webp";
import nerasoft from "/assets/nerasoft.png";
import { FcGoogle } from "react-icons/fc";
import { FaWhatsappSquare, FaFacebook } from "react-icons/fa";

function DlValidpage() {
  return (
    <div className="DLValid-container">
      <div className="DLValid-head">
        <div className="DLValid-leftsection">
          <img src={DLValidation} alt="DLValidimg" />
        </div>

        <div className="DLValid-rightsection">
          <h1 className="DLValid-maintitle">DL Validation Service</h1>

          <p className="DLValid-modelnumber">Model No: 234REDT</p>

          <div className="DLValid-sharesection">
            <p className="DLValid-sharetext">Share Your Product:</p>
            <div className="DLValid-social-icons">
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

          <div className="DLValid-availablesection">
            <p className="available-text">Available on:</p>
            <div className="platform-buttons">
              <img src={nerasoft} alt="nera-soft" />
            </div>
          </div>

          <div className="DLValid-actionbuttons">
            <button className="enquiry-btn">Enquiry Now</button>
            <button className="quote-btn">Service Quote</button>
          </div>
        </div>
      </div>

      <div className="DLValid-serviceinfo">
        <h2 className="DLValid-section-title">Service Information</h2>
        <p className="DLValid-infotext">
          Identiplus presents a secure, efficient Video KYC Service enabling
          businesses to establish the identity of customers remotely, through
          live video calls, making it possible to verify real-time face and
          documents for smooth onboardings.
        </p>
        <h2 className="DLValid-section-title">Service Description</h2>
        <p className="DLValid-infotext">
          Our Video KYC solution integrates video streaming with the upload of
          documents to authenticate a customer's identity. This helps in
          real-time compliance with the KYC rules while offering user-friendly
          and secure experience, and hence, well-suited for sectors such as
          banking, finance, and e-commerce.
        </p>
        <h2 className="DLValid-section-title">Service Benefits</h2>
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

export default DlValidpage;
