import React from "react";
import { GiApothecary } from "react-icons/gi";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBackGround from "../images/heroHome.jpg";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Marvelous Teas of Precious China"
        img={mainBackGround}
        maxHeight
      >
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Our Products
        </Link>
      </Hero>
    </>
  );
}
