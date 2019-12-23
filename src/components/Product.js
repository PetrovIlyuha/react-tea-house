import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  className="cart-img-top p-5 br-3"
                  src={product.image}
                  alt="single product"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "20%",
                    objectFit: "cover"
                  }}
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div className="cart-body d-flex justify-content-around py-3">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.article`
  .card {
    box-shadow: 4px 6px 12px -1px rgba(0, 0, 0, 0.41);
    transition: var(--mainTransition);
    height: 100%;
  }

  .card:hover {
    box-shadow: 7px 10px 12px -1px rgba(0, 0, 0, 0.53);
    cursor: pointer;
  }

  .cart-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .cart-img-top {
    transform: scale(1.1);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .cart-body {
    font-weight: bold;
    text-transform: uppercase;
  }
`;
