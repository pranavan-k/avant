import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const fetchedData = await fetch("https://waveco-api-production.up.railway.app/tees")
    const data = await fetchedData.json()
    console.log(data)
    return NextResponse.json({data})
}