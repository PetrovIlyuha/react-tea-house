import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBackground from "../images/aboutBackground.jpg";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBackground} />
      <Info />
    </>
  );
}
