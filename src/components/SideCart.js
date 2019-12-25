import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul className="mt-3">
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img width="35px" src={item.image} alt="cart item" />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        Amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main mx-3">
              cart total: ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                Cart Page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 83px;
  right: -3px;
  width: 0;
  height: 100%;
  box-shadow: -2px 0px 15px -2px rgba(0, 0, 0, 0.75);
  background: var(--mainGrey);
  z-index: 2;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  @media (max-width: 768px) {
    top: 48px;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0;
  }
  .cart-item {
    list-style-type: none;
  }
`;
