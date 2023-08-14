import React from "react";
import type { Metadata } from "next";
import TeesDisplay from "@/app/components/teesDisplay";

export const metadata : Metadata = {
  title: "Tees"
}

function Tees() {
  return (
    <div>
      <TeesDisplay />
    </div>
  );
}

export default Tees;
