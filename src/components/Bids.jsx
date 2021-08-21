// import React, { useState } from "react";
import { BidsData } from "./BidsData";
import "bootstrap/dist/css/bootstrap.min.css";

const Bids = () => {
  // const [rank, setRank] = useState(1);
  // const rank = []
  // BidsData.map((item, index) => {
  //   rank.push(item.bidamt)
  // })
  // rank.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log(rank)


  return (
    <div className="your-bids" style={{ height: "100vh", width: "80vw", margin: "0 auto" }}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Rank change</th>
            <th scope="col">bidamt</th>
            <th scope="col">Expires-in</th>
          </tr>
        </thead>
        <tbody>
          {BidsData.map((item, index) => {
            return (
              <tr className={item.cName} key={index} style={{border: "1px solid black", borderRadius: "15px"}}>
                <img
                  src={item.Image}
                  alt="item picture"
                  style={{ height: "222px", width: "154px" }}
                ></img>
                <td>{index}</td>
                <td>{item.bidamt}</td>
                <td>{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
