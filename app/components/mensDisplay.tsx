"use client";
import React, { useState, useEffect } from "react";
import Product from "./product";

function MensDisplay() {
  const [productsData, setFetchedData] = useState([]);

  const fetchedData = async () => {
    const res = fetch(`/api/products/mens`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedData(data);
      });
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <main>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 grid-rows-auto">
        {productsData.map((product: any) => {
          return (
            <Product
              key={product.id}
              id={product._id}
              name={product.name}
              imageId={product.imageId}
              price={product.price}
              qty={product.qty}
            />
          );
        })}
      </div>
    </main>
  );
}

export default MensDisplay;
