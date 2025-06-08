import FooterNewsLetter from '../form/FooterNewsLetter';
import { Link } from 'react-router-dom';
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json";
const EMAIL = "support@dylvault.com";
const PHONE = " +91 9992211889";
const LOCATION = "123 Secure Avenue, Sector 15, Gurgaon, Haryana 122001";

const LINKS_QUICK = [
  // { to: "/about-us", label: "About Us" },
  { to: "/contact-us", label: "Contact Support" },
  { to: "/services", label: "Our Services" },
  { to: "/blog", label: "Blog & News" },
];

const FOOTER_BOTTOM_LINKS = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

const COPYRIGHT_LINK = "https://dylvault.com";
const COPYRIGHT_AUTHOR = "Dyl Vault";

const FooterV1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-dark overflow-hidden text-light">
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                <div className="f-item address">
                  <ul className="contact-address">
                    <li>
                      <p>Need Assistance?</p>
                      <h4>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                      </h4>
                    </li>
                    <li>
                      <p>Call Us Anytime</p>
                      <h4>
                        <a href={`tel:${PHONE}`}>tel:{PHONE}</a>
                      </h4>
                    </li>
                    <li>
                      <p>Our Headquarters</p>
                      <h4>{LOCATION}</h4>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul>
                    {LINKS_QUICK.map(({ to, label }, i) => (
                      <li key={i}>
                        <Link to={to}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Services</h4>
                  <ul>
                    {ServicesV1Data.map((service, i) => (
                      <li key={i}>
                        <Link to={`/services/${service.id}`}>{service.titleFirst+" "+service.titleLast}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 footer-item">
                <div className="f-item newsletter">
                  <p>
                    Subscribe to receive updates, security tips, and exclusive offers.
                  </p>
                  <FooterNewsLetter />
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  &copy; Copyright {currentYear}. All Rights Reserved by{" "}
                  <a href={COPYRIGHT_LINK} target="_blank" rel="noopener noreferrer">
                    {COPYRIGHT_AUTHOR}
                  </a>
                </p>
              </div>

              <div className="col-lg-6 text-end">
                <ul className="link-list">
                  {FOOTER_BOTTOM_LINKS.map(({ to, label }, i) => (
                    <li key={i}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
