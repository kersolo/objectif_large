"use client";
import React from "react";
import { AccordionDefault } from "../components/AccordionDefault";
import Section from "../services/utils/Section";
import whoAreWeBanner from "../../../public/whoAreWeBanner.jpg";
import { Header } from "../components/Header";

export default function WhoAreWe() {
  return (
    <>
      <Header bannerImage={whoAreWeBanner} />
      <Section>
        <AccordionDefault
          open={true}
          title="Qui Sommes nous ?"
          body={[
            "Des marins professionnels inscrits maritimes Marine Marchande, Capitaine 200 (voile & moteur), Capitaine 500, Capitaine 3000, Mécanicien 750",
            "Des moniteurs brevetés d'état Jeunesse et sport (voile, croisière, ...)",
            "Des moniteurs aux permis plaisance",
          ]}
        />
      </Section>
    </>
  );
}
