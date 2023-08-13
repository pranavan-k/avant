import Image from "next/image";
import Head from "next/head"
import type { Metadata } from 'next'
import home_splash from "../public/images/home-splash2.png"

export const metadata: Metadata = {
  description: '...',
}

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
          <div className="lg:w-1/2 lg:p-32 w-screen">
            <Image className="lg:w-full h-auto" src={home_splash} alt="WaveCO homepage image" sizes="100vw"/>
          </div>
          <div className="lg:w-1/2 w-screen flex items-center text-center flex-col">
            <h2>Shop The Latest Streetwear</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos deserunt beatae dolor eligendi provident, earum incidunt praesentium. Omnis temporibus fugit esse natus quas ex sed illo, nisi incidunt error.</p>
          </div>
        </div>
      </main>
    </div>
    
  );
}
