import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const fetchedData = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await fetchedData.json();
  console.log(data);
  return NextResponse.json({ data });
}
