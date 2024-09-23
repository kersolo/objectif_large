"use client";
import React from "react";
import { StickyNavbar } from "../components/StickyNavbar";
import ourValuesBanner from "../../../public/ourValuesBanner.jpg";

export default function OurValues() {
  return (
    <>
      <StickyNavbar picture={ourValuesBanner} />
      <div>
        <h1>NOS ATOUTS, NOS GARANTIES, NOS DIFFÉRENCES ...</h1>
      </div>
    </>
  );
}
