import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s"  style={{ background: 'var(--main-bg)' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-9">
              <div className="mb-5">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6 col-xl-5">
                    <div className="footer-item">
                      <a href="index.html" className="p-0">
                        <h3 className="theme-text">
                          <i className="fab fa-slack me-3" /> LifeSure
                        </h3>
                        {/* <Image src="/assets/img/logo.png" alt="Logo" width={50} height={50} /> */}
                      </a>
                      <p >
                        Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                        ipsum dolor sit amet, consectetur adipiscing...
                      </p>
                      <div className="footer-btn d-flex">
                        <a className="btn btn-md-square rounded-circle me-3" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-md-square rounded-circle me-3" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-md-square rounded-circle me-3" href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a className="btn btn-md-square rounded-circle me-0" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="footer-item">
                      <h4 className="theme-text mb-4">Useful Links</h4>
                      <a href="#"><i className="fas fa-angle-right me-2" /> About Us</a>
                      <a href="#"><i className="fas fa-angle-right me-2" /> Features</a>
                      <a href="#"><i className="fas fa-angle-right me-2" /> Services</a>
                      <a href="#"><i className="fas fa-angle-right me-2" /> FAQ&apos;s</a>
                      <a href="#"><i className="fas fa-angle-right me-2" /> Blogs</a>
                      <a href="#"><i className="fas fa-angle-right me-2" /> Contact</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="footer-item">
                      <h4 className="mb-4 theme-text">Instagram</h4>
                      <div className="row g-3">
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <Image
                              src="/assets/img/instagram-footer-1.jpg"
                              className="img-fluid w-100"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="footer-search-icon">
                              <a
                                href="/assets/img/instagram-footer-1.jpg"
                                data-lightbox="footerInstagram-1"
                                className="my-auto"
                              >
                                <i className="fas fa-link theme-text" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <Image
                              src="/assets/img/instagram-footer-2.jpg"
                              className="img-fluid w-100"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="footer-search-icon">
                              <a
                                href="/assets/img/instagram-footer-2.jpg"
                                data-lightbox="footerInstagram-2"
                                className="my-auto"
                              >
                                <i className="fas fa-link theme-text" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <Image
                              src="/assets/img/instagram-footer-3.jpg"
                              className="img-fluid w-100"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="footer-search-icon">
                              <a
                                href="/assets/img/instagram-footer-3.jpg"
                                data-lightbox="footerInstagram-3"
                                className="my-auto"
                              >
                                <i className="fas fa-link theme-text" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <Image
                              src="/assets/img/instagram-footer-4.jpg"
                              className="img-fluid w-100"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="footer-search-icon">
                              <a
                                href="/assets/img/instagram-footer-4.jpg"
                                data-lightbox="footerInstagram-4"
                                className="my-auto"
                              >
                                <i className="fas fa-link theme-text" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <Image
                              src="/assets/img/instagram-footer-5.jpg"
                              className="img-fluid w-100"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="footer-search-icon">
                              <a
                                href="/assets/assets/img/instagram-footer-5.jpg"
                                data-lightbox="footerInstagram-5"
                                className="my-auto"
                              >
                                <i className="fas fa-link theme-text" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <Image
                              src="/assets/img/instagram-footer-6.jpg"
                              className="img-fluid w-100"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="footer-search-icon">
                              <a
                                href="/assets/img/instagram-footer-6.jpg"
                                data-lightbox="footerInstagram-6"
                                className="my-auto"
                              >
                                <i className="fas fa-link theme-text" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div className="row g-0">
                  <div className="col-12">
                    <div className="row g-4">
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-map-marker-alt fa-2x" />
                          </div>
                          <div>
                            <h4 className="theme-text">Address</h4>
                            <p className="mb-0">123 Street New York.USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-envelope fa-2x" />
                          </div>
                          <div>
                            <h4 className="theme-text">Mail Us</h4>
                            <p className="mb-0">info@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fa fa-phone-alt fa-2x" />
                          </div>
                          <div>
                            <h4 className="theme-text">Telephone</h4>
                            <p className="mb-0">(+012) 3456 7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="footer-item">
                <h4 className="theme-text mb-4">Newsletter</h4>
                <p>
                  Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ height: 48 }}
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="fas fa-paper-plane text-primary fs-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}
