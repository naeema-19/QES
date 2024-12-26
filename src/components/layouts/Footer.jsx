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
                <div className="text-center row g-4">
                  <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="footer-item">
                      <a href="index.html" className="p-0">
                        <h3 className="text-white">
                        Qurum Enterprise Oil & Gas Services L.L.C.
                        </h3>
                        {/* <Image src="/assets/img/logo.png" alt="Logo" width={50} height={50} /> */}
                      </a>
                      <p className='text-white' >
                      Local Expertise, Global Experience
                      </p>
                      <div className="footer-btn d-flex justify-content-center align-items-center">
                        <a className="btn btn-md-square rounded-circle me-3"  target=" " href="https://www.facebook.com/people/Qes-Oman/100009765726679/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-md-square rounded-circle me-3" target=" " href="https://x.com/omanqes">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="icon-size"
                          >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                          </svg>
                        </a>
                        <a className="btn btn-md-square rounded-circle me-3"  target=" " href="https://www.instagram.com/qes_oman/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a className="btn btn-md-square rounded-circle me-0" target=' ' href="https://www.linkedin.com/company/qurum-energy-services">
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
                            <p className="text-white mb-0">Bait Al Reem Building, <br></br>1st Floor, Al Khuwair, Ministry St <br></br>Muscat – Sultanate of Oman</p>
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
                            <h4 className="text-white">Contact</h4>
                            <p className="text-white mb-0">Tel: +968 2495 8606,
                            <br></br>Fax: +968 2495 8966<br></br>Direct Contact:<br></br>
                            Abdullah Al Fadhli / +968 97747691</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="text-center pt-4 py-4"
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  marginTop: '20px',
                }}
              >
                <p className="mb-0 text-white">
                  &copy; {new Date().getFullYear()} Qurum Enterprise Oil & Gas
                  Services L.L.C. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}
