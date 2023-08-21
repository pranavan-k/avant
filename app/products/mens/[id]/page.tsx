"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { Source_Serif_4, Prata } from "next/font/google";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const source_serif = Source_Serif_4({
  weight: ["400"],
  subsets: ["latin"],
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
});

function ProductPage({ params }: { params: { id: string } }) {
  const [data, setProductData] = useState([]);

  const fetchedProduct = async () => {
    const productData = fetch(`/api/products/mens/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      });
  };

  useEffect(() => {
    fetchedProduct();
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      {data.map((product: any) => {
        return (
          <span className="w-screen flex lg:flex-row flex-col justify-center lg:pt-24 pt-14">
            <div className="grid lg:w-1/2 lg:overflow-y-auto overflow-x-auto lg:h-screen grid-flow-col auto-cols-[100%] lg:grid-flow-row">
              <CldImage
                src={product.imageId}
                alt="product image"
                width={1100}
                height={1400}
                className="w-full h-full"
              />
              <CldImage
                src={product.imageId}
                alt="product image"
                width={1100}
                height={1400}
                className="w-full h-full"
              />
            </div>
            <div className="lg:w-1/2 p-7 h-full">
              <div className={`${source_serif.className} lg:p-10 p-3 mb-6`}>
                <p>
                  Mens | <Link href="/products/mens">All Clothing</Link>
                </p>
              </div>
              <div className="lg:p-10 flex justify-center flex-col lg:h-2/5">
                <div className={`${prata.className} text-4xl mb-1`}>
                  {product.name}
                </div>
                <p className={`${source_serif.className} text-base mb-3`}>
                  {product.price}
                </p>
                <p className={`${source_serif.className}`}>
                  <strong>Colour:</strong> Navy
                </p>
                <div
                  className={`${source_serif.className} flex mt-28 justify-center items-center w-full h-11 bg-black text-white`}
                >
                  {" "}
                  Add To Cart
                </div>
                <p className="pt-11">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  neque maxime illo possimus nobis soluta non, debitis, ipsum
                  laboriosam ducimus, necessitatibus cum id modi explicabo.
                  Quidem quasi illum reiciendis iste, sapiente ad temporibus.
                </p>
              </div>
            </div>
          </span>
        );
      })}
    </main>
  );
}

export default ProductPage;
