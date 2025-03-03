import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import videoKYC from "/assets/service1img1.webp";
import VirtualKYC from "/assets/service1img2.png";
import AadhaarVerification from "/assets/service1img7.jpeg";
import DLValidation from "/assets/service1img6.webp";
import FaceRecognition from "/assets/service1img3.png";
import IndividualVerification from "/assets/service1img4.jpg";
import PANVerification from "/assets/service1img5.webp";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] md:h-[30rem] sm:h-[25rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    name: "Video KYC Service",
    image: videoKYC,
    path: "/service/VideoKYC",
  },
  {
    name: "Virtual KYC Assistance",
    image: VirtualKYC,
    path: "/service/VirtualKycAssistance",
  },
  {
    name: "Aadhaar Verification",
    image: AadhaarVerification,
    path: "/service/AadhaarVerification",
  },
  {
    name: "DL Validation",
    image: DLValidation,
    path: "/service/DlValidation",
  },
  {
    name: "Face Recognition",
    image: FaceRecognition,
    path: "/service/FaceRecognition",
  },

  {
    name: "Individual Verification Service",
    image: IndividualVerification,
    path: "/service/IndividualVerificationService",
  },
  {
    name: "PAN Verification Service",
    image: PANVerification,
    path: "/service/PanVerificationService",
  },
];
