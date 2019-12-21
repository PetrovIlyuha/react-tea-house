import React from "react";
import Hero from "../components/Hero";
import defaultBackground from "../images/defaultBackground.jpg";
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <>
      <Hero img={defaultBackground} title="404" maxHeight>
        <h2 className="text-uppercase">Page not Found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          Return to Store
        </Link>
      </Hero>
    </>
  );
}
