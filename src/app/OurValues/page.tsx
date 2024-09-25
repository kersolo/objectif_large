"use client";
import React from "react";
import { Accordion } from "@material-tailwind/react";
import { AccordionDefault } from "../components/AccordionDefault";
import Section from "../services/utils/Section";

export default function OurValues() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Section>
        <Accordion open={open === 1}>
          <AccordionDefault
            title="Nos Atouts"
            onclick={() => handleOpen(1)}
            body={[
              "Une équipe de professionnels soudée",
              "Des compétences variées en navigation, météorologie, mécanique, voilerie, construction composite, matelotage, électricité, informatique, gestion de navire & d'équipage, sécurité & urgence médicale, logistique, cuisine, ...",
              "Des brevets de navigation reconnus au niveau international, normalisations STCW",
            ]}
          />
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionDefault
            title="Nos Garanties"
            onclick={() => handleOpen(2)}
            body={[
              "Une prestation définie par un contrat",
              "Une équipe à terre qui suit en permanence les équipes embarquées: géo-localisation/tracking, routage, par l'utilisation de moyens de communication modernes entre terre & mer",
            ]}
          />
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionDefault
            title="Nos Différences"
            onclick={() => handleOpen(3)}
            body={[
              "Un reporting régulier par nos équipes à terre",
              "Un compte rendu systématique de fin de mission",
              "Une relation personnalisée avec nos clients",
            ]}
          />
        </Accordion>
      </Section>
    </>
  );
}
