"use client";
import {
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

export interface AccordionDefaultInterface {
  title: string;
  body: string[];
  onclick?: () => void;
  isCursor?: boolean;
}

export function AccordionDefault({
  title,
  onclick,
  body,
  isCursor,
}: AccordionDefaultInterface) {
  return (
    <>
      <AccordionHeader
        className={`leading-none text-3xl text-blue-gray-900 ${
          isCursor && "cursor-default"
        }`}
        onClick={onclick}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="flex flex-col gap-3">
        {body.map((el, index) => (
          <div key={index}>
            <Typography className="leading-none text-2xl text-blue-gray-900">
              {el}
            </Typography>
            <hr />
          </div>
        ))}
      </AccordionBody>
    </>
  );
}
