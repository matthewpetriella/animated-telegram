import React from "react";
import { useLocation } from "react-router-dom";
const ViewCart = (props) => {
  const cart = useLocation().state;
  console.log(cart, useLocation().state);
  return (
    <div>
      {cart.map((element, i) => (
        <>
          <h6>{element.name}</h6>
          <p>{element.price}</p>
          <p> {element.qty}</p>
        </>
      ))}
    </div>
  );
};

export default ViewCart;
