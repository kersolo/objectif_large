"use client";
import { StickyNavbar } from "./components/StickyNavbar";
import homeBanner from "../../public/homeBanner.jpg";
import { Timeline } from "@material-tailwind/react";
import { TimeLineItemsConnector } from "./components/TimeLineItems/TimeLineItemsConnector";
import { TimeLineItemsEnd } from "./components/TimeLineItems/TimeLineItemsEnd";

export default function Home() {
  return (
    <>
      <StickyNavbar picture={homeBanner} />
      <div className="mx-auto max-w-screen-lg">
        <Timeline>
          <TimeLineItemsConnector info="Organisation d'évènements nautiques" />
          <TimeLineItemsConnector info="Skippage, école de croisière" />
          <TimeLineItemsConnector info="Convoyages toutes destinations" />
          <TimeLineItemsConnector info="Prise en main personnalisée de votre voilier, de votre yacht à moteurs" />
          <TimeLineItemsEnd info="Coaching d'équipage de voiliers et de yachts à moteurs, pour vos croisières familiales, vos régates entre amis, vos régates entreprises" />
        </Timeline>
      </div>
    </>
  );
}
