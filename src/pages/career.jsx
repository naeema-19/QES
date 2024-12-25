import React from 'react';
import Image from 'next/image';
import Banner from './components/Banner';

export default function Career() {
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
              Submit Your CV or Reach Out to Us
            </h1>
          </div>
          <div className="row g-5">
             <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
               <div className="contact-img d-flex justify-content-center">
                 <div className="contact-img-inner">
                   <Image
                     src="/assets/img/cv.png"
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
                <h4 className="text-center text-primary">Submit Your CV here</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-12">
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
                    <div className="col-12">
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
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control border-0"
                          id="phone"
                          placeholder="Your Phone Number"
                        />
                        <label htmlFor="phone">Your Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="file"
                          className="form-control border-0"
                          id="file"
                          placeholder="Choose File"
                        />
                        <label htmlFor="file">Choose File</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Additional Information (Optional)"
                          id="additional-info"
                          style={{ height: 120 }}
                        />
                        <label htmlFor="additional-info">
                          Additional Information (Optional)
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3">
                        Submit Your CV
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
        <div className="row text-center g-5">
          <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-item-content bg-white rounded p-5 h-100">
              <h4 className="text-primary">Career</h4>
              <h1 className="display-4 mb-4">
              Available Positions
              </h1>
              <p>
             Will be updated soon</p>
              <a className="btn btn-primary rounded py-3 px-5" href="#">
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Contact End */}
    </>
  );
}

Career.getInitialProps = async () => {
  return {
    pageTitle: "Careers", // Dynamically set the page title
  };
};
