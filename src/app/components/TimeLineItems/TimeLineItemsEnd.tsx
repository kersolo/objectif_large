import { TimeLineItemsProps } from "@/app/services/interfaces/TimeLineItemsProps";
import {
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  Typography,
  TimelineBody,
} from "@material-tailwind/react";

export function TimeLineItemsEnd({ info }: TimeLineItemsProps) {
  return (
    <TimelineItem>
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
      <TimelineBody></TimelineBody>
    </TimelineItem>
  );
}
