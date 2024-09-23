"use client";
import React from "react";
import { StickyNavbar } from "../components/StickyNavbar";
import contactBanner from "../../../public/contactBanner.jpg";

export default function Contact() {
  return (
    <>
      <StickyNavbar picture={contactBanner} />
      <div>
        <h1>CONTACT</h1>
      </div>
    </>
  );
}
