import React from "react";
import Image from "next/image";

export default function HSEQuality() {
  return (
    <div className="hse-quality-container">
      <div className="content-wrapper">
        <h2 className="hse-heading">HSE & Service Quality</h2>
        <p className="hse-description">
          QES follows a structured Health, Safety, Environment and Quality
          management system and it actively manages and monitors the HSEQ
          aspects of business while setting objectives for improvement.
        </p>
        <div className="image-wrapper">
          <img
            src="assets/img/gallery/three.jpg" /* Replace with your image path */
            alt="Visit of H.E Salim Al Aufi to QES Base"
            className="hse-image"
          />
          <p className="image-caption">
            Visit of H.E Salim Al Aufi to QES Base (Undersecretary at ministry
            of Oil & Gas)
          </p>
        </div>
      </div>
    </div>
  );
}
