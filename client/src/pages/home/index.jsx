import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "better-react-carousel";
import "./index.scss";
import { fetchData } from "../../redux/slice/getDataSlice";

const Home = () => {
  const myData = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main>
      <Carousel cols={5} rows={2} gap={10} loop>
        {myData.data?.map((el) => {
          return (
            <Carousel.Item key={el.id}>
              <div>
                <div className="image">
                  <img src={`${el.img}`} alt="" />
                </div>
                <div className="product-info">
                  <h3>{el.name}</h3>
                  {el.discountPrice ? (
                    <>
                      <a
                        style={{ textDecoration: "line-through" }}
                      >{`${el.price}$`}</a>
                      <a style={{ color: "red" }}>
                        <strong>{`  ${el.price}$`}</strong>
                      </a>
                    </>
                  ) : (
                    <a>
                      <strong>{`${el.price}$`}</strong>
                    </a>
                  )}
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </main>
  );
};

export default Home;
