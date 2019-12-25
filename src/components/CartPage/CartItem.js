import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="50" className="img-fluid" alt="product item" />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">{title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">${price}</div>
      <div className="col-10 mx-auto col-lg-2 pb-2">{count}</div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <FaTrash />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">{total}</div>
      {/* <FaChevronCircleUp /> */}
      {/* <FaChevronCircleDown /> */}
    </div>
  );
}
