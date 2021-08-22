import React from "react";

const getProducts = () => {
  return (dispatch) => {
    fetch("/assets/database.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: data,
        });
      });
  };
};

export { getProducts };
