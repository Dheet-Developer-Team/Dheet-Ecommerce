// import React, { useState } from "react";
import { BidsData } from "./BidsData";
import "bootstrap/dist/css/bootstrap.min.css";

const Bids = () => {
  // const [rank, setRank] = useState(1);

  return (
    <div className="your-bids">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">bidamt</th>
            <th scope="col">Expires-in</th>
          </tr>
        </thead>
        <tbody>
          {BidsData.map((item, index) => {
            return (
              <tr key={index}>
                <img
                  src={item.Image}
                  alt="item picture"
                  style={{ height: "222px", width: "154px" }}
                ></img>
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
