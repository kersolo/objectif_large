import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { StickyNavbarInterface } from "../services/interfaces/StickyNavbarInterface";
import { useMediaQuery } from "../services/hooks/useMediaQuery";

export function Header({ bannerImage }: StickyNavbarInterface) {
  const isMobile = useMediaQuery("(max-width: 530px)");
  return (
    <>
      <header className="mx-auto px-5 sm:px-16 py-12 ">
        <Typography
          variant="h1"
          color="blue-gray"
          className={`mb-8 ${isMobile && "text-3xl"}`}
        >
          OBJECTIF LARGE <br /> Des Professionnels en Services Nautiques
        </Typography>
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
