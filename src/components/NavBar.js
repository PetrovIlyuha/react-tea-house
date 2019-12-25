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
                <GiSplitCross
                  className="nav-icon-left"
                  onClick={handleSidebar}
                />
              ) : (
                <FaBars className="nav-icon-left" onClick={handleSidebar} />
              )}
              <div className="logo-section">
                <img src={logo} alt="company brand logo" className="teapot" />
                <h1 className="brand">
                  Tea <span className="logo-span">House</span>
                </h1>
              </div>
              <div className="nav-cart">
                <FaCartPlus
                  className="nav-icon-right"
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
  padding: 0.2rem 1.5rem;
  background: linear-gradient(to left, #003973, #e5e5be);
  /* background: var(--primaryColor); */
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
    font-size: 3rem;
    color: #2a4729;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    float: right;
    text-align: center;
    border-radius: 50%;
    border: 2px solid lightcoral;
    background-color: #2d2d2d;
    color: #aafe0e;
    width: 26px;
    height: 26px;
    font-size: 0.8rem;
    position: absolute;
    right: -14px;
    top: -14px;
    padding-left: 1px;
    padding-top: 2px;
    letter-spacing: 0.5px;
  }

  .teapot {
    padding-right: 10px;
    margin-bottom: 10px;
  }
  .nav-icon-right {
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }

  .nav-icon-left {
    font-size: 1.5rem;
    cursor: pointer;
    color: green;
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

  @media (max-width: 768px) {
    .brand {
      font-size: 2rem;
    }
    .logo-section {
      font-size: 1rem;
    }

    .teapot {
      width: 20%;
    }
    .nav-icon-right {
      font-size: 1.2rem;
    }
    .nav-icon-left {
      font-size: 1.2rem;
    }
  }
`;
