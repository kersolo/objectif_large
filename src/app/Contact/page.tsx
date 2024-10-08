"use client";
import React from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import contactBanner from "../../../public/contactBanner.jpg";
import { Header } from "../components/Header";
import Section from "../services/utils/Section";
import { TypographyDefault } from "../components/TypographyDefault";
import { useMediaQuery } from "../services/hooks/useMediaQuery";

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 530px)");

  return (
    <>
      <Header bannerImage={contactBanner} />
      <Section>
        <TypographyDefault
          children={[
            "Contactez nous, nous parlerons ensemble de votre projet, nous analyserons ensemble vos besoins",
          ]}
          variant="h4"
          className={`mb-16 ${isMobile ? "text-2xl" : "text-3xl"}  `}
        />
        <div className="lg:flex lg:justify-between">
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
            {isMobile ? (
              <a className="text-lg" href="tel:+33677036275">
                +33 6 77 03 62 75
              </a>
            ) : (
              <a className="text-lg" href="callto:+33677036275">
                +33 6 77 03 62 75
              </a>
            )}
            <a className="text-lg" href="mailto:objectif.large@orange.fr">
              objectif.large@orange.fr
            </a>
            <TypographyDefault
              className="mt-10 font-bold "
              children={["À très bientôt ..."]}
            />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
