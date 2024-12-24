import React from 'react'

export default function Features() {
  return (
    <>
    {/* Feature Start */}
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Objectives</h4>
          <h1 className="display-4 mb-4">
          Our Objectives
          </h1>
          <p className="mb-0">
          
          </p>
        </div>
        <div className="text-center row g-4 justify-content-evenly ">
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="feature-item p-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="far fa-handshake fa-3x" />
              </div>
              <h4 className="mb-4">Trusted Service Delivery</h4>
              <p className="mb-4">
              Develop processes, standards, and management systems to ensure consistent, high-quality service delivery while prioritizing the wellbeing of employees, customers, and suppliers.
              </p>
              <a className="btn btn-primary rounded py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="feature-item p-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="fa fa-users fa-3x" />
              </div>
              <h4 className="mb-4">Collaborative Approach</h4>
              <p className="mb-4">
              Work alongside local companies rather than competing, fostering strong partnerships within the industry.
              </p>
              <a className="btn btn-primary rounded py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="feature-item p-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="fa fa-user fa-3x" />
              </div>
              <h4 className="mb-4">Omanisation Leadership</h4>
              <p className="mb-4">
              Target over 95% Omanisation from the start, with the company being 100% Omani-owned and committed to local empowerment.
              </p>
              <a className="btn btn-primary rounded py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="feature-item p-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="fa fa-thumbs-up fa-3x" />
              </div>
              <h4 className="mb-4">Customer-Centric Goals</h4>
              <p className="mb-4">
              Achieve customer objectives with zero Non-Productive Time (NPT), zero Health, Safety, and Environmental (HSE) incidents, and zero Service Quality (SQ) issues.
              </p>
              <a className="btn btn-primary rounded py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="feature-item p-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="fa fa-check fa-3x" />
              </div>
              <h4 className="mb-4">Advanced Diagnostics</h4>
              <p className="mb-4">
              Independently perform diagnostic and post-job testing for customers, offering solutions across multiple vendors with precision and reliability.
              </p>
              <a className="btn btn-primary rounded py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Feature End */}
  </>
  
  )
}
