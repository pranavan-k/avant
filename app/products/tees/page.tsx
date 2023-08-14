"use client";
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import Product from "@/app/components/product";

export const metadata : Metadata = {
  title: "Tees"
}

function Tees() {
  const [productsData, setFetchedData] = useState([]);

  const fetchedData = async () => {
    const res = fetch(`/api/products/tees`, {
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
    <main className="w-screen flex justify-around lg:flex-row flex-col">
      {productsData.map((product: any, key) => {
        return (<Product key={key} id={product._id} name={product.name} imageId={product.imageId} price={product.price} qty={product.qty}/>);
      })}
    </main>
  );
}

export default Tees;
