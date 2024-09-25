"use client";
import React from "react";
import { Accordion, Timeline, Typography } from "@material-tailwind/react";
import { AccordionDefault } from "../components/AccordionDefault";
import Section from "../services/utils/Section";

export default function WhoAreWe() {
  return (
    <>
      <Section>
        <Accordion open={true}>
          <AccordionDefault
            isCursor={true}
            title="Qui Sommes nous ?"
            body={[
              "Des marins professionnels inscrits maritimes Marine Marchande, Capitaine 200 (voile & moteur), Capitaine 500, Capitaine 3000, Mécanicien 750",
              "Des moniteurs brevetés d'état Jeunesse et sport (voile, croisière, ...)",
              "Des moniteurs aux permis plaisance",
            ]}
          />
        </Accordion>
      </Section>
    </>
  );
}
