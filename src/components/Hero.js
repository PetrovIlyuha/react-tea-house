import React from "react";
import styled from "styled-components";
import mainBackGround from "../images/heroHome.jpg";

export default function Hero({ img, title, children }) {
  return (
    <HeroWrapper img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.maxHeight ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 2.5rem;
    color: #7ff5ce;
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
  @media (max-width: 768px) {
    min-height: 40vh;
  }
`;

Hero.defaultProps = {
  img: mainBackGround
};
