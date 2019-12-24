import React from "react";
import CartColumns from "./CartColumns";
import Title from "../Title";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center />
        <CartColumns />
        <CartList></CartList>
      </div>
      <CartTotals />
    </section>
  );
}
