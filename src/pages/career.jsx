import React, { useState } from 'react';
import Image from 'next/image';
import Banner from './components/Banner';

export default function Career() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyRox1D5_gVhdRZyNRPlUPuFhYkXC6r1NFO-BYWaGf6c-xqsCaK99SOBdexXIsUZaie1g/exec";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInfo: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormState({ ...formState, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("phone", formState.phone);
    formData.append("add", formState.additionalInfo);

    // Convert file to Base64 before sending
    if (formState.file) {
      const base64File = await toBase64(formState.file);
      formData.append("file", base64File);
      formData.append("filename", formState.file.name);
    }

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        additionalInfo: "",
        file: null,
      });

      // Hide button and show thank-you message for 1 minute
      setTimeout(() => {
        setIsSubmitted(false);
      }, 60000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Base64 only
      reader.onerror = (error) => reject(error);
    });
  };
  

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
                    width={500} // Adjust width and height as per your image
                    height={500} // Adjust width and height as per your image
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <div>
                <h4 className="text-center text-primary">Submit Your CV here</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={handleChange}
                          required
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
                          name="email"
                          placeholder="Your Email"
                          value={formState.email}
                          onChange={handleChange}
                          required
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
                          name="phone"
                          placeholder="Your Phone Number"
                          value={formState.phone}
                          onChange={handleChange}
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
                          onChange={handleFileChange}
                          required
                        />
                        <label htmlFor="file">Choose File (Upload as pdf)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          id="additional-info"
                          name="additionalInfo"
                          placeholder="Additional Information (Optional)"
                          style={{ height: 120 }}
                          value={formState.additionalInfo}
                          onChange={handleChange}
                        />
                        <label htmlFor="additional-info">
                          Additional Information (Optional)
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      {!isSubmitted && (
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Your CV"}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
                {isSubmitting && <div>Please wait...</div>}
                {isSubmitted && <div>Entry received. Thank you!</div>}
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row text-center g-5">
            <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h4 className="text-primary">Career</h4>
                <h1 className="display-4 mb-4">Available Positions</h1>
                <p>Will be updated soon</p>
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
