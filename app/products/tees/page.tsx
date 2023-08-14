"use client";
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";

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
    <div>
      {productsData.map((product: any, key) => {
        return (<div key={key}>{product._id}</div>);
      })}
    </div>
  );
}

export default Tees;
