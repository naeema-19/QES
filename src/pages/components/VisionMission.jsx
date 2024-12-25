import React from 'react'

export default function VisionMission() {
  return (
    <>
    {/* Service Start */}
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Vision and Mission</h4>
          <h1 className="display-4 mb-4">Our Vision and Mission</h1>
          <p className="mb-0">
          
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-md-6 col-lg-6 col-xl-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src="assets/img/vision.jpg"
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="service-icon p-3">
                  <i className="fa fa-eye fa-2x" />
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="#" className="d-inline-block h4 mb-4">
                    Our Vision
                  </a>
                  <p className="mb-4">
                  QES strives to be Oman’s top provider of cementing, innovative technologies, and oil and gas services, exceeding expectations with consistent results. 
                  We focus on developing systems to ensure service quality, employee wellbeing, and comprehensive well integrity solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-5 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src="assets/img/mission.jpg"
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="service-icon p-3">
                  <i className="fa fa-bullseye fa-2x" />
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="#" className="d-inline-block h4 mb-4">
                    Our Mission
                  </a>
                  <p className="mb-4">
                  Our mission is to drive in-country value by investing in Oman, achieving zero NPT, HSE, and SQ issues, and supporting 
                  local universities through internships and training. QES also offers diagnostic and post-job testing to enhance customer outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}
  </>
  
  )
}

 
