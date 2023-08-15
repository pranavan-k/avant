import React from "react";
import type { Metadata } from "next";
import TeesDisplay from "@/app/components/teesDisplay";

export const metadata : Metadata = {
  title: "Shop Tees - Streetwear and graphic tees"
}

function Tees() {
  return (
    <div>
      <TeesDisplay />
    </div>
  );
}

export default Tees;
