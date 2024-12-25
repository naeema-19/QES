import React from "react";

export default function Lab() {
  return (
    <>
      {/* About Start */}
      <div className="container-fluid bg-light about pb-5">
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h4 className="text-primary">About Our Company</h4>
                <h1 className="display-4 mb-4">
                  QES Software, Lab & Equipment’s
                </h1>
                <p>
                  QES had invested heavily on software, cementing lab and
                  equipment to ensure it meets or exceeds the current
                  international standards. Some of the QES equipment’s had been
                  modified to have more features than the current equipment
                  available in the market.
                </p>
              </div>
            </div>
            <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
              {/* Responsive Gallery */}
        <div className="container-fluid team pb-5">
          <div className="container">
            <div className="row g-4">
              {[
                { src: "assets/img/qes3.png", label: "Equipments in Lab" },
                { src: "assets/img/qes4.png", label: "Work in Lab" },
                { src: "assets/img/qes2.jpeg", label: "Batch Mixer" },
                {
                  src: "assets/img/qurum_energy_services_cover.jpeg",
                  label: "Cementing Unit",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="team-item">
                    <div className="team-img position-relative">
                      <img
                        src={item.src}
                        className="img-fluid rounded"
                        alt={item.label}
                      />
                      <div className="team-title p-3 bg-dark bg-opacity-75 text-white text-center rounded-bottom">
                        <p className="mb-0">{item.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

            </div>
          </div>
        </div>

      </div>
      {/* About End */}
    </>
  );
}


        