import React from "react";

export default function Achievements() {
  return (
    <div className="container-fluid py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center mb-5 text-uppercase text-primary">
          QES Achievements
        </h2>
        <h4 className="text-center text-2xl mb-20">
          QES, as the first Omani company, has achieved the following milestones:
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Cemented Two Full Exploration Wells:</strong> MOL Maisoorah-1 & Hussna-1.
          </li>
          <li className="list-group-item">
            <strong>Cemented Full Steam Injection Wells:</strong> OXY-Mukhaizna.
          </li>
          <li className="list-group-item">
            <strong>Awarded 100% Scope of Work:</strong> Daleel Petroleum.
          </li>
          <li className="list-group-item">
            <strong>Achieved Two Weeks Mobilization & 100% Scope of Work for Two Months:</strong> CCED.
          </li>
          <li className="list-group-item">
            <strong>Operated with a 100% Omani Workforce:</strong> Demonstrating a strong commitment to local talent development.
          </li>
          <li className="list-group-item">
            <strong>Headcount Growth:</strong> Expanded from 10 employees in January 2015 to 45 employees by the end of 2017.
          </li>
          <li className="list-group-item">
            <strong>Local Development:</strong>
            <ul className="ms-4 mt-2">
              <li>Bulk Plant Management</li>
              <li>Local Cement Additives Suppliers</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="container-fluid team pb-5 py-5">
    <div className="container pb-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.2s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Gallery</h4>
        <h1 className="display-4 mb-4">Take a Glance</h1>
        <p className="mb-0 text-black">
          A Journey through our Achievements
        </p>
      </div>
      <div className="row text-center justify-content-center g-4">
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="team-item">
            <div className="team-img">
              <img
                src="assets/img/daleel_award.jpeg"
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="team-icon">
              {/*<p className="mb-0 text-black">
          A Journey through our Achievements
        </p>*/}
              </div>
            </div>
            <div className="team-title p-4">
              <h4 className="mb-0 text-white"></h4>
              <p className="mb-0 text-white">QES is proud to receive distinguished appreciation on achieving one year LTI free, we are looking forward to working with our clients and maintain LTI free environment</p>
            </div>
          </div>
        </div>
        {/*<div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="team-item">
            <div className="team-img">
              <img
                src="assets/img/team-1.jpg"
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="team-icon">
              {
              </div>
            </div>
            <div className="team-title p-4">
              <h4 className="mb-0 text-white">David James</h4>
              <p className="mb-0 text-white">Profession</p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="team-item">
            <div className="team-img">
              <img
                src="assets/img/team-1.jpg"
                className="img-fluid rounded-top w-100"
                alt=""
              />
            </div>
            <div className="team-title p-4">
              <h4 className="mb-0 text-white">David James</h4>
              <p className="mb-0 text-white">Profession</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  </div>
    </div>
  );
};
