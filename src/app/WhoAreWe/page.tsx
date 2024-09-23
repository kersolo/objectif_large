"use client";
import React from "react";
import { StickyNavbar } from "../components/StickyNavbar";
import whoAreWeBanner from "../../../public/whoAreWeBanner.jpg";

export default function WhoAreWe() {
  return (
    <>
      <StickyNavbar picture={whoAreWeBanner} />
      <div>
        <h1>QUI SOMMES NOUS ?</h1>
      </div>
    </>
  );
}
