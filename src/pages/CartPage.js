import React from "react";
import Hero from "../components/Hero";
import CartBackground from "../images/cartBack.jpg";
import CartSection from "../components/CartPage";
import { Link } from "react-router-dom";

export default function CartPage(props) {
  return (
    <>
      <Hero img={CartBackground}>
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Our Products
        </Link>
      </Hero>
      <CartSection history={props.history} />
    </>
  );
}
