import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import home_splash from "../public/images/home-splash2.png";
import { Source_Serif_4 } from "next/font/google";
import { Tajawal } from "next/font/google";

const ysabeau_infant = Tajawal({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "WaveCo Streetwear is an independent streetwear company created in 2023. Shop streetwear tees, hoodies, pants, and even design custom  clothing",
};

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  /*
  const [productsData, setFetchedData] = useState([])

  const fetchedData = async (data:any) => {
    const res = fetch("http://localhost:3000/api/products/tees", {method: "GET"})
    .then(response => 
      {return response.json()}
      )
    .then((data:any) => {
      setFetchedData(data.data)
    })
  }

  console.log(productsData)
  ----------------------------------------------------------------
  <button onClick={fetchedData}>Click me</button>
      <div>
        {productsData.map((item:any, key) => {
          return <h1 key={key}>{item.name}</h1>
        })}
      </div>
  */
  return (
    <div>
      <main>
        <div className="flex lg:flex-row flex-col w-screen h-screen">
          <div className="lg:w-1/2 lg:p-9 w-screen">
            <Image
              className="lg:w-full h-auto"
              src={home_splash}
              alt="WaveCO homepage image"
              sizes="100vw"
            />
          </div>
          <div className="lg:w-1/2 w-screen h-screen flex lg:p-16 p-5 lg:items-start lg:gap-8 items-center lg:text-left text-center flex-col lg:justify-center">
            <h1
              className={`${source_serif.className} lg:text-6xl text-5xl lg:m-0 my-3`}
            >
              Shop The Latest Streetwear
            </h1>
            <p className={`${ysabeau_infant.className} text-lg`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
              deserunt beatae dolor eligendi provident, earum incidunt
              praesentium. Omnis temporibus fugit esse natus quas ex sed illo,
              nisi incidunt error.
            </p>
            <Link
              href="/"
              className="w-40 h-10 lg:hover:text-white lg:text-slate-900 text-white lg:border-2 mt-9 transition-all duration-75 ease-linear lg:border-slate-900 items-center flex justify-center rounded-full bg-slate-900 lg:bg-white hover:lg:bg-slate-900"
            >
              Shop Latest
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
