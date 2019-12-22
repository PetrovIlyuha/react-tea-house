import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-capitalize">
                    copyright &copy; Tea House {new Date().getFullYear()} all
                    right reserved
                  </p>
                </div>
                <div className="col-md-4 d-flex justify-content-around">
                  {value.socialIcons.map(item => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  @media (max-width: 768px) {
    .text-capitalize {
      text-align: center;
    }
  }
  background: #364552;
  color: var(--mainWhite1);
  .icon {
    font-size: 1.6rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    cursor: pointer;
  }
  .icon:hover {
    color: var(--primaryColor);
  }
  .text-capitalize {
    color: white;
  }
`;
