"use client";
import React from "react";
import { StickyNavbar } from "../components/StickyNavbar";
import ourValuesBanner from "../../../public/ourValuesBanner.jpg";
import { Typography } from "@material-tailwind/react";
import { Typographydefault } from "../components/Typographydefault";

export interface testonPros {
  variant: "h4";
  color: "blue-gray";
  className: "leading-none text-2xl";
}
export default function OurValues() {
  return (
    <>
      <StickyNavbar picture={ourValuesBanner} />
      <div className="mx-auto max-w-screen-lg flex flex-col gap-7">
        <Typography
          variant="h4"
          color="blue-gray"
          className="leading-none text-2xl"
        >
          Nos Atouts
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="leading-none text-2xl"
        >
          Une équipe de professionnels soudée
          <br />
          Des compétences variées en navigation, météorologie, mécanique,
          voilerie, construction composite, matelotage, électricité,
          informatique, gestion de navire & d'équipage, sécurité & urgence
          médicale, logistique, cuisine, ...
          <br />
          Des brevets de navigation reconnus au niveau international,
          normalisations STCW
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="leading-none text-2xl"
        >
          Une prestation définie par un contrat
          <br />
          Une équipe à terre qui suit en permanence les équipes embarquées:
          géo-localisation/tracking, routage, par l'utilisation de moyens de
          communication modernes entre terre & mer
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="leading-none text-2xl"
        >
          Un reporting régulier par nos équipes à terre
          <br />
          Un compte rendu systématique de fin de mission
          <br />
          Une relation personnalisée avec nos clients
        </Typography>
      </div>
    </>
  );
}
