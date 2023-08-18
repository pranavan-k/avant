import React from 'react'
import { CldImage } from 'next-cloudinary';
import { Tajawal } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
});

const ysabeau_infant = Tajawal({
  weight: ["400"],
  subsets: ["latin"],
});

function Product({id, name, price, imageId, qty, children} : any) {
  return (
    <div>
        <div className='flex justify-center p-2'>
            <CldImage
            width="550"
            alt="product image"
            height="550"
            src={imageId} 
            placeholder="blur"
            blurDataURL={imageId}
            className='w-full h-auto'/>
        </div>
        <div className='ml-5 flex flex-col gap-1'>
            <h1 className={`${source_serif.className}`}>{name}</h1>
            <h3 className={`${ysabeau_infant.className} text-lg`}>{price}</h3>
        </div>
    </div>
  )
}

export default Product