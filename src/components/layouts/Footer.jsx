import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s"  style={{ background: 'var(--main-bg)' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-12">
              <div className="mb-5">
                <div className="text-center row g-4 justify-center">
                  <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="footer-item">
                      <a href="index.html" className="p-0">
                        <h3 className="text-white">
                        Qurum Enterprise Oil & Gas Services L.L.C.
                        </h3>
                        {/* <Image src="/assets/img/logo.png" alt="Logo" width={50} height={50} /> */}
                      </a>
                      <p className='text-white' >
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
                            <h4 className="text-white">Address</h4>
                            <p className="text-white mb-0">123 Street New York.USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-envelope fa-2x" />
                          </div>
                          <div>
                            <h4 className="text-white">Mail Us</h4>
                            <p className="text-white mb-0">info@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fa fa-phone-alt fa-2x" />
                          </div>
                          <div>
                            <h4 className="text-white">Telephone</h4>
                            <p className="text-white mb-0">(+012) 3456 7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
