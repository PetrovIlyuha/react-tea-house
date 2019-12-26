import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts
        } = value;
        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <ProductFilterWrapper>
                {/* text search input */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}
                {/* category search */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    onChange={handleChange}
                    value={company}
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end of category search */}
                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price: <span>$ {price}</span>{" "}
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* end of price range */}
                {/* free shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
                {/* end of free shipping */}
              </ProductFilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const ProductFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 3.8px 0;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #30f4a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #ffffff;
    height: 16px;
    width: 16px;
    border-radius: 400px;
    background: #22157a;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #48f5b3;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #30f4a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #ffffff;
    height: 16px;
    width: 16px;
    border-radius: 400px;
    background: #22157a;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #18f39f;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-ms-fill-upper {
    background: #30f4a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #ffffff;
    height: 16px;
    width: 16px;
    border-radius: 400px;
    background: #22157a;
    cursor: pointer;
    height: 8.4px;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #30f4a9;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #48f5b3;
  }
`;
