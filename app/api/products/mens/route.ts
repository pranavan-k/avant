import clientPromise from "@/app/lib/mongo/mongo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("avant_database");

    const products = await db
      .collection("mens")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
  }
}

/*
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const fetchedData = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await fetchedData.json();
  console.log(data);
  return NextResponse.json({ data });
}
*/
