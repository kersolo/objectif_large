"use client";
import React, { useState } from "react";
import { AccordionDefault } from "../components/AccordionDefault";
import Section from "../services/utils/Section";
import ourValuesBanner from "../../../public/ourValuesBanner.jpg";
import { Header } from "../components/Header";

export default function OurValues() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Header bannerImage={ourValuesBanner} />
      <Section>
        <AccordionDefault
          open={open === 1}
          isCursor={true}
          title="Nos Atouts"
          onclick={() => handleOpen(1)}
          body={[
            "Une équipe de professionnels soudée",
            "Des compétences variées en navigation, météorologie, mécanique, voilerie, construction composite, matelotage, électricité, informatique, gestion de navire & d'équipage, sécurité & urgence médicale, logistique, cuisine, ...",
            "Des brevets de navigation reconnus au niveau international, normalisations STCW",
          ]}
        />
        <AccordionDefault
          open={open === 2}
          isCursor={true}
          title="Nos Garanties"
          onclick={() => handleOpen(2)}
          body={[
            "Une prestation définie par un contrat",
            "Une équipe à terre qui suit en permanence les équipes embarquées: géo-localisation/tracking, routage, par l'utilisation de moyens de communication modernes entre terre & mer",
          ]}
        />
        <AccordionDefault
          open={open === 3}
          isCursor={true}
          title="Nos Différences"
          onclick={() => handleOpen(3)}
          body={[
            "Un reporting régulier par nos équipes à terre",
            "Un compte rendu systématique de fin de mission",
            "Une relation personnalisée avec nos clients",
          ]}
        />
      </Section>
    </>
  );
}
