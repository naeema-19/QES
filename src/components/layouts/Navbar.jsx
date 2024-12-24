import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <a href="#" className="text-muted small">
                    <i className="fas fa-map-marker-alt text-primary me-2" />
                    Find A Location
                  </a>
                </div>
                <div className="ps-3">
                  <a
                    href="mailto:example@gmail.com"
                    className="text-muted small"
                  >
                    <i className="fas fa-envelope text-primary me-2" />
                    example@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end">
                <div className="d-flex border-end border-primary pe-3">
                  <a className="btn p-0 text-primary me-3" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn p-0 text-primary me-3" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn p-0 text-primary me-3" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn p-0 text-primary me-0" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
                <div className="dropdown ms-3">
                  <a
                    href="#"
                    className="dropdown-toggle text-dark"
                    data-bs-toggle="dropdown"
                  >
                    <small>
                      <i className="fas fa-globe-europe text-primary me-2" />{" "}
                      English
                    </small>
                  </a>
                  <div className="dropdown-menu rounded">
                    <a href="#" className="dropdown-item">
                      English
                    </a>
                    <a href="#" className="dropdown-item">
                      Bangla
                    </a>
                    <a href="#" className="dropdown-item">
                      French
                    </a>
                    <a href="#" className="dropdown-item">
                      Spanish
                    </a>
                    <a href="#" className="dropdown-item">
                      Arabic
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="#" className="navbar-brand p-0">
              <h1 className=" mb-0 text-primary">
                <i className="fab fa-slack me-2" /> LifeSure
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link href="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link href="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link href="/services" className="nav-item nav-link">
                  Services
                </Link>
                <Link href="/blog" className="nav-item nav-link">
                Blog
                </Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-bs-toggle="dropdown">
                    <span className="dropdown-toggle">Pages</span>
                  </a>
                  <div className="dropdown-menu">
                  <Link href="/feature" className="dropdown-item">
                  Our Features
                </Link>
                <Link href="/team" className="dropdown-item">
                Our team
                </Link>
                <Link href="/testimonial" className="dropdown-item">
                Testimonial
                </Link>
                <Link href="/faqs" className="dropdown-item">
                FAQs
                </Link>
                <Link href="*" className="dropdown-item">
                404 Page
                </Link>
                  </div>
                </div>
                <Link href="/contact" className="nav-item nav-link">
                Contact
                </Link>
                <div className="nav-btn px-3">
                  <button
                    className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search" />
                  </button>
                  <a
                    href="#"
                    className="btn btn-primary rounded py-2 px-4 ms-3 flex-shrink-0"
                  >
                    {" "}
                    Get a Quote
                  </a>
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
                <span>Call to Our Experts</span>
                <a href="tel:+ 0123 456 7890">
                  <span className="text-dark">Free: + 0123 456 7890</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center bg-primary">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span
                  id="search-icon-1"
                  className="btn bg-light border nput-group-text p-3"
                >
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
    </>
  );
}
