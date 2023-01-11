import React from "react";
import { Carousel } from "antd";
import "./index.scss";

const Home = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <main>
      <div className="carousel">
        <Carousel effect="fade" autoplay autoplaySpeed={5000}>
          <div>
            <div className="container">
              <h3 style={contentStyle}>1</h3>
            </div>
          </div>
          <div>
            <div className="container">
              <h3 style={contentStyle}>2</h3>
            </div>
          </div>
          <div>
            <div className="container">
              <h3 style={contentStyle}>3</h3>
            </div>
          </div>
          <div>
            <div className="container">
              <h3 style={contentStyle}>4</h3>
            </div>
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
