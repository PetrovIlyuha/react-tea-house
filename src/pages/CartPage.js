import React from "react";
import Hero from "../components/Hero";
import CartBackground from "../images/cartBack.jpg";
import CartSection from "../components/CartPage";

export default function CartPage() {
  return (
    <>
      <Hero img={CartBackground} />
      <CartSection />
    </>
  );
}
