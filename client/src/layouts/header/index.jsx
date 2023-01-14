import React from "react";
import BrandLinks from "../../components/brand-links";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div id="header-top-area">
        <div className="container">
          <div id="top-left-area">
            <ul>
              <li>
                <a href="mailto:example@example.com">
                  <i className="fi fi-sr-envelope ico"></i>
                  example@example.com
                </a>
              </li>
              <li>
                <a>
                  <i className="fi fi-sr-marker ico"></i>
                  3B, Sector 1, Address, City
                </a>
              </li>
            </ul>
          </div>
          <div id="top-right-area">
            <BrandLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
