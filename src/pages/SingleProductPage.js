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
                    <img
                      src={image}
                      alt="single product"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">Tea Type: {title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      Producer: {company}
                    </h5>
                    <h5 className="text-main text-capilize mb-4">
                      Price: ${price} /100g
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      Tea Details:
                    </p>
                    <p style={{ fontWeight: "bold" }}>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      Add to Cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      Back To Products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
