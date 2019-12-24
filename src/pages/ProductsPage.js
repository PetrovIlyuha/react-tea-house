import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import ProductBackground from "../images/productsPageBackground.jpg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={ProductBackground} />
      <Products />
    </>
  );
}
