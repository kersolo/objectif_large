"use client";
import React from "react";
import { StickyNavbar } from "../components/StickyNavbar";
import contactBanner from "../../../public/contactBanner.jpg";
import { Typography, Timeline } from "@material-tailwind/react";
import { TimeLineItemsConnector } from "../components/TimeLineItems/TimeLineItemsConnector";
import { TimeLineItemsEnd } from "../components/TimeLineItems/TimeLineItemsEnd";
import { ContactForm } from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <StickyNavbar picture={contactBanner} />
      <div className="mx-auto max-w-screen-lg">
        <Typography
          variant="h4"
          color="blue-gray"
          className="leading-none mb-16"
        >
          Contactez nous, nous parlerons ensemble de votre projet, nous
          analyserons ensemble vos besoins
        </Typography>
        <div className="flex gap-2">
          <div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="leading-none text-2xl"
            >
              Services en navigation: skippage, formation, convoyage et coaching
              d'équipage,
              <br />
              Organisation d'évènements nautiques,
            </Typography>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="leading-none text-2xl mt-10"
            >
              Offres et devis personnalisés,
              <br />
              Missions garanties par des professionnels navigants,
              <br />
              Destinations "worldwide"
            </Typography>
            <div></div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="leading-none text-2xl mt-10"
            >
              Offres et devis personnalisés,
              <br />
              Missions garanties par des professionnels navigants,
              <br />
              Destinations "worldwide"
            </Typography>
            <div className="mt-10">
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="leading-none text-lg font-bold uppercase"
              >
                objectif large
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="leading-none text-lg"
              >
                +33 6 77 03 62 75
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="leading-none text-lg"
              >
                @mail: objectif.large@orange.fr
              </Typography>
            </div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="leading-none text-2xl mt-10 font-bold "
            >
              À très bientôt ...
            </Typography>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
