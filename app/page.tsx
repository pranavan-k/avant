import Image from "next/image";

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
      <h1>Hello</h1>
    </div>
  );
}
