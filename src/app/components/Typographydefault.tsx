import { Typography } from "@material-tailwind/react";

export function Typographydefault({ text, variant, className }) {
  return (
    <>
      <Typography variant={variant} color="blue-gray" className={className}>
        {text}
      </Typography>
    </>
  );
}
