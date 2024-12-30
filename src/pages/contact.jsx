import React, { useState } from 'react';
import Image from 'next/image';
import Banner from './components/Banner';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setResponseMessage('Please fill in all required fields.');
      setIsError(true);
      return;
    }

    emailjs
      .send(
        'service_zhrvn2c', // Replace with your EmailJS Service ID
        'template_xtgzchr', // Replace with your EmailJS Template ID
        {
          name,
          email,
          phone,
          subject,
          message,
        },
        'MTKOHmiIgY2xzkK3O' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          setResponseMessage('Message sent successfully!');
          setIsError(false);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error.text || error);
          setResponseMessage('An error occurred. Please try again.');
          setIsError(true);
        }
      );
  };

  return (
    <>
      <Banner page="Contact Us" header="Contact Us" />
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h4 className="text-primary">Contact Us</h4>
            <h1 className="display-4 mb-4">
              If you have any comments, please Contact Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-xl-6">
              <Image
                src="/assets/img/contact.png"
                alt="Contact Image"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
            <div className="col-xl-6">
              <h4 className="text-primary">Send Your Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="phone">Phone (optional)</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
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
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {responseMessage && (
                <div
                  className={`alert mt-4 ${
                    isError ? 'alert-danger' : 'alert-success'
                  }`}
                >
                  {responseMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
