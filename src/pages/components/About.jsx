import React from 'react'

export default function About() {
  return (
    <>
    {/* About Start */}
    <div className="container-fluid bg-light about pb-5">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-item-content bg-white rounded p-5 h-100">
              <h4 className="text-primary">About Our Company</h4>
              <h1 className="display-4 mb-4">
              About Us
              </h1>
              <p>
              Qurum Enterprise Oil & Gas Services (QES), established in 2012 by motivated Omani leaders, specializes in cementing operations with a focus on performance, quality, and innovation. Backed by highly skilled local experts, QES aims to build strategic partnerships rooted in technology and In-Country-Value. Safety is our core value and top priority, with a 24/7 commitment to protecting our people and the environment through rigorous policies and procedures.
              </p>
              <p>
              QES believes the success is build based on its proper management, experienced people and right technology.</p>
              <p className="text-dark">
                <i className="fa fa-check text-primary me-3" />
                People
              </p>
              <p className="text-dark">
                <i className="fa fa-check text-primary me-3" />
                Management
              </p>
              <p className="text-dark mb-4">
                <i className="fa fa-check text-primary me-3" />
                Technology
              </p>
              <a className="btn btn-primary rounded py-3 px-5" href="#">
                More Information
              </a>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="bg-white rounded p-5 h-100">
              <div className="row g-4 justify-content-center">
                <div className="col-12">
                  <div className="rounded bg-light">
                    <img
                      src="assets/img/about.jpeg"
                      className="img-fluid rounded w-100"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="counter-item bg-light rounded p-3 h-100">
                    <div className="counter-counting">
                      <span
                        className="text-primary fs-2 fw-bold"
                        data-toggle="counter-up"
                      >
                        129
                      </span>
                      <span className="h1 fw-bold text-primary">+</span>
                    </div>
                    <h4 className="mb-0 text-dark">Projects Served</h4>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="counter-item bg-light rounded p-3 h-100">
                    <div className="counter-counting">
                      <span
                        className="text-primary fs-2 fw-bold"
                        data-toggle="counter-up"
                      >
                        99
                      </span>
                      <span className="h1 fw-bold text-primary">+</span>
                    </div>
                    <h4 className="mb-0 text-dark">Awards WON</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
  </>
  
  )
}

 
