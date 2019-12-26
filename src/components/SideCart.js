import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const {
          cartOpen,
          closeCart,
          cart,
          cartTotal,
          increment,
          decrement,
          removeItem
        } = value;
        return cart.length ? (
          <CartWrapper show={cartOpen}>
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
                      <FaChevronCircleUp
                        className="cart-icon text-primary"
                        onClick={() => increment(item.id)}
                        style={{ fontSize: "1.2rem", marginRight: "6px" }}
                      />
                      <FaChevronCircleDown
                        className="cart-icon text-primary"
                        onClick={() => decrement(item.id)}
                        style={{ fontSize: "1.2rem" }}
                      />
                      <FaTrash
                        className="cart-icon text-danger"
                        onClick={() => removeItem(item.id)}
                        style={{ fontSize: "1.2rem", marginLeft: "30px" }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main mx-3">
              cart total: ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link" onClick={closeCart}>
                Cart Page
              </Link>
            </div>
          </CartWrapper>
        ) : null;
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
