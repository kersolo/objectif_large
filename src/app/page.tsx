"use client";
import { StickyNavbar } from "./components/StickyNavbar";
import homeBanner from "../../public/homeBanner.jpg";

export default function Home() {
  return (
    <>
      <StickyNavbar picture={homeBanner} />
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}
