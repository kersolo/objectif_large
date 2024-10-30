import { Card } from "@material-tailwind/react";
import Image from "next/image";
import { StickyNavbarInterface } from "../services/interfaces/StickyNavbarInterface";
import { useMediaQuery } from "../services/hooks/useMediaQuery";
import "./Header.css";

export function Header({ bannerImage }: StickyNavbarInterface) {
  const isMobile = useMediaQuery("(max-width: 530px)");
  return (
    <>
      <header className="mx-auto px-5 sm:px-16 py-12 ">
        <section id="body">
          <div className="content">
            <h1 className={`${isMobile ? "text-3xl" : "text-5xl"}`}>
              OBJECTIF LARGE
            </h1>
            <h1 className={`${isMobile ? "text-3xl" : "text-5xl"}`}>
              OBJECTIF LARGE
            </h1>
          </div>
        </section>

        <h1 id="hhh" className={`${isMobile ? "text-3xl" : "text-4xl"}`}>
          Des Professionnels en Services Nautiques
        </h1>
        <Card className="mb-8 overflow-hidden">
          <Image
            className="h-[20rem] w-full object-cover object-center"
            src={bannerImage}
            alt="image de bateau"
            priority={true}
          />
        </Card>
      </header>
    </>
  );
}
