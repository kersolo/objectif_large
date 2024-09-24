import { TimeLineItemsProps } from "@/app/services/interfaces/TimeLineItemsProps";
import {
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";

export function TimeLineItemsConnector({ info }: TimeLineItemsProps) {
  return (
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3">
        <TimelineIcon />
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="leading-none text-2xl"
        >
          {info}
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-10"></TimelineBody>
    </TimelineItem>
  );
}
