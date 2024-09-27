"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import logo_objectifLarge from "../../../public/logo_objectifLarge.svg";
import NavBarItem from "./NavBarItem";
import Link from "next/link";
import { StickyNavbarInterface } from "../services/interfaces/StickyNavbarInterface";

export function StickyNavbar({ bannerImage }: StickyNavbarInterface) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row sm:items-end md:gap-6 ">
      <NavBarItem pathName="/WhoAreWe" name="QUI SOMMES NOUS ?" />
      <NavBarItem
        pathName="/OurValues"
        name="NOS ATOUTS, NOS GARANTIES, NOS DIFFÉRENCES ..."
      />
      <NavBarItem pathName="/Contact" name="CONTACT" />
    </ul>
  );

  //className={`site-off desktop-hide ${showMenu ? "show-menu" : ""}`}

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none bg-blue-gray-900">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link href={"/"}>
            <Image
              src={logo_objectifLarge}
              priority={true}
              alt="Logo Bout'ficelle"
            />
          </Link>
          <div className="hidden md:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h160M4 12h160M4 20h160"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </Collapse>
      </Navbar>
      <div className="mx-auto px-5 sm:px-16 py-12 ">
        <Typography variant="h2" color="blue-gray" className="mb-8">
          OBJECTIF LARGE <br /> Des Professionnels en Services Nautiques
        </Typography>
        <Card className="mb-8 overflow-hidden">
          <Image
            className="h-[20rem] w-full object-cover object-center"
            src={bannerImage}
            alt="image de bateau"
            priority={false}
          />
        </Card>
      </div>
    </>
  );
}
