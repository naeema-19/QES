import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  const closeNavbar = () => setIsCollapsed(true);

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="ps-3">
                  <a href="mailto:info@qurum-ogs.com" className="text-muted small">
                    <i className="fas fa-envelope text-primary me-2" />
                    info@qurum-ogs.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end">
                <div className="d-flex pe-3">
                  <a className="btn p-0 text-primary me-3" target=" " href="https://www.instagram.com/qes_oman/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn p-0 text-primary me-3" target=" " href="https://x.com/omanqes">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon-size"
                    >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                  <a className="btn p-0 text-primary me-3" target=" " href="https://www.facebook.com/people/Qes-Oman/100009765726679/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn p-0 text-primary me-0" target=" " href="https://www.linkedin.com/company/qurum-energy-services">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="#" className="navbar-brand p-0">
              <img src="assets/img/qes-logo.png" alt="Logo" />
            </a>
            <button
              className={`navbar-toggler ${!isCollapsed ? "collapsed" : ""}`}
              type="button"
              aria-expanded={!isCollapsed}
              onClick={handleToggle}
            >
              <span className={!isCollapsed ? "fa fa-times" : "fa fa-bars"} />
            </button>
            <div
              className={`collapse navbar-collapse ${
                isCollapsed ? "" : "show"
              }`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link href="/" className="nav-item nav-link" onClick={closeNavbar}>
                  Home
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    data-bs-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="dropdown-toggle">About</span>
                  </a>
                  <div className="dropdown-menu">
                    <Link
                      href="/about"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/omanisation"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Omanisation
                    </Link>
                    <Link
                      href="/hse"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      HSE
                    </Link>
                  </div>
                </div>
                <Link href="/services" className="nav-item nav-link" onClick={closeNavbar}>
                  Services
                </Link>
                <Link href="/achievments" className="nav-item nav-link" onClick={closeNavbar}>
                  Achievements
                </Link>
                <Link href="/career" className="nav-item nav-link" onClick={closeNavbar}>
                  Careers
                </Link>
                <Link href="/gallery" className="nav-item nav-link" onClick={closeNavbar}>
                  Gallery
                </Link>
                <div className="nav-btn px-3">
                  <Link
                    href="/contact"
                    className="btn btn-primary rounded py-2 px-4 ms-3 flex-shrink-0"
                    onClick={closeNavbar}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shrink-0 ps-4">
              <a
                href="#"
                className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                data-wow-delay=".9s"
              >
                <i className="fa fa-phone-alt fa-2x" />
                <div
                  className="position-absolute"
                  style={{ top: 7, right: 12 }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary" />
                  </span>
                </div>
              </a>
              <div className="d-flex flex-column ms-3">
                <span>Call Us Directly</span>
                <a href="tel:+96895661040">
                  <span className="text-dark">+968 95661040</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
}
