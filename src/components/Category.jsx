import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

// import { useDispatch,useSelector } from 'react-redux'

const Category = () => {
  const products = useSelector((state) => state.products);
  const { category } = useParams();
  const [likes, setLikes] = useState(0);

  const Images = [
    {
      Image: "/img/art.jpg",
      Category: "Art",
    },
    {
      Image: "/img/sports.jpg",
      Category: "Sports",
    },
    {
      Image: "/img/trading_cards.jfif",
      Category: "Collectibles",
    },
    {
      Image: "/img/collectibles.jpg",
      Category: "Trading Cards",
    },
  ];

  const categoryProducts = products.filter(
    (product) => category === product.Category
  );
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="d-flex flex-column align-items-center">
          <img
            src={Images.filter((image) => image.Category === category)[0].Image}
            width="100%"
          ></img>
          <h1 className="card-title">Explore {category}</h1>
          <p className="card-text" style={{ width: "40%" }}>
            An online community of makers, developers, and traders is pushing
            the art world into new territory. It all started with CryptoPunks, a
            set of 10,000 randomly generated punks that proved demand for the
            digital ownership of non-physical items and collectibles in 2017,
            and the market has evolved rapidly ever since.
          </p>
          <p className="collapse" id="collapseExample" style={{ width: "40%" }}>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <div
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src="/img/down-arrow.png"></img>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-wrap"
        style={{ width: "80%", margin: "auto" }}
      >
        {categoryProducts.map((pr) => (
          <div
            className="d-flex flex-column align-items-center"
            style={{
              width: "20%",
              padding: "10px",
            }} /* , border: "2px solid red"*/
          >
            <div className="d-flex flex-row-reverse" style={{ width: "100%" }}>
              <div>
                <img
                  src="/img/heart.png"
                  onClick={() => setLikes(likes + 1)}
                ></img>
                {likes ? likes : null}
              </div>
            </div>
            <img src={pr.Image} height="200px" width="100%"></img>
            <div className="container">
              <div className="row" style={{ fontSize: "0.8rem" }}>
                <div className="col-8">{pr.Name}</div>
                <div className="col">
                  Min bid.
                  <div>
                    <img src="/img/ruby.png"></img>
                    <span>{pr.Price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
