import React, { useEffect } from "react";
import Head from "next/head";
import "animate.css";
import WOW from "wow.js";

export default function Service() {
  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW().init();
  }, []);

  return (
    <>
      {/* Add Font Awesome CDN */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>

      {/* Service Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Services</h4>
            <h1 className="display-4 mb-4">We Provide Best Services</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* 13 3/8" Casing Cementing */}
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="/assets/img/blog-1.png" // Corrected the path for Next.js
                    className="img-fluid rounded-top w-100"
                    alt="Casing Cementing"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-users fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      13 3/8" Casing Cementing
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, eum!
                    </p>
                    <a className="btn btn-primary rounded py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 5/8" Casing Cementing */}
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="/assets/img/blog-2.png" // Corrected the path for Next.js
                    className="img-fluid rounded-top w-100"
                    alt="Casing Cementing"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-hospital fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      9 5/8" Casing Cementing
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, eum!
                    </p>
                    <a className="btn btn-primary rounded py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 7" Liner Cementing */}
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="/assets/img/blog-3.png" // Corrected the path for Next.js
                    className="img-fluid rounded-top w-100"
                    alt="Liner Cementing"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-car fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      7" Liner Cementing
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, eum!
                    </p>
                    <a className="btn btn-primary rounded py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 7" Casing Cementing */}
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="/assets/img/blog-4.png" // Corrected the path for Next.js
                    className="img-fluid rounded-top w-100"
                    alt="Casing Cementing"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-home fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      7" Casing Cementing
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, eum!
                    </p>
                    <a className="btn btn-primary rounded py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Button to show more services */}
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <a className="btn btn-primary rounded py-3 px-5" href="#">
                More Services
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
}
