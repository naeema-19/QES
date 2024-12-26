import React from "react";
import Image from "next/image";
import Banner from "./components/Banner";

export default function HSEQuality() {
  return (
    <>
    <Banner page="HSE" header="HSE" />
    <div className="container-fluid blog py-5">
      <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.2s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">HSE</h4>
        <h1 className="display-4 mb-4">HSE & Service Quality</h1>
        <p className="mb-20">
        QES follows a structured Health, Safety, Environment and Quality 
        management system and it actively manages andmonitors the HSEQ aspects of business while setting objectives for improvement
        </p>
        </div>
        </div>
    </div>
    </>
  );
}
