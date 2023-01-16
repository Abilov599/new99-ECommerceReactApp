import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "better-react-carousel";
import "./index.scss";
import { fetchData } from "../../redux/slice/getDataSlice";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const Home = () => {
  const myData = useSelector((state) => state.getData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => setOpen(true), 9000);
  }, []);

  return (
    <main>
      {/* modal */}
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        width={1000}
      >
        <div className="modal" style={{ display: "flex" }}>
          <div className="img" style={{ paddingRight: "30px" }}>
            <img
              src="//cdn.shopify.com/s/files/1/0027/0952/0502/files/Newletter_3_1200x.png?v=1667492537"
              width="445"
              height="535"
              alt=""
            />
          </div>
          <div className="newsletter-popup-info">
            <h2>NEWSLETTER</h2>
            <p>
              Enter your email below to receive a $30 coupon, special offers,
              exclusive discounts and more!
            </p>
            <form action="">
              <input type="text" />
              <br />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </Modal>
      {/* modal */}

      <section id="top-section" style={{ backgroundColor: "#F2F6F7" }}>
        <div className="container">
          <Carousel autoplay={5000} dotColorActive={"#F8796C"} showDots loop>
            <Carousel.Item>
              <div id="carousel-container">
                <div className="left-side">
                  <h4 style={{ fontSize: "20px", color: "#F8796C" }}>
                    Life is very easy with
                  </h4>
                  <h1 style={{ fontSize: "50px" }}>
                    Coffee Machine Handmade Collection
                  </h1>
                </div>
                <div className="right-side">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/slide-image-13_600x.png?v=1668139803s"
                    alt=""
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id="carousel-container">
                <div className="left-side">
                  <h4 style={{ fontSize: "20px", color: "#F8796C" }}>
                    Special offers
                  </h4>
                  <h1 style={{ fontSize: "50px" }}>
                    Winter Collection
                    <br />
                    Knitting Stocking
                  </h1>
                </div>
                <div className="right-side">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/slide-image-14_600x.png?v=1668141544"
                    alt=""
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <div className="products">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "700" }}>New Arrivals</h1>
          <p>There are many variations of passages</p>
        </div>
        <Carousel cols={5} rows={2} gap={10} loop>
          {myData.data?.map((el) => {
            return (
              <Carousel.Item key={el.id}>
                <Link to={`${el.id}`}>
                  <div className="image">
                    <img src={`${el.img}`} alt="" />
                  </div>
                  <div className="product-info">
                    <h3>{el.name}</h3>
                    {el.discountPrice ? (
                      <div style={{ display: "flex", gap: "5px" }}>
                        <p
                          style={{ textDecoration: "line-through" }}
                        >{`${el.price}$`}</p>
                        <p
                          style={{ color: "red", fontWeight: "bold" }}
                        >{`${el.price}$`}</p>
                      </div>
                    ) : (
                      <p style={{ fontWeight: "bold" }}>{`${el.price}$`}</p>
                    )}
                  </div>
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
