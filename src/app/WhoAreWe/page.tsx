"use client";
import React from "react";
import { StickyNavbar } from "../components/StickyNavbar";
import whoAreWeBanner from "../../../public/whoAreWeBanner.jpg";
import { Timeline, Typography } from "@material-tailwind/react";
import { TimeLineItemsConnector } from "../components/TimeLineItems/TimeLineItemsConnector";
import { TimeLineItemsEnd } from "../components/TimeLineItems/TimeLineItemsEnd";

export default function WhoAreWe() {
  return (
    <>
      <StickyNavbar picture={whoAreWeBanner} />
      <div className="mx-auto max-w-screen-lg">
        <Typography
          variant="h4"
          color="blue-gray"
          className="leading-none mb-16"
        >
          Qui Sommes nous ?
        </Typography>
        <Timeline>
          <TimeLineItemsConnector info="Des marins professionnels inscrits maritimes Marine Marchande, Capitaine 200 (voile & moteur), Capitaine 500, Capitaine 3000, Mécanicien 750" />
          <TimeLineItemsConnector info="Des moniteurs brevetés d'état Jeunesse et sport (voile, croisière, ...)" />
          <TimeLineItemsEnd info="Des moniteurs aux permis plaisance" />
        </Timeline>
      </div>
    </>
  );
}
