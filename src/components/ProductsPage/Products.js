import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

export default function ProductsPage() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />
              {/* Product Filter */}
              <ProductFilter />
              <div className="row">
                {/* Total Count */}
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Available Product Due to Price: {filteredProducts.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    No Products Matched Your Searched Price
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
