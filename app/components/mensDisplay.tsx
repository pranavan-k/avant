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
    <main className="w-full flex justify-between lg:flex-row flex-col">
      {productsData.map((product: any, key) => {
        return (
          <Product
            key={key}
            id={product._id}
            name={product.name}
            imageId={product.imageId}
            price={product.price}
            qty={product.qty}
          />
        );
      })}
    </main>
  );
}

export default MensDisplay;
