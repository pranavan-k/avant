import clientPromise from "@/app/lib/mongo/mongo";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  try {
    const client = await clientPromise;
    const db = client.db("avant_database");

    const products = await db
      .collection("mens")
      .find({ _id: { $eq: new ObjectId(id) } })
      .toArray();
    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
  }
}
