import React from "react";

export default function QESJourney() {
  const timelineItems = [
    {
      date: "Jan 2015",
      title: "Start-up of QES",
      description: "The journey begins with the establishment of QES.",
      logo: "/assets/img/qes-logo.png",
    },
    {
      date: "Apr 2015",
      title: "Circle Oil Contract",
      description: "Completed one well abandonment project for Circle Oil.",
      logo: "/assets/img/clients/circle-Oil.jpg",
    },
    {
      date: "Nov 2015",
      title: "MOL Contract Awarded",
      description: "Awarded contract for Maisoorah & Husna Wells by MOL.",
      logo: "/assets/img/clients/mol.png",
    },
    {
      date: "Oct 2016",
      title: "CCED Trial for One Well",
      description: "Completed a trial for one well for CCED.",
      logo: "/assets/img/clients/cced.png",
    },
    {
      date: "Dec 2016",
      title: "Oxy Top Fill Contract",
      description: "Awarded the Oxy Top Fill Contract.",
      logo: "/assets/img/clients/oxy.png",
    },
    {
      date: "Feb 2017",
      title: "Oxy Steam Injection Wells",
      description: "Awarded contract for three steam injection wells in Mukhaizna (Oxy).",
      logo: "/assets/img/clients/oxy.png",
    },
    {
      date: "May 2017",
      title: "Daleel Contract",
      description: "Started Daleel Contract.",
      logo: "/assets/img/clients/daleel_petroleum.png",
    },
    {
      date: "Oct 2017",
      title: "CCED Contract",
      description: "Started CCED Contract.",
      logo: "/assets/img/clients/cced.png",
    },
    {
      date: "May 2019",
      title: "Medco Trial",
      description: "Conducted Medco Trial.",
      logo: "/assets/img/clients/medconbg.png",
    },
    {
      date: "May 2021",
      title: "Petrogas Rima Contract",
      description: "Started Petrogas Rima Contract.",
      logo: "/assets/img/clients/petrogas.png",
    },
    {
      date: "Jan 2024",
      title: "More to Come",
      description: "Exciting milestones are on the horizon!",
      logo: "/assets/img/qes-logo.png",
    },
  ];

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Journey</h4>
          <h1 className="display-4 mb-4">Our Journey</h1>
          <p className="mb-0"></p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="timeline">
            <div className="timeline-line"></div>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <div className="timeline-logo">
                  <img src={item.logo} alt={`${item.title} Logo`} />
                </div>
                <div className="timeline-content">
                  <h4>{item.date}</h4>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div
                    className={`timeline-arrow ${
                      index % 2 === 0 ? "even" : "odd"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
