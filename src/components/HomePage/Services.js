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
        id: 2,
        icon: <GiTeapot />,
        title: "Tea Professionals",
        text:
          "We provide custom made Tea for your ceremonies in accordance with your taste"
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "Secured Payment",
        text:
          "We have partnered with VISA, PayPal and Stripe since 2018 to accept credit cards payments securely"
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-19 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <p className="mt-3 text-capitalize">{item.title}</p>
                  <p className="mt-3">{item.text}</p>
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
  background: rgba(149, 245, 71, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--primaryColor);
  }
`;
