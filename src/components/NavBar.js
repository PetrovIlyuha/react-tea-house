import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import "../App.css";

import { GiSplitCross } from "react-icons/gi";

import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.png";

export default function NavBar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart, sidebarOpen } = value;
        return (
          <NavWrapper className="text-title">
            <div className="nav-center">
              {sidebarOpen ? (
                <GiSplitCross className="nav-icon" onClick={handleSidebar} />
              ) : (
                <FaBars className="nav-icon" onClick={handleSidebar} />
              )}
              <div className="logo-section">
                <img src={logo} alt="company brand logo" className="teapot" />
                <h1 className="brand">
                  Tea <span className="logo-span">House</span>
                </h1>
              </div>
              <div className="nav-cart">
                <FaCartPlus
                  className="nav-icon"
                  onClick={handleCart}
                ></FaCartPlus>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--primaryColor);
  border-bottom: 2px solid var(--primaryColor);
  box-shadow: -2px 2px 18px -1px rgba(18, 18, 20, 1);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  .brand {
    font-size: 4rem;
    color: #2a4729;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    position: absolute;
    background: lightyellow;
    color: var(--primaryColor);
    font-size: 0.9rem;
    top: -16px;
    right: -17px;
    padding: 3px 3px;
    border-radius: 50%;
    border: 1px solid darkgreen;
  }

  .teapot {
    padding-right: 10px;
    margin-bottom: 10px;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
  .logo-section {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }

  .logo-section .logo-span {
    color: gold;
    margin-left: -20px;
  }
`;
