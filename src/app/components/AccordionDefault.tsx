"use client";
import {
  AccordionHeader,
  AccordionBody,
  Typography,
  Accordion,
} from "@material-tailwind/react";
import Image from "next/image";
import iconOpenClose from "../../../public/iconOpenClose.svg";
import { AccordionDefaultInterface } from "../services/interfaces/AccordionDefaultInterface";
import { useMediaQuery } from "../services/hooks/useMediaQuery";

const CUSTOM_ANIMATION = {
  mount: { scale: 1, transition: "all 500ms" },
  unmount: { scale: 1, transition: "all 500ms" },
};

export function AccordionDefault({
  title,
  onclick,
  body,
  isCursor,
  open,
}: AccordionDefaultInterface) {
  const isMobile = useMediaQuery("(max-width: 530px)");
  return (
    <>
      <Accordion open={open} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          className={`leading-none text-3xl text-blue-gray-900 ${
            isCursor ? "flex justify-start gap-5" : "cursor-default"
          } ${isMobile && "text-2xl"} `}
          onClick={onclick}
        >
          {title}
          {isCursor && (
            <Image
              className={`${
                !open && "rotate-180"
              } transition-all ease-in-out duration-500`}
              src={iconOpenClose}
              alt="icon pour fermer ou ouvrir"
              priority={true}
            />
            // <Image
            //   className={`${
            //     !open && "flex rotate-180 transition-all ease-in-out delay-150"
            //   } `}
            //   src={iconOpenClose}
            //   alt="icon pour fermer ou ouvrir"
            //   priority={true}
            // />
          )}
        </AccordionHeader>
        <AccordionBody className="flex flex-col gap-3">
          {body.map((el, index) => (
            <div key={index}>
              <Typography
                className={`leading-none text-2xl text-blue-gray-900" ${
                  isMobile && "text-xl"
                }`}
              >
                {el}
              </Typography>
              <hr />
            </div>
          ))}
        </AccordionBody>
      </Accordion>
    </>
  );
}
