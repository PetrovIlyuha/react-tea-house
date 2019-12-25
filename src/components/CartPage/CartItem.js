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
        <img
          src={image}
          width="50"
          className="img-fluid"
          alt="product item"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="text-title">{title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2 text-muted">
        <strong>${price}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleUp
              className="cart-icon text-primary"
              onClick={() => increment(id)}
              style={{ fontSize: "1.2rem" }}
            />
            <span className="text-title text-muted px-3 pb-4">{count}</span>
            <FaChevronCircleDown
              className="cart-icon text-primary"
              onClick={() => decrement(id)}
              style={{ fontSize: "1.2rem" }}
            />
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          className="cart-icon text-danger"
          onClick={() => removeItem(id)}
          style={{ fontSize: "1.2rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="text-muted">{total}</strong>
      </div>
    </div>
  );
}
