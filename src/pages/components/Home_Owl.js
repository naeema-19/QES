import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home_Owl = () => {
  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        await import("owl.carousel");

        $(document).ready(function () {
          $(".slider-carousel1").owlCarousel({
            items: 2,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            navText: [
              '<i class="bi bi-arrow-right"></i>',
              '<i class="bi bi-arrow-left"></i>'
            ],
responsiveClass: true,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:1
                },
                992:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
          });
        });
      }
    };

    loadCarousel();
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>
      <style>
        {`
      .slider-carousel1 .owl-next{
          position: absolute !important;
          right: 0 !important;
          top: -58px !important;
          color: #fff !important;
          background: var(--button-color) !important;
          border-radius: 10px !important;
          padding: 5px 26px !important;
          transition: 0.5s !important;
              font-size: 22px !important;
        }  
           .slider-carousel1 .owl-next i{
           margin: 5px 26px !important;
               font-weight: 900 !important;
           }
           .slider-carousel1 .owl-prev i{
            margin: 5px 26px !important;
                font-weight: 900 !important;
           }
      .slider-carousel1 .owl-prev{
          position: absolute !important;
          top: -58px !important;
          left: 0 !important;
          background: var(--button-color) !important;
          color:#fff  !important;
          padding: 5px 26px !important;
          border-radius: 10px !important;
          transition: 0.5s !important;
            font-size: 22px !important;
        }  
        `}
      </style>
      <div className="container-fluid slider pb-5">
        <div className="container pb-5 d-block">
          <div className="owl-carousel slider-carousel1">
            <div className="slider-item bg-light rounded me-4">
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="assets/img/testimonial-1.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt="Slide 1"
                    />
                  </div>
                </div>

                <div className="col-md-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item bg-light rounded me-4">
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="assets/img/testimonial-2.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt="Slide 1"
                    />
                  </div>
                </div>

                <div className="col-md-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-body"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item bg-light rounded me-4">
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="assets/img/testimonial-3.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt="Slide 1"
                    />
                  </div>
                </div>

                <div className="col-md-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-body"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/lib/owlcarousel/owl.carousel.min.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Home_Owl;
