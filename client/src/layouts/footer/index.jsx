import React from "react";
import BrandLinks from "../../components/brand-links";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-about-area">
        <div className="container">
          <div className="about-items">
            <div className="footer-logo">
              <div className="site-logo">
                <a href="/">
                  <img
                    srcSet="//cdn.shopify.com/s/files/1/0027/0952/0502/files/logo_150x.png?v=1666114323 1x, //cdn.shopify.com/s/files/1/0027/0952/0502/files/logo_150x@2x.png?v=1666114323 2x"
                    src="//cdn.shopify.com/s/files/1/0027/0952/0502/files/logo_150x.png?v=1666114323"
                    loading="lazy"
                    alt="New99"
                  />
                </a>
              </div>
            </div>
            <div className="footer-address">
              <ul>
                <li>
                  <div className="footer-address-info">
                    <p>
                      <strong>Address</strong>: 3B, Sectior 1, Address, City,
                      Country.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="footer-address-info">
                    <p>
                      <strong>Phone</strong>: +0123-456789
                    </p>
                  </div>
                </li>
                <li>
                  <div className="footer-address-info">
                    <p>
                      <strong>Email</strong>: example@example.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer-brands">
              <BrandLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="bottom-items">
            <div className="copyright">
              <p>
                Copyright ©<strong>New99</strong> All Right Reserved.
              </p>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="/policies/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/policies/refund-policy">Refund Policy</a>
                </li>
                <li>
                  <a href="/policies/terms-of-service">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
