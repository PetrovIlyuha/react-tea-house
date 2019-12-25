import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        <div className="col-lg-2">
          <p className="text-uppercase text-title">Product</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase text-title">Tea Name</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase text-title">Price</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase text-title">Quantity</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase text-title">Remove</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase text-title">Total</p>
        </div>
      </div>
    </div>
  );
}
