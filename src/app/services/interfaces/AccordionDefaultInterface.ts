export interface AccordionDefaultInterface {
  title: string;
  body: string[];
  onclick?: () => void;
  isCursor?: boolean;
  open: boolean;
}
