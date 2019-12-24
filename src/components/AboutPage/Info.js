import React from "react";
import Title from "../Title";
import aboutBackground from "../../images/aboutBackground.jpg";
import styled from "styled-components";

export default function Info() {
  return (
    <StyledAboutSection className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBackground}
              className="img-fluid img-thumbnail"
              alt="about our tea company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About our Company" />
            <p className="text-lead text-muted my-3">
              Tea House &reg; Company was incorporated in 2016. The company
              owned a tea estate at Silchar (Cachar district) Assam. Company has
              undertaken job contract for development of 650 acers of land for
              tea cultivation i.e. Nathsol Tea estate & Srikona Tea estate this
              will help to improve the bottomline.
            </p>
            <p className="text-lead text-muted my-3">
              {" "}
              Tea House &reg; seeks to create and promote great-tasting,
              healthy, organic beverages. We strive to grow our business with
              the same honesty and integrity we use to craft our recipes, with
              sustainability and great taste for all. Honest Tea's mission
              statement aims to live up to their brand name.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              More About Us
            </button>
          </div>
        </div>
      </div>
    </StyledAboutSection>
  );
}

const StyledAboutSection = styled.section`
  box-shadow: -1px -10px 20px -4px rgba(0, 0, 0, 0.75);
`;
