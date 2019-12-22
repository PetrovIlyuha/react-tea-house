import React from "react";
import Hero from "../components/Hero";
import ContactImage from "../images/contactImg.jpg";
import Contact from "../components/ContactPage/Contact";

export default function ContactPage() {
  return (
    <>
      <Hero img={ContactImage} />
      <Contact />
    </>
  );
}
