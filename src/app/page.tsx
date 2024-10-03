"use client";
import { AccordionDefault } from "./components/AccordionDefault";
import Section from "./services/utils/Section";
import homeBanner from "../../public/homeBanner.jpg";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Header bannerImage={homeBanner} />
      <Section>
        <AccordionDefault
          open={true}
          title="Ce que nous proposons"
          body={[
            "Organisation d'évènements nautiques",
            "Skippage, école de croisière",
            "Convoyages toutes destinations",
            "Prise en main personnalisée de votre voilier, de votre yacht à moteurs",
            "Coaching d'équipage de voiliers et de yachts à moteurs, pour vos croisières familiales, vos régates entre amis, vos régates entreprises",
          ]}
        />
      </Section>
    </>
  );
}
