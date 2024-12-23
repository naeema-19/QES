import React from 'react';
import Image from 'next/image';
import Banner from './components/Banner';

export default function Contact() {
  return (
    <>
      <Banner page="Contact" header="Contact Us" />

      {/* Contact Start */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Contact Us</h4>
            <h1 className="display-4 mb-4">
              If you have any comments please Contact Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="contact-img d-flex justify-content-center">
                <div className="contact-img-inner">
                  <Image
                    src="/assets/img/contact-img.png"
                    className="img-fluid w-100"
                    alt="Contact Image"
                    layout="responsive"
                    width={500}  // Adjust width and height as per your image
                    height={500} // Adjust width and height as per your image
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <div>
                <h4 className="text-primary">Send Your Message</h4>
                {/*<p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax &amp; PHP in a few minutes. Just
                  copy and paste the files, add a little code and you&apos;re done.{" "}
                  <a
                    className="text-primary fw-bold"
                    href="https://htmlcodex.com/contact-form"
                  >
                    Download Now
                  </a>
                  .
                </p>*/}
                <form>
                  <div className="row g-3">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-12">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control border-0"
                          id="phone"
                          placeholder="Phone"
                        />
                        <label htmlFor="phone">Phone no with country code</label>
                      </div>
                    </div>
                    {/*<div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="project"
                          placeholder="Project"
                        />
                        <label htmlFor="project">Your Project</label>
                      </div>
                    </div>*/}
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 120 }}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div>
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-map-marker-alt fa-2x" />
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0">Bait Al Reem Building, 1st Floor, <br></br>Al Khuwair, Ministry St <br></br>Muscat – Sultanate of Oman</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-envelope fa-2x" />
                      </div>
                      <div>
                        <h4>Mail Us</h4>
                        <p className="mb-0">info@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fa fa-phone-alt fa-2x" />
                      </div>
                      <div>
                        <h4>Contact</h4>
                        <p className="mb-0">Tel: +968 2495 8606,
                            <br></br>Fax: +968 2495 8966<br></br>Direct Contact:<br></br>
                            Abdullah Al Fadhli / +968 97747691</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: 400 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1077626107613!2d58.43486877511032!3d23.60046787877295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff15aceb368f%3A0x6d743f7491599da!2sBait%20Al%20Reem!5e0!3m2!1sen!2som!4v1735042907922!5m2!1sen!2som"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}
