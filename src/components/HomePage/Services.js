import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaDollarSign } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "Free Shipping from only $30",
        text: `We provide Free delivery on all orders starting from $30`
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "Secured Payment",
        text:
          "We have partnered with VISA, PayPal and Stripe since 2018 to accept credit cards payments securely"
      },
      {
        id: 2,
        icon: <GiTeapot />,
        title: "Tea Professionals",
        text:
          "We provide custom made Tea for your ceremonies in accordance with your taste"
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper>
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div className="col mx-auto col-md-4 text-center" key={item.id}>
                  <div className="service-icon">{item.icon}</div>
                  <p className="text-capitalize">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  box-shadow: -1px -10px 20px -4px rgba(0, 0, 0, 0.75);
  padding: 10px;
  background: rgba(149, 245, 71, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--primaryColor);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: -10px -10px;
    .service-icon {
      font-size: 2rem;
      color: var(--primaryColor);
    }
    p {
      color: var(--primaryColor);
      font-size: 0.8rem;
    }
  }
`;
