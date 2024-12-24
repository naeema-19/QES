import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        await import("owl.carousel");

        $(document).ready(function () {
          const carousel = $(".slider-carousel");
          if (carousel.length) {
            carousel.owlCarousel({
              items: 1,
              loop: true,
              nav: true,
              dots: false,
              autoplay: true,
              autoplayTimeout: 5000,
              animateOut: "fadeOut",
              animateIn: "fadeIn",
              navText: [
                '<i class="bi bi-arrow-right"></i>',
                '<i class="bi bi-arrow-left"></i>',
              ],
            });
          }
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
.slider-carousel .owl-next {
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px !important;
  background: var(--button-color) !important;
  color:#fff !important;
  font-size: 26px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: 0.5s !important;
  margin: 0px 0px 0px 20px !important;
}

.slider-carousel .owl-prev {
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px !important;
  background:  var(--button-color) !important;
  color:#fff !important;
  font-size: 26px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: 0.5s !important;
  margin: 0px 20px 0px 0px !important;
}

.slider-carousel  .owl-nav {
  display: flex !important;
  justify-content: center !important;
}
        `}
      </style>
      <div
        className="container-fluid slider pt-5 pb-5"
        style={{ background: 'var(--main-bg)' }}
      >
        <div className="container d-block pt-5 mt-3">
          <div className="owl-carousel slider-carousel">
            <div className="slider-item ">
              <div className="container-fluid">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-start">
                      <h4 className=" text-uppercase text-white fw-bold mb-4">
                        Welcome To LifeSure
                      </h4>
                      <h1 className="display-1 text-white mb-4">
                        Life Insurance Makes You Happy
                      </h1>
                      <p className="mb-5 text-white fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                        <a
                          className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          Watch Video
                        </a>
                        <a
                          className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 animated fadeInRight">
                    <div
                      className="carousel-img"
                      style={{ objectFit: "cover" }}
                    >
                      <Image
                        src="/assets/img/carousel-2.png"
                        className="img-fluid w-100"
                        alt="Carousel Image"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item ">
              <div className="container-fluid">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-5 animated fadeInRight">
                    <div
                      className="carousel-img"
                      style={{ objectFit: "cover" }}
                    >
                      <Image
                        src="/assets/img/carousel-2.png"
                        className="img-fluid w-100"
                        alt="Carousel Image"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-end">
                      <h4 className="text-white text-uppercase fw-bold mb-4">
                        Welcome To LifeSure
                      </h4>
                      <h1 className="display-1 text-white mb-4">
                        Life Insurance Makes You Happy
                      </h1>
                      <p className="mb-5 text-white fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                        <a
                          className="btn btn-primary rounded py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          Watch Video
                        </a>
                        <a
                          className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
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

export default Slider;
