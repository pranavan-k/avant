import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Source_Serif_4, EB_Garamond } from "next/font/google";

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
});

const eb_garamond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
});

function Product({ id, name, price, imageId, qty, children }: any) {
  return (
    <Link href={`/products/mens/${id}`} className="col-span-1">
      <div className="flex justify-center p-2">
        <CldImage
          alt="product image"
          width="1100"
          height="1400"
          src={imageId}
          placeholder="blur"
          blurDataURL={imageId}
          className="w-full h-auto"
        />
      </div>
      <div className="ml-5 flex flex-col gap-1">
        <h1 className={`${source_serif.className}`}>{name}</h1>
        <h3 className={`${eb_garamond.className} text-base`}>{price}</h3>
      </div>
    </Link>
  );
}

export default Product;
