"use client";
import React from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import contactBanner from "../../../public/contactBanner.jpg";
import { Header } from "../components/Header";
import Section from "../services/utils/Section";
import { TypographyDefault } from "../components/TypographyDefault";

export default function Contact() {
  return (
    <>
      <Header bannerImage={contactBanner} />
      <Section>
        <TypographyDefault
          children={[
            "Contactez nous, nous parlerons ensemble de votre projet, nous analyserons ensemble vos besoins",
          ]}
          variant="h4"
          className="mb-16 text-3xl"
        />
        <div className="md:flex md:justify-between">
          <div className="flex flex-col">
            <TypographyDefault
              children={[
                "Services en navigation: skippage, formation, convoyage et coaching d'équipage",
                "Organisation d'évènements nautiques",
              ]}
            />
            <br />
            <TypographyDefault
              children={[
                "Offres et devis personnalisés",
                "Missions garanties par des professionnels navigants",
                'Destinations "worldwide"',
              ]}
            />
            <br />
            <TypographyDefault
              className="text-lg mt-10 font-bold uppercase"
              children={["objectif large"]}
            />
            <TypographyDefault
              className="text-lg"
              children={[
                "+33 6 77 03 62 75",
                "@mail: objectif.large@orange.fr",
              ]}
            />
            <TypographyDefault
              className="leading-none text-2xl mt-10 font-bold "
              children={["À très bientôt ..."]}
            />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
