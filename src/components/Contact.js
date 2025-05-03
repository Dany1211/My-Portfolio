import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import "../styles/Contact.css";
import { SiX } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Simple reveal animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case section is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className={`contact-section ${isVisible ? "visible" : ""}`}
    >
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <div className="accent-line"></div>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? "fade-in-left" : ""}`}>
            <h3 className="contact-subtitle">Get In Touch</h3>
            <p className="contact-text">
              Always excited to collaborate, learn, and build! Feel free to
              reach out and let's create something amazing together.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>dnyanesh2442@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Pune, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/danymulay/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Dany1211"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/dany02020"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link x"
                aria-label="X"
              >
                <SiX />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dnyanesh2442@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link gmail"
                aria-label="Gmail"
              >
                <FaGoogle />
              </a>
            </div>
          </div>

          <div
            className={`contact-form-container ${
              isVisible ? "fade-in-right" : ""
            }`}
          >
            {isFormSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>
                  Your message has been sent successfully. I'll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <FaEnvelope className="btn-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
