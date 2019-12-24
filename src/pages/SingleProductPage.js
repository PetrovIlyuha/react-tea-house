import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SingleProductBack from "../images/singleProductBack.jpg";
import { ProductConsumer } from "../context";

export default function SingleProductPage() {
  return (
    <>
      <Hero img={SingleProductBack} title="Single product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("Hello from loading state...");
            return <h1>Product Loading...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img src={`../${image}`} alt="single product" />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3"></div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
