import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebaseConfig"; // ensure firebase is configured and exported from this path
import { collection, addDoc, Timestamp } from "firebase/firestore";

import illustration14 from "/assets/img/illustration/14.png";
import Animation from "../animation/Animation";

const ContactUsV1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contact_messages"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="contact-style-one-area overflow-hidden default-padding">
      <div className="contact-shape">
        <img src={illustration14} alt="Contact Illustration" />
      </div>
      <div className="container">
        <div className="row align-center">
          <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-40">
            <div className="contact-style-one-info">
              <h4 className="sub-title">Have a Security Concern?</h4>
              <h2>Reach DylVault</h2>
              <p>
                Whether it's urgent deployment, event support, or tailored
                security solutions, our team is ready to assist you 24/7. Let us
                know your needs.
              </p>
              <ul>
                <Animation
                  className="animate__animated animate__fadeInUp"
                  delay="100ms"
                >
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h5 className="title">Hotline</h5>
                      <a href="tel:+919999999999">+91 99922 11889</a>
                    </div>
                  </li>
                </Animation>

                <Animation
                  className="animate__animated animate__fadeInUp"
                  delay="300ms"
                >
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h5 className="title">Head Office</h5>
                      <p>
                        DylVault HQ, Sector 45,
                        <br /> Gurgaon, Haryana, India
                      </p>
                    </div>
                  </li>
                </Animation>

                <Animation
                  className="animate__animated animate__fadeInUp"
                  delay="500ms"
                >
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open-text" />
                    </div>
                    <div className="info">
                      <h5 className="title">Email Us</h5>

                      <a href="mailto:contact@dylvault.com">
                        support@dylvault.com
                      </a>
                      <br />
                      <a href="mailto:contact@dylvault.com">
                        team@dylvault.com
                      </a>
                    </div>
                  </li>
                </Animation>
              </ul>
            </div>
          </div>

          <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
            <div className="contact-form-style-one">
              <h2 className="heading">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="form-control"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-md btn-theme"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsV1;
